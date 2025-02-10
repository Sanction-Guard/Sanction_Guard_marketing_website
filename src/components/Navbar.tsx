import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";  // Import Link

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-slate-800">Sanction Guard</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600">Home</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600">Contact Us</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
