import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";  

export default function Navbar() {
  return (
    <nav className="bg-white backdrop-blur-sm fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="public/newlogo.png" className="h-10 w-10 text-blue-600" />
            <Link to="/" className="ml-2 text-xl font-bold text-slate-800">Sanction Guard</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
