import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingCart, Star, CheckCircle2, Package, ArrowLeft, Plus, Minus } from "lucide-react";
import { products } from "../lib/data";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!product) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            name: product.name,
            price: product.numericPrice,
            image: product.image,
            quantity: quantity,
          }],
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Er ging iets mis');
      }
    } catch (err: any) {
      alert("Betalingssysteem niet geconfigureerd: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Product niet gevonden</h1>
        <Link to="/shop" className="text-brand-blue hover:underline">Terug naar de shop</Link>
      </div>
    );
  }

  return (
    <div className="flex-1 py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Terug naar shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-anthracite rounded-2xl overflow-hidden border border-white/5 p-4 mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/1a1a1a/cccccc?text=Product' }} />
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              <div className="w-24 h-24 flex-shrink-0 bg-brand-anthracite rounded-xl overflow-hidden border-2 border-brand-blue">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/1a1a1a/cccccc?text=Product' }} />
              </div>
              <div className="w-24 h-24 flex-shrink-0 bg-brand-anthracite rounded-xl overflow-hidden border border-white/10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/1a1a1a/cccccc?text=Product' }} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
                {product.badge}
              </span>
            )}
            <h1 className="font-display text-4xl font-bold text-white mb-2 uppercase tracking-tighter italic">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-blue text-brand-blue' : 'text-white/20'}`} />
                ))}
              </div>
              <span className="text-white font-medium text-sm">{product.rating}</span>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-brand-blue mb-8">{product.price}</div>

            <p className="text-gray-300 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Product Kenmerken</h3>
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Aantal</label>
                <div className="flex items-center gap-2 bg-brand-anthracite border border-white/10 rounded-lg p-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-white font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 mt-6">
                <button 
                  onClick={handleCheckout} 
                  disabled={isLoading}
                  className="w-full bg-brand-blue text-brand-black px-8 py-4 font-bold uppercase tracking-widest text-sm rounded hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <ShoppingCart className="w-5 h-5" /> {isLoading ? "Verwerken..." : "Direct Kopen (inclusief iDeal & PayPal)"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-gray-500" />
                <span>Op voorraad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-500" />
                <span>Veilig betalen</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
