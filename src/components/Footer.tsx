import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="src\images\newlogo.png" className="h-10 w-10 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Sanction Guard</span>
            </div>
            <p className="text-slate-400">
              Protecting your business through advanced sanction screening solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#51aee5]" />
                <span className="text-slate-400">sanctionguard2023@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#51aee5]" />
                <span className="text-slate-400">+94 - 769759727</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#51aee5]" />
                <span className="text-slate-400"></span>IIT Cityoffice, Colombo 6
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg flex-1 text-slate-900"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sanction Guard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}