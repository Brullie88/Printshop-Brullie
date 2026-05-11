import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Producten & Materiaal",
    items: [
      {
        q: "Welke materialen gebruiken jullie?",
        a: "We printen hoofdzakelijk met PLA (milieuvriendelijk en perfect voor decoratie), PETG (sterker en waterbestendig, goed voor mechanische onderdelen), en ABS/TPU op aanvraag. Al onze filamenten zijn van premium kwaliteit voor het langste behoud van kleur en sterkte."
      },
      {
        q: "Zijn de prints voedselveilig of vaatwasserbestendig?",
        a: "Over het algemeen zijn standaard 3D prints (FDM) niet voedselveilig vanwege de micro-laagjes waar bacteriën in kunnen groeien. Daarnaast is PLA niet hittebestendig en zal vervormen in de vaatwasser of een heel hete auto. Voor hete omgevingen raden wij ABS of temperatuurbestendig PETG aan."
      }
    ]
  },
  {
    category: "Custom Prints",
    items: [
      {
        q: "Ik heb een idee maar geen 3D bestand, kunnen jullie helpen?",
        a: "Absoluut! Naast een print-service, bieden we ook een design-service aan. Neem via de mail of social media contact op met ons en leg je idee uit. We maken dan een ontwerp op maat, dat we na goedkeuring voor je uitprinten."
      },
      {
        q: "Wat is de maximale printgrootte?",
        a: "Onze huidige hoofdfarm kan objecten printen tot ongeveer 30x30x40 cm in één stuk. Grotere objecten kunnen we vaak slim opdelen en naderhand extreem sterk aan elkaar monteren."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("cat-0-item-0");

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter italic">Veelgestelde Vragen</h1>
          <p className="text-gray-400">Vind snel antwoord op de meest gestelde vragen.</p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((category, cIdx) => (
            <motion.div 
              key={cIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cIdx * 0.1 }}
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((item, iIdx) => {
                  const id = `cat-${cIdx}-item-${iIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={iIdx} 
                      className={`bg-white/5 border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-brand-blue/50' : 'border-white/10'}`}
                    >
                      <button 
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                        onClick={() => toggleQuestion(id)}
                      >
                        <span className="font-medium text-white pr-4">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/20"
                          >
                            <div className="px-6 py-5 text-gray-300 text-sm leading-relaxed border-t border-white/5">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
