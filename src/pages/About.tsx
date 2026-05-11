import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
      <h1 className="font-display text-4xl font-bold text-white mb-4">Over Ons</h1>
      <p className="text-gray-400 mb-8 max-w-md">Ontdek het verhaal achter Printshop Brullie.</p>
      <Link to="/" className="text-brand-blue hover:text-white transition-colors">&larr; Terug naar de homepage</Link>
    </div>
  );
}
