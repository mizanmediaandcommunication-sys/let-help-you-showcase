import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/7101bea6-53cc-46ea-b407-aac56d1dadbf/1776523524968_logo_siket_-Photoroom.png" 
              alt="Siket Sacco Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-slate-900 tracking-tight">SIKET</span>
              <span className="text-xl font-bold text-green-700 tracking-tight"> SACCO</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">About Us</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">Loans</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-slate-700">Log In</a>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md">
              Portal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;