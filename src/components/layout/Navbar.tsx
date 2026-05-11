import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Custom Print", href: "/custom" },
    { name: "Over Ons", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-md bg-black/20",
        isScrolled
          ? "py-4"
          : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-brand-black font-bold text-xl italic group-hover:shadow-[0_0_15px_rgba(0,183,255,0.5)] transition-shadow">
              B
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white uppercase group-hover:text-brand-blue transition-colors">
              PRINTSHOP <span className="text-brand-blue">BRULLIE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-brand-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors relative flex items-center justify-center bg-brand-anthracite/50 p-2 rounded-full border border-white/10 hover:border-brand-blue/50 group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-brand-blue text-white text-[10px] items-center justify-center flex font-bold w-4 h-4 rounded-full">
                2
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-anthracite z-50 p-6 flex flex-col md:hidden border-l border-white/5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold tracking-tight text-white">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-brand-black rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-300 hover:text-white flex items-center justify-between group"
                  >
                    {link.name}
                    <span className="text-brand-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">&rarr;</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-6 flex gap-4">
                 <button className="flex-1 flex items-center text-sm font-medium justify-center gap-2 bg-brand-black p-3 rounded-lg text-gray-300 hover:text-white">
                  <User className="w-4 h-4" /> Account
                </button>
                <button className="flex-1 flex items-center text-sm font-medium justify-center gap-2 bg-brand-black p-3 rounded-lg text-gray-300 hover:text-white">
                  <Search className="w-4 h-4" /> Zoeken
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
