import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white backdrop-blur-sm fixed w-full z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="newlogo.png" alt="Logo" className="h-10 w-10" />
            <Link to="/" className="ml-2 text-xl font-bold text-slate-800">
              Sanction Guard
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <Link
          to="/pricing"
          className="px-4 py-3 border-b text-slate-600 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className="px-4 py-3 border-b text-slate-600 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-3 text-slate-600 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
