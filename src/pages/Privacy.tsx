import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Lock } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter italic">Privacybeleid & Dataveiligheid</h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <p className="text-lg text-gray-400">
              Bij Printshop Brullie nemen we uw privacy en de veiligheid van uw intellectuele eigendommen uiterst serieus.
            </p>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">1. Bescherming van Geüploade Bestanden</h2>
              <div className="bg-brand-anthracite/50 p-6 rounded-xl border border-white/5">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span><strong>Strikte Vertrouwelijkheid:</strong> Bestanden (.stl, .obj, .step, .3mf) die via de custom tool worden geüpload, worden uitsluitend gebruikt voor het beoordelen van de printbaarheid, het berekenen van de prijs en het uitvoeren van de uiteindelijke print.</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span><strong>Niet Gedeeld:</strong> Wij delen uw 3D-modellen nooit met derden. Ze worden lokaal verwerkt in onze slicer software en na goedkeuring direct naar de farm gestuurd.</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span><strong>Verwijderingsbeleid:</strong> Zodra uw bestelling is afgerond en succesvol is geleverd, worden uw ontwerpbestanden binnen 30 dagen veilig verwijderd van onze actieve servers, tenzij u expliciet verzoekt ze te bewaren voor toekomstige herhaalbestellingen.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">2. Persoonsgegevens</h2>
              <p>
                Voor het afhandelen van uw bestelling verzamelen en verwerken wij uw NAW-gegevens (Naam, Adres, Woonplaats), e-mailadres en betalingsgegevens. Wij gebruiken deze informatie uitsluitend om de overeenkomst uit te voeren en pakketten te verzenden via onze logistieke partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">3. Uw Rechten</h2>
              <p>
                U heeft te allen tijde het recht om inzicht te krijgen in de gegevens die wij van u hebben, deze te laten wijzigen of volledig te laten verwijderen (het "recht om vergeten te worden"). Neem hiervoor contact met ons op via e-mail.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
