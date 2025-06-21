
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">EliteStore</h2>
            <p className="text-slate-300 mb-4 max-w-md">
              Your premier destination for quality products and exceptional service. 
              Discover our curated collection of premium items.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/policies" className="text-slate-300 hover:text-white transition-colors">Policies</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2025 EliteStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;