import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 grayscale invert">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/7101bea6-53cc-46ea-b407-aac56d1dadbf/1776523524968_logo_siket_-Photoroom.png" 
                alt="Siket Sacco Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold tracking-tight">SIKET SACCO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering our members through innovative financial solutions and fostering a culture of savings and investment for long-term prosperity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-green-700 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-green-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-green-700 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-green-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Membership Info</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Loan Products</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Savings Plans</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Dividends & Rebates</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>123 Sacco Plaza, Financial District, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>info@siketsacco.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest offers and news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-green-500"
              />
              <button className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Siket Sacco Society Ltd. All rights reserved. Licensed by SASRA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;