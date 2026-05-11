import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-4">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-brand-black font-bold text-xl italic">
                 B
               </div>
               <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                 PRINTSHOP <span className="text-brand-blue">BRULLIE</span>
               </span>
             </div>
             <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
               Onze passie voor 3D-printen brengt jouw ideeën tot leven. Ontdek unieke producten of vraag een custom print aan.
             </p>
             <div className="flex items-center gap-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-brand-anthracite border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-all group">
                 <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-brand-anthracite border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-all group">
                 <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-brand-anthracite border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-all group">
                 <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
               </a>
             </div>
          </div>

          <div>
             <h3 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-sm">Shop</h3>
             <ul className="space-y-3">
                <li><Link to="/shop?category=gaming" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Gaming Accessoires</Link></li>
                <li><Link to="/shop?category=home" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Home Decor</Link></li>
                <li><Link to="/shop?category=organizers" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Organizers</Link></li>
                <li><Link to="/shop?category=gadgets" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Gadgets</Link></li>
                <li><Link to="/shop?category=gifts" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Cadeaus</Link></li>
             </ul>
          </div>

          <div>
             <h3 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-sm">Informatie</h3>
             <ul className="space-y-3">
                <li><Link to="/about" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Over Ons</Link></li>
                <li><Link to="/faq" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Veelgestelde Vragen</Link></li>
                <li><Link to="/shipping" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Verzending & Retouren</Link></li>
                <li><Link to="/terms" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Algemene Voorwaarden</Link></li>
                <li><Link to="/privacy" className="text-white/70 hover:text-brand-blue uppercase text-xs tracking-wider transition-colors">Privacybeleid</Link></li>
             </ul>
          </div>

          <div>
             <h3 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Nieuwsbrief</h3>
             <p className="text-gray-400 text-sm mb-4">Ontvang exclusieve designs en aanbiedingen direct in je inbox.</p>
             <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
               <div className="relative">
                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                 <input 
                   type="email" 
                   placeholder="Jouw e-mailadres" 
                   className="w-full bg-brand-anthracite border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                   required
                 />
               </div>
               <button 
                 type="submit" 
                 className="w-full py-2.5 bg-white text-brand-black hover:bg-brand-blue hover:text-white font-medium rounded-lg text-sm transition-colors"
               >
                 Inschrijven
               </button>
             </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} PRINTSHOP BRULLIE — AMSTERDAM / ANTWERPEN
          </div>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
             <span className="flex items-center gap-1"><div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px] text-white">iDEAL</div></span>
             <span className="flex items-center gap-1"><div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px] text-white">iPay</div></span>
             <span className="flex items-center gap-1"><div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center font-bold text-[10px] text-white">PayP</div></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
