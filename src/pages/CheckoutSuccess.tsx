import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const mock = searchParams.get("mock");

  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">Bedankt voor je bestelling!</h1>
          <p className="text-gray-300 mb-8">
            Je betaling is succesvol afgerond. We gaan direct aan de slag met je 3D print! 
            {mock && " (Dit was een test betaling omdat er geen Stripe keys zijn geconfigureerd)."}
          </p>

          <Link to="/" className="inline-block bg-brand-blue text-brand-black px-8 py-3 font-bold uppercase tracking-widest text-xs rounded hover:scale-105 transition-transform">
            Terug naar Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
