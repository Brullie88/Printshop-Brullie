import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../lib/data";

const categories = ["Alle", "Gaming", "Home", "Organizers", "Gadgets", "Gifts"];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category")?.toLowerCase() || "alle";

  const filteredProducts = currentCategory === "alle" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <div className="flex-1 flex flex-col py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter italic">Onze Producten</h1>
          
          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-lg inline-flex flex-wrap overflow-hidden">
            {categories.map(cat => {
              const isActive = currentCategory === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSearchParams(cat.toLowerCase() === 'alle' ? {} : { category: cat.toLowerCase() })}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded transition-colors ${isActive ? "bg-brand-blue text-brand-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/product/${product.id}`} className="group block relative bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <div className="relative aspect-square overflow-hidden bg-brand-black rounded-lg mb-4">
                  {product.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-80" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/1a1a1a/cccccc?text=Product' }} />
                </div>
                
                <h4 className="text-xs font-bold uppercase tracking-tighter text-white mb-2 line-clamp-1">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-brand-blue font-bold text-sm">{product.price}</span>
                  <button className="bg-white text-brand-black text-[10px] px-2 py-1 font-bold rounded uppercase">Koop</button>
                </div>
              </Link>
            </motion.div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400">
              Geen producten gevonden in deze categorie.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
