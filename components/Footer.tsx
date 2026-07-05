'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setEmailInput('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-black text-neutral-300 font-sans border-t-4 border-[#FECE14] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(254,206,20,0.05),transparent_40%)] pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block text-xs font-semibold tracking-widest text-[#FECE14] uppercase mb-1">
                Confidential & Professional
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Need professional legal support when your family needs it most?
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                Book a confidential 45-minute consultation for £150 with an experienced family solicitor in Nelson, Treharris.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#FECE14] text-black font-semibold bg-[#FECE14] hover:bg-white hover:border-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#FECE14]"
              >
                Book Your Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 hover:border-[#FECE14] text-white hover:text-[#FECE14] font-semibold bg-transparent rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#FECE14]"
              >
                Send a Secure Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Badges */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 text-[#FECE14]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Cases <span className="text-[#FECE14]">R</span> Us
                </span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                Grounded in Treharris, trusted in court. We are a dedicated, family-run legal practice combining rigorous courtroom authority with warm, supportive client care.
              </p>
            </div>

            {/* Badges Stack */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-md">
                <svg className="w-4 h-4 text-[#FECE14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SRA Regulated Practice</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-md">
                <svg className="w-4 h-4 text-[#FECE14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>100% Confidentiality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-md">
                <svg className="w-4 h-4 text-[#FECE14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Serving Nelson, Treharris & South Wales</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-[#FECE14] uppercase">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#divorce" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#FECE14]">•</span> Divorce & Separation
                </a>
              </li>
              <li>
                <a href="#child-arrangements" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#FECE14]">•</span> Child Arrangements
                </a>
              </li>
              <li>
                <a href="#financial-settlements" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#FECE14]">•</span> Financial Settlements
                </a>
              </li>
              <li>
                <a href="#mediation" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#FECE14]">•</span> Negotiation & Mediation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-[#FECE14] uppercase">
              Firm Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Process Roadmap
                </a>
              </li>
              <li>
                <a href="#portal" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Secure Client Portal
                </a>
              </li>
              <li>
                <a href="#admin" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Internal Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-[#FECE14] uppercase">
              Office Location
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FECE14] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Cases R Us<br />
                  12 Dynevor Terrace, Nelson,<br />
                  Treharris, CF46 6PD
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FECE14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:01443456789" className="hover:text-white transition-colors duration-200">
                  01443 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FECE14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@casesrus.co.uk" className="hover:text-white transition-colors duration-200">
                  contact@casesrus.co.uk
                </a>
              </div>
              <div className="pt-2 border-t border-neutral-800 text-xs">
                <span className="block font-semibold text-neutral-300">Opening Hours:</span>
                <span className="block mt-0.5">Mon to Fri, 9:00 AM – 5:00 PM</span>
                <span className="block text-neutral-500 mt-0.5">Closed weekends and public holidays</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Compliance / Disclaimers / Bottom Meta */}
      <div className="bg-neutral-950 border-t border-neutral-900 py-10 relative z-10 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* SRA & Regulatory Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 border-b border-neutral-900 leading-relaxed">
            <div>
              <h5 className="font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                SRA Regulation & Compliance
              </h5>
              <p>
                Cases R Us is regulated by the Solicitors Regulation Authority (SRA). SRA registration ensures that we adhere to strict professional rules and standards of conduct designed to protect our clients.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Qualified Solicitor Credentials
              </h5>
              <p>
                Our principal solicitors maintain registered status: Gareth Evans (SRA Number: 412983), Carys Evans (SRA Number: 589201). Member of the Law Society Family Law Panel.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Mandatory Conflict Check
              </h5>
              <p>
                To comply with strict legal standards, we perform conflict of interest checks for all incoming enquiries. Accessing our site or submitting an enquiry does not establish a formal solicitor-client relationship.
              </p>
            </div>
          </div>

          {/* Copyright & Quick Terms */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p>© 2024 Cases R Us Solicitors. All rights reserved.</p>
              <p className="mt-1">
                Registered Office: 12 Dynevor Terrace, Nelson, Treharris, CF46 6PD.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-400">
              <a href="#privacy" className="hover:text-[#FECE14] transition-colors duration-150">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-[#FECE14] transition-colors duration-150">
                Terms of Business
              </a>
              <a href="#complaints" className="hover:text-[#FECE14] transition-colors duration-150">
                Complaints Procedure
              </a>
              <a href="#cookies" className="hover:text-[#FECE14] transition-colors duration-150">
                Cookie Settings
              </a>
            </div>
          </div>

          {/* Small Print Court Privacy Warning */}
          <div className="text-center border-t border-neutral-900/50 pt-4 text-[11px] text-neutral-600 max-w-4xl mx-auto">
            To protect our clients and comply with strict family court privacy laws, all client stories and case scenarios featured on this site have been fictionalized or anonymized to respect absolute family court privacy. We treat your personal details with the same absolute confidentiality.
          </div>

        </div>
      </div>
    </footer>
  );
}