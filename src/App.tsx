import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black w-full overflow-x-hidden relative">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Sticky Cart */}
      <div className="fixed bottom-8 right-6 md:right-10 z-50">
        <button className="w-14 h-14 md:w-16 md:h-16 bg-brand-purple rounded-full shadow-[0_0_20px_rgba(122,92,255,0.4)] flex items-center justify-center text-black hover:scale-105 transition-transform">
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/></svg>
        </button>
      </div>
    </div>
  );
}
