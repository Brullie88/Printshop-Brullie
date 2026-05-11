import React from "react";
import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter italic">Algemene Voorwaarden</h1>
          
          <div className="prose prose-invert prose-brand max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">1. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten van Printshop Brullie. Door een bestelling te plaatsen of een custom print aan te vragen, gaat u akkoord met deze voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">2. Prijzen en Betalingen</h2>
              <p>
                Alle vermelde prijzen zijn inclusief BTW en exclusief verzendkosten, tenzij anders vermeld. Betaling dient vooraf te geschieden via de aangeboden betaalmethoden (iDEAL, Bancontact, etc.). Voor custom prints ontvangt u eerst een vrijblijvende offerte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">3. Custom Prints (Maatwerk)</h2>
              <p>
                Producten die specifiek voor u worden geprint (maatwerk), kunnen <strong>niet</strong> worden geretourneerd, tenzij er sprake is van een productiefout. Wij baseren onze print op de door u aangeleverde bestanden. Zorg er rekening mee dat ontwerpfouten in uw bestand niet onder onze verantwoordelijkheid vallen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">4. Intellectueel Eigendom</h2>
              <p>
                Wanneer u een 3D-model uploadt voor een custom print, garandeert u dat u de rechten (of toestemming) heeft om dit object te laten produceren. Printshop Brullie claimt geen eigendomsrechten op uw ontwerpen. Uw bestanden worden uitsluitend gebruikt voor de productie van uw bestelling en worden niet gedeeld met derden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">5. Aansprakelijkheid</h2>
              <p>
                Onze 3D-geprinte onderdelen worden met grote zorg geproduceerd, maar zijn door de aard van het FDM/Resin printproces onderhevig aan bepaalde toleranties. Printshop Brullie is niet aansprakelijk voor schade ontstaan door verkeerd gebruik van onze producten.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
