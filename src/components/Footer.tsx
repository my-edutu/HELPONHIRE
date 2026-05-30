import React, { useState } from 'react';
import { Briefcase, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubsubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800" id="main-footer">
      {/* Top Banner section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Comprehensive Insurance</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Every booking is backed by our $1M guarantee.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Nationwide Background Checks</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Only the top 3% of applicants pass our screening process.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <Briefcase className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider">Transparent Pricing</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Clear hourly rates. No surprise platform fees.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setActiveTab('find-pros')}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A201C] text-[#C1E929] shadow-sm">
                <Briefcase className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Help On <span className="text-[#C1E929]">Hire</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Trusted professionals for everyday tasks, errands, and business staffing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('find-pros')} className="hover:text-white text-zinc-500 transition">Home</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white text-zinc-500 transition">Services</button>
              </li>
              <li>
                <button onClick={() => {
                  setActiveTab('find-pros');
                  setTimeout(() => {
                    const el = document.getElementById('how-it-works-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 150);
                }} className="hover:text-white text-zinc-500 transition">How It Works</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('business')} className="hover:text-white text-zinc-500 transition">For Businesses</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('join')} className="hover:text-white text-zinc-500 transition">Become a Professional</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white text-zinc-500 transition">Contact</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-xs text-zinc-500">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#C1E929] shrink-0 mt-0.5" />
                <span>Port Harcourt, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#C1E929] shrink-0" />
                <span>+234 (800) HELP-HIRE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#C1E929] shrink-0" />
                <span>support@helponhire.test</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[10px] uppercase font-extrabold text-[#C1E929] bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/20">WhatsApp Desk</span>
                <span>Direct Live Support</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Socials</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">Facebook</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C1E929] text-zinc-500 transition block">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer text */}
        <div className="mt-16 border-t border-zinc-850 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-650">
          <p>© {new Date().getFullYear()} Help On Hire. Under professional licensing guidelines.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#C1E929] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#C1E929] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#C1E929] transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
