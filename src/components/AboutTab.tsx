import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, UserCheck, Shield, Award, Users } from 'lucide-react';
import { FAQS } from '../data';

export const AboutTab: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const values = [
    {
      icon: UserCheck,
      title: 'Vetted Quality First',
      desc: 'We are committed to selecting only the top 3% of professional applicants. Quality is monitored through live feedback loops.'
    },
    {
      icon: Shield,
      title: 'Total Insurance Shield',
      desc: 'To keep both our labor force and clients perfectly safe, we verify licensure, provide general bonds, and cover liability up to $1M.'
    },
    {
      icon: Award,
      title: 'Fair Wages Guarantee',
      desc: 'We support our workforce by offering competitive above-average regional rates, automated direct weekly deposits, and shift security.'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen" id="about-tab-view">
      
      {/* Brand values banner */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
          On-Demand Labor With Safety Certifications
        </h1>
        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
          Help On Hire was founded in San Francisco with a simple mission: design a secure marketplace where companies and homeowners can access pre-screened staffing help without the traditional contract negotiations.
        </p>
      </section>

      {/* Core values block */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {values.map((v, idx) => (
          <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 shadow-sm">
              <v.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{v.title}</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Meet Founders Team Section */}
      <section className="my-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold uppercase tracking-widest text-[11px] mb-2">
            <Users className="h-4 w-4" />
            <span>EXECUTIVE ADVISORY TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Our Founders &amp; Operators
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl mx-auto leading-relaxed">
            The operators coordinating dispatch infrastructure, background audits, and product architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Julianne Peterson',
              role: 'Co-Founder & Chief Executive Officer',
              bio: 'Former marketplace design partner at major tech incubators. Focused on safe workspace dispatch and fair professional payroll payouts.',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250'
            },
            {
              name: 'Dr. Raymond Chen',
              role: 'Co-Founder & Chief Product Officer',
              bio: 'Staff systems engineer. Designed the background pipeline algorithms and coordinates the on-duty real-time radar mapping boards.',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250'
            },
            {
              name: 'Clarissa Montgomery',
              role: 'VP is Customer Care & Safety',
              bio: 'Former compliance legal lead. Oversees the rigorous multi-state criminal audit check, insurance covers, and partner licensing rules.',
              img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm text-center">
              <img 
                src={member.img} 
                alt={member.name} 
                className="h-28 w-28 rounded-full object-cover mx-auto mb-4 border-2 border-indigo-100 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-base font-bold text-zinc-900 tracking-tight">{member.name}</h3>
              <p className="text-xs font-semibold text-indigo-600 mt-0.5">{member.role}</p>
              <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed bg-zinc-50 p-3.5 rounded-2xl border border-zinc-100 italic">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ accordion block */}
      <section className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto text-left" id="faq-accordion-block">
        <div className="flex items-center space-x-2.5 mb-8">
          <HelpCircle className="h-6 w-6 text-indigo-600 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-zinc-400 mt-0.5">Understand standard billing, safety vetting, and cancellation regulations.</p>
          </div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 ${
                  isOpen ? 'border-indigo-400 bg-indigo-50/10' : 'border-zinc-200 bg-zinc-50/50'
                }`}
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-5 py-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 pr-4 text-left leading-relaxed">
                    {faq.question}
                  </span>
                  <span className="text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="h-4.5 w-4.5" /> : <ChevronDown className="h-4.5 w-4.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-650 leading-relaxed border-t border-zinc-200/50 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
