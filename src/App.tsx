import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FindProsTab } from './components/FindProsTab';
import { ServicesTab } from './components/ServicesTab';
import { BusinessTab } from './components/BusinessTab';
import { AboutTab } from './components/AboutTab';
import { JoinProTab } from './components/JoinProTab';
import { ContactTab } from './components/ContactTab';
import { BookingFlow } from './components/BookingFlow';
import { MessageCircle, X, Send, User, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('find-pros');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProId, setSelectedProId] = useState<string | undefined>(undefined);

  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [waMessage, setWaMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'agent'; text: string }>>([
    { sender: 'agent', text: 'Hi! I am the Help On Hire Port Harcourt routing officer. Which dispatch desk do you need today?' }
  ]);

  const handleOpenBooking = (serviceId?: string, proId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedProId(proId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedServiceId(undefined);
    setSelectedProId(undefined);
  };

  const handleSendWaMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waMessage.trim()) return;
    const userMsg = waMessage.trim();
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setWaMessage('');

    setTimeout(() => {
      let reply = "Your message is routed to our GRA Port Harcourt dispatch officer. We will text you back on your mobile number shortly!";
      if (userMsg.toLowerCase().includes('clean') || userMsg.toLowerCase().includes('home')) {
        reply = "Home services triage is notified. A Port Harcourt desk officer is assigning the closest vetted professional right now. Standby!";
      } else if (userMsg.toLowerCase().includes('staff') || userMsg.toLowerCase().includes('business')) {
        reply = "Corporate workforce desk has logged your request. Our B2B coordinator will confirm availability files in under 15 minutes.";
      }
      setChatHistory(prev => [...prev, { sender: 'agent', text: reply }]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-indigo-600 selection:text-white" id="applet-root">
      
      {/* Dynamic top navigation bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main viewport pane matching active selection tab */}
      <main className="flex-1 shrink-0 animate-fade-in">
        {activeTab === 'find-pros' && (
          <FindProsTab 
            onOpenBooking={handleOpenBooking} 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === 'services' && (
          <ServicesTab 
            onOpenBooking={handleOpenBooking} 
          />
        )}
        {activeTab === 'business' && (
          <BusinessTab />
        )}
        {activeTab === 'about' && (
          <AboutTab />
        )}
        {activeTab === 'join' && (
          <JoinProTab />
        )}
        {activeTab === 'contact' && (
          <ContactTab />
        )}
      </main>

      {/* Floating Interactive WhatsApp Triage Desk (Fully Responsive) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="whatsapp-floating-portal">
        {whatsAppOpen && (
          <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white border border-zinc-200 shadow-2xl overflow-hidden animate-scale-in">
            {/* Header bar styled in Cleano dark forest green */}
            <div className="bg-[#0A201C] p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="h-9 w-9 rounded-full bg-emerald-500/10 border border-emerald-400 flex items-center justify-center text-emerald-400 font-bold">
                  WA
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none">WhatsApp Dispatch</h4>
                  <span className="text-[9px] text-[#C1E929] uppercase font-bold tracking-wider mt-0.5 block flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                    Port Harcourt Live Desk
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setWhatsAppOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-full transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Chat Body panel */}
            <div className="p-4 h-64 overflow-y-auto bg-zinc-50 space-y-3.5 text-xs text-zinc-950 flex flex-col">
              {chatHistory.map((chat, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[80%] rounded-2xl p-3 leading-relaxed text-xs shadow-sm ${
                    chat.sender === 'user' 
                      ? 'bg-[#0A201C] text-[#C1E929] self-end' 
                      : 'bg-white border border-zinc-150 text-zinc-800 self-start'
                  }`}
                >
                  {chat.text}
                </div>
              ))}
            </div>

            {/* Input submission footer */}
            <form onSubmit={handleSendWaMessage} className="p-3 border-t border-zinc-150 bg-white flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Type your WhatsApp inquiry..." 
                value={waMessage} 
                onChange={(e) => setWaMessage(e.target.value)}
                className="flex-1 rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2 text-xs text-zinc-950 focus:outline-none focus:ring-1 focus:ring-[#0A201C]"
              />
              <button 
                type="submit" 
                className="p-2.5 rounded-xl bg-[#0A201C] hover:bg-emerald-950 text-[#C1E929] transition-transform"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setWhatsAppOpen(!whatsAppOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:scale-105 active:scale-95 text-white shadow-xl hover:shadow-emerald-500/20 transition-transform duration-200"
          aria-label="Open Telegram / WhatsApp Support Desk"
          id="whatsapp-trigger-btn"
        >
          <MessageCircle className="h-7 w-7 fill-current text-white" />
        </button>
      </div>

      {/* Corporate trust Footer element */}
      <Footer setActiveTab={setActiveTab} />

      {/* Overlay Step Booking dispatch pipeline slider */}
      <BookingFlow 
        isOpen={bookingOpen} 
        onClose={handleCloseBooking} 
        initialServiceId={selectedServiceId}
        initialProId={selectedProId}
      />

    </div>
  );
}
