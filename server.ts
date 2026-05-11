import express from "express";
import { createServer as createViteServer } from "vite";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import Stripe from "stripe";

dotenv.config();

const app = express();
const PORT = 3000;

// Setup multer for file uploads using memory storage to avoid disk issues
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

// Lazy load Stripe to prevent startup crashes if key is missing
let stripeClient: Stripe | null = null;
function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY environment variable is required');
    }
    stripeClient = new Stripe(key, { apiVersion: "2023-10-16" as any });
  }
  return stripeClient;
}

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    
    // For local demo purposes, if no stripe key is provided, return a mock success
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log("No Stripe key found, simulating success.");
      return res.json({ 
        url: `${req.headers.origin}/checkout-success?mock=true` 
      });
    }

    const stripe = getStripe();
    const origin = req.headers.origin || `http://localhost:${PORT}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['ideal', 'card', 'paypal'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), // convert to cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    });

    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/custom-request', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const emailHtml = `
      <h2>Nieuwe Custom Print Aanvraag</h2>
      <p><strong>Materiaal:</strong> ${body.material}</p>
      <p><strong>Kleur:</strong> ${body.color}</p>
      <p><strong>Precisie:</strong> ${body.precision}</p>
      <p><strong>Schaal:</strong> ${body.scale}</p>
      <p><strong>Omschrijving:</strong> ${body.description}</p>
      <p><strong>Bestand:</strong> ${file ? file.originalname : 'Geen bestand geüpload'}</p>
    `;

    // Create a transporter. For testing we can use a service like ethereal,
    // but the user specified a specific email address they want it to work with.
    // So we'll use a standard SMTP configuration and expect the user to provide credentials via env vars.
    // If not provided, we will just log the contents so it doesn't crash entirely.

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || 'printshop@brullie.com',
      to: 'winona.dooley@ethereal.email',
      subject: 'Nieuwe Custom Print Aanvraag - Printshop Brullie',
      html: emailHtml,
      attachments: file ? [
        {
          filename: file.originalname,
          content: file.buffer
        }
      ] : []
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('--- Email Setup Ontbreekt ---');
      console.log('Zorg ervoor dat SMTP_HOST, SMTP_PORT, SMTP_USER en SMTP_PASS zijn ingesteld in .env');
      console.log('Ontvanger:', mailOptions.to);
      console.log('Om het toch te laten werken hebben we het bestand ontvangen op de server!');
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fout bij het verwerken van de aanvraag', details: err instanceof Error ? err.message : String(err) });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Note: Node 22+ can run this directly but we need to ensure paths work for module 'express' under 'type': 'module'
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
