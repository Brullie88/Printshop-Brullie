import React from "react";
import { motion } from "motion/react";
import { Truck, RotateCcw, Clock, AlertCircle } from "lucide-react";

export default function Shipping() {
  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter italic">Verzending & Retouren</h1>
          <p className="text-gray-400">Alles wat je moet weten over de bezorging van jouw 3D prints.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Verzending</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-0.5">•</span>
                <span><strong>Standaardproducten:</strong> Voor 15:00 besteld, binnen 1-2 werkdagen geprint en verzonden.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-0.5">•</span>
                <span><strong>Custom Prints:</strong> De levertijd wordt gecommuniceerd in de offerte (gemiddeld 3-5 werkdagen, afhankelijk van printtijd).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-0.5">•</span>
                <span><strong>Kosten:</strong> Standaard verzendkosten bedragen €5,95 binnen Nederland en €7,95 naar België. Gratis verzending bij bestellingen boven de €50,-.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-brand-purple/20 rounded-xl flex items-center justify-center text-brand-purple mb-6">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Makatelijk Retourneren</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-purple font-bold mt-0.5">•</span>
                <span><strong>Zichttermijn:</strong> Voor standaardproducten heb je 14 dagen bedenktijd om de bestelling te retourneren.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-purple font-bold mt-0.5">•</span>
                <span><strong>Staat:</strong> Het product dient ongebruikt en in de originele staat te zijn. Retourkosten zijn voor eigen rekening.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-purple font-bold mt-0.5">•</span>
                <span><strong>Terugbetaling:</strong> Na ontvangst storten wij het aankoopbedrag binnen 5 werkdagen terug.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 md:p-8 flex items-start gap-4"
        >
          <AlertCircle className="w-8 h-8 text-brand-blue flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-brand-blue uppercase tracking-widest mb-2">Let op: Custom Prints</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Het recht van retour is <strong>niet</strong> van toepassing op custom prints of gepersonaliseerde items, omdat deze uitsluitend en specifiek voor u worden geproduceerd. Mocht er echter een productiefout zijn gemaakt door Printshop Brullie, neem dan binnen 3 dagen na ontvangst contact met ons op en wij printen het kosteloos opnieuw.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
