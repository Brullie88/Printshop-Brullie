import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Rocket, 
  ShieldCheck, 
  ThumbsUp, 
  Truck, 
  Star, 
  ArrowRight,
  Upload,
  CheckCircle2
} from "lucide-react";
import { cn } from "../lib/utils";

// Dummy Data
const bestsellers = [
  { id: "1", name: "Cyberpunk Controller Stand", price: "€ 24,95", rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: "2", name: "Articulated Dragon", price: "€ 34,50", rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1615554109893-9c593675276e?auto=format&fit=crop&q=80&w=600&h=600", badge: "Populair" },
  { id: "3", name: "Hexagon Wall Planter", price: "€ 18,00", rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: "4", name: "Minimalist Headphone Mount", price: "€ 15,95", rating: 4.6, reviews: 210, image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=600&h=600" }
];

const categories = [
  { title: "Gaming", count: "45+", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=500&h=300" },
  { title: "Home Decor", count: "80+", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=500&h=300" },
  { title: "Organizers", count: "30+", image: "https://images.unsplash.com/photo-1595126749004-9a84b065a2d0?auto=format&fit=crop&q=80&w=500&h=300" },
  { title: "Gadgets", count: "50+", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=500&h=300" }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920&h=1080')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/80 to-brand-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start pt-10 lg:pt-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold uppercase tracking-wider text-brand-blue mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                Premium 3D Printing Service
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter italic text-white uppercase leading-[0.9] mb-6">
                Unieke 3D Prints.<br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                  Gemaakt met<br /> precisie.
                </span>
              </h1>
              
              <p className="text-lg text-white/60 font-light mb-8 max-w-xl leading-relaxed">
                Van high-end decoratie tot gepersonaliseerde ontwerpen en functionele gadgets — Printshop Brullie brengt jouw ideeën razendsnel tot leven met de modernste printtechnieken.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/shop" className="inline-flex items-center justify-center gap-2 bg-brand-blue text-brand-black px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform group overflow-hidden relative">
                  <span className="relative z-10">Shop Nu</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/custom" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/5 transition-colors group backdrop-blur-sm">
                  <span>Custom Design</span>
                  <Rocket className="w-4 h-4 text-brand-purple group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
               className="relative lg:h-[600px] flex items-center justify-center"
            >
               {/* Hero Visual Container */}
               <div className="relative w-full max-w-md mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 rounded-3xl blur-2xl transform rotate-6" />
                 <div className="relative bg-gradient-to-br from-brand-anthracite to-brand-black border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl overflow-hidden aspect-square">
                    <img 
                      src="https://images.unsplash.com/photo-1620640960013-17257df66fbc?auto=format&fit=crop&q=80&w=800&h=800" 
                      alt="3D Printed Prototype" 
                      className="w-full h-full object-cover rounded-xl mix-blend-lighten opacity-80"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x800/1a1a1a/cccccc?text=Prototype' }}
                    />
                    
                    {/* Floating Product Elements */}
                    <div className="absolute -bottom-6 -left-6 bg-brand-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[bounce_4s_infinite]">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">0.04mm Precisie</p>
                        <p className="text-xs text-gray-400">Extreme detailkwaliteit</p>
                      </div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vertrouwen Sectie */}
      <section className="py-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12"
          >
            {[
              { icon: Truck, title: "Snelle Verzending", desc: "Verstuurd binnen 24-48 uur" },
              { icon: Star, title: "Hoge Printkwaliteit", desc: "Industriële standaard" },
              { icon: ShieldCheck, title: "Veilig Betalen", desc: "iDEAL, Bancontact & meer" },
              { icon: ThumbsUp, title: "Gepersonaliseerd", desc: "Maatwerk is ons ding" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-all">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Bestsellers Sectie */}
      <section className="py-24 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tighter italic text-white mb-4">Onze Bestsellers</h2>
              <p className="text-gray-400">De meest geliefde ontwerpen van dit moment.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-blue transition-colors group">
              Bekijk alles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
                
                <h4 className="text-xs font-bold uppercase tracking-tighter text-white mb-2">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-brand-blue font-bold text-sm">{product.price}</span>
                  <button className="bg-white text-brand-black text-[10px] px-2 py-1 font-bold rounded uppercase">Koop</button>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/shop" className="inline-flex items-center justify-center w-full bg-white/5 border border-white/10 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">
               Bekijk alle producten
             </Link>
          </div>
        </div>
      </section>

      {/* 4. Productcategorieën */}
      <section className="py-20 bg-brand-anthracite/20 border-t border-white/5 relative overflow-hidden">
        {/* Subtle glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-center text-white mb-12"
          >
            Shop op Categorie
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/shop?category=${cat.title.toLowerCase()}`} className="block relative h-64 rounded-2xl overflow-hidden group">
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/1a1a1a/cccccc?text=Categorie' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-brand-blue transition-colors">{cat.title}</h3>
                  <p className="text-sm text-gray-300">{cat.count} producten</p>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Waarom Printshop Brullie */}
      <section className="py-24 bg-brand-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Waarom Printshop Brullie?</h2>
            <p className="text-gray-400">Wij combineren geavanceerde 3D-print technologie met een scherp oog voor detail en premium afwerking.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
               { title: "Hoge Detailkwaliteit", desc: "We printen op resoluties tot 0.05mm voor de fijnste details en gladste oppervlakken.", icon: Star },
               { title: "Sterke Materialen", desc: "Van standaard PLA tot industriële carbon-fiber combinaties voor speciale toepassingen.", icon: ShieldCheck },
               { title: "Maatwerk Mogelijk", desc: "Eigen ontwerp? Geen probleem. Wij begeleiden je van digitaal bestand tot eindproduct.", icon: Rocket }
            ].map((usp, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.15 }}
                 className="bg-brand-anthracite/30 border border-white/5 rounded-2xl p-8 hover:border-brand-blue/30 transition-colors group"
               >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                     <usp.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-medium text-xl text-white mb-3">{usp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{usp.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Custom Print Aanvraag */}
      <section className="py-24 bg-brand-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-anthracite/50 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Dekor elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-white text-xs font-medium mb-4">
                  Maker Studio
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Heb je een eigen ontwerp?</h2>
                <p className="text-gray-400 mb-8 max-w-md">
                  Upload je stl, obj of step bestand en ontvang direct een inschatting van de kosten. Wij printen het in de hoogste kwaliteit, exclusief voor jou.
                </p>

                <ul className="space-y-4 mb-8">
                  {["Ondersteunt STL, OBJ, STEP, 3MF bestanden", "Keuze uit PLA, PETG, ABS & TPU", "Persoonlijk advies bij complexe prints"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upload Dropzone */}
              <Link to="/custom" className="block bg-brand-black/50 border border-dashed border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-brand-blue/50 transition-colors hover:bg-brand-black/80 min-h-[300px]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 group-hover:scale-110 transition-all duration-300">
                   <Upload className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-white font-medium mb-2">Start je aanvraag hier...</h3>
                <p className="text-sm text-gray-500 mb-6">Klik om een 3D model te uploaden</p>
                <div className="inline-block bg-white text-brand-black px-6 py-2.5 rounded-lg font-medium text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-lg">
                  Naar Upload Tool
                </div>
                <div className="mt-6 text-xs text-gray-600">Max. bestandsgrootte: 250MB</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section className="py-24 bg-brand-anthracite/20 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-bold text-center text-white mb-16"
            >
              Wat Klanten Zeggen
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { name: "Jeroen K.", text: "Ongelooflijke printkwaliteit. De details op mijn D&D miniaturen zijn perfect gelukt. Zeer tevreden!", rating: 5 },
                  { name: "Sander V.", text: "De snelle communicatie over mijn custom bestand was super. Het eindresultaat is robuust en mooi.", rating: 5 },
                  { name: "Lisa M.", text: "Prachtige organizer voor mijn bureau. Ziet er echt premium uit en voelt stevig aan.", rating: 4 }
               ].map((review, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="bg-brand-black border border-white/5 p-8 rounded-2xl relative"
                  >
                     <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, j) => (
                           <Star key={j} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                        ))}
                     </div>
                     <p className="text-gray-300 text-sm italic mb-6">"{review.text}"</p>
                     <p className="text-white font-medium text-sm">{review.name}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Instagram Feed */}
      <section className="py-16 bg-brand-black border-t border-white/5 overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center"
         >
            <h2 className="font-display text-2xl font-bold text-white mb-2">@printshopbrullie</h2>
            <p className="text-gray-400 text-sm">Volg ons op Instagram voor behind the scenes en nieuwe ontwerpen.</p>
         </motion.div>
         <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:px-8 hide-scrollbar">
            {[
               "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400&h=400",
               "https://images.unsplash.com/photo-1631541909061-71e34a66a7b3?auto=format&fit=crop&q=80&w=400&h=400",
               "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80&w=400&h=400",
               "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400&h=400",
               "https://images.unsplash.com/photo-1596489380620-30722cc7dd98?auto=format&fit=crop&q=80&w=400&h=400"
            ].map((img, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="min-w-[250px] aspect-square rounded-xl overflow-hidden snap-center relative group flex-shrink-0 cursor-pointer"
               >
                  <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/cccccc?text=Instagram' }} />
                  <div className="absolute inset-0 bg-brand-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 9. Nieuwsbrief (Minimal) */}
      <section className="py-24 bg-brand-black border-t border-white/5 text-center px-4">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-2xl mx-auto"
         >
            <h2 className="font-display text-3xl font-bold text-white mb-4">Mis Geen Enkel Ontwerp</h2>
            <p className="text-gray-400 mb-8">Schrijf je in voor onze nieuwsbrief en ontvang als eerste updates over nieuwe producten, exclusieve kortingen en 3D-print inspiratie.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Jouw e-mailadres" 
                 className="flex-1 bg-brand-anthracite border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                 required
               />
               <button 
                 type="submit" 
                 className="bg-brand-blue text-white px-6 py-3.5 rounded-xl font-medium hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,183,255,0.2)]"
               >
                 Inschrijven
               </button>
            </form>
         </motion.div>
      </section>

    </div>
  );
}
