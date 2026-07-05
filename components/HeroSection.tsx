'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F8FAFC] overflow-hidden py-16 md:py-24 font-['Poppins']">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background radial soft gold glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FECE14] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-400 rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-impact copy & actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Trust Badge Top */}
              <div className="inline-flex items-center gap-2 bg-[#FECE14]/10 border border-[#FECE14]/30 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#111827]">
                <span className="w-2 h-2 rounded-full bg-[#FECE14] animate-pulse"></span>
                Nelson & Treharris Family Law Practice
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-none">
                Professional legal support <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111827] via-[#2D3748] to-[#000000]">
                  when your family needs it most.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                Grounded in Treharris, trusted in court. We help you find a clear, calm path through divorce, child arrangements, and financial settlements with personal care and legal authority.
              </p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a
                href="#book"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#FECE14] hover:bg-[#E2B70F] text-[#111827] font-bold text-sm tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 shadow-lg shadow-[#FECE14]/20 text-center"
              >
                Book Your Consultation
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-transparent hover:bg-slate-100 text-[#111827] font-bold text-sm tracking-wide border-2 border-[#111827] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#111827] focus:ring-offset-2 text-center"
              >
                Send a Secure Enquiry
              </a>
            </motion.div>

            {/* Trust Indicators Divider */}
            <hr className="border-slate-200 w-full" />

            {/* Trust Indicators / Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Badge 1 */}
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <div className="p-2 bg-slate-100 rounded-lg text-[#111827]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827] uppercase tracking-wider">SRA Regulated</p>
                  <p className="text-[11px] text-slate-500">Strict Professional Code</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <div className="p-2 bg-slate-100 rounded-lg text-[#111827]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827] uppercase tracking-wider">100% Confidential</p>
                  <p className="text-[11px] text-slate-500">Guaranteed Discretion</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <div className="p-2 bg-slate-100 rounded-lg text-[#111827]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827] uppercase tracking-wider">South Wales</p>
                  <p className="text-[11px] text-slate-500">Serving Local Communities</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Warm, professional photograph */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-square"
            >
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                alt="Approachable family solicitor in a calm Nelson meeting room"
                className="w-full h-full object-cover object-top"
              />

              {/* Gradient Overlay for texture */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-transparent to-transparent" />

              {/* Bottom tag over the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Nelson Office Consultation</p>
                  <p className="text-sm font-bold text-[#111827]">Direct, compassionate advice</p>
                </div>
                <div className="flex space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FECE14]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111827]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
              </div>
            </motion.div>

            {/* Decorative Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-6 bg-[#111827] text-white p-4 rounded-xl shadow-xl hidden sm:block max-w-[200px]"
            >
              <div className="flex items-center space-x-2 text-[#FECE14] mb-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-xs font-bold tracking-wider uppercase">Highly Rated</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                "Their courtroom preparation was flawless. I felt protected."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}