'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Users, Scale, FileText, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface Step {
  id: number;
  number: string;
  headline: string;
  subheading: string;
  body: string;
  icon: React.ComponentType<any>;
  tip: string;
  timelineEstimate: string;
}

export function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      number: "1",
      headline: "1. Assessment & Planning",
      subheading: "Initial Consultation & Conflict Check",
      body: "We begin with a confidential consultation to review your situation, perform a mandatory conflict check, and outline your legal options. You will leave this meeting with a clear, written plan of action and a transparent cost estimate.",
      icon: ShieldCheck,
      tip: "Confidentiality guaranteed under strict SRA regulations. We perform immediate conflict checks to protect your integrity.",
      timelineEstimate: "Day 1 - Initial Session"
    },
    {
      id: 2,
      number: "2",
      headline: "2. Reaching Out & Negotiating",
      subheading: "Negotiation & Mediation",
      body: "We contact the other party or their solicitor to present your proposals. We aim to negotiate a fair, practical agreement through correspondence or formal mediation, saving you the stress and cost of court.",
      icon: Users,
      tip: "Over 80% of our cases are resolved through structured negotiation without ever setting foot in a courtroom.",
      timelineEstimate: "Weeks 2 - 6"
    },
    {
      id: 3,
      number: "3",
      headline: "3. Firm Courtroom Advocacy",
      subheading: "Court Representation (If Required)",
      body: "If the other party refuses to negotiate fairly, we will prepare your case thoroughly and represent you in court. Our experienced solicitors will present your case clearly, professionally, and assertively before the judge.",
      icon: Scale,
      tip: "Direct courtroom representation by highly experienced local family law solicitors who know the South Wales courts inside out.",
      timelineEstimate: "As required by court schedules"
    },
    {
      id: 4,
      number: "4",
      headline: "4. Finalizing Your Order",
      subheading: "Secure Resolution",
      body: "Once an agreement is reached or a court order is issued, we finalize all legal paperwork. We ensure all documents are legally binding, securely filed, and accessible to you through our digital portal.",
      icon: FileText,
      tip: "All finalized decrees, consent orders, and case files are permanently archived in your secure, encrypted client space.",
      timelineEstimate: "Final Stage"
    }
  ];

  return (
    <section 
      id="roadmap" 
      className="bg-[#0F172A] text-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans"
    >
      {/* Decorative premium background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FECE14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FECE14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#FECE14] tracking-widest text-xs font-bold uppercase block mb-3 font-mono"
          >
            THE ROADMAP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display"
          >
            Your step-by-step path to resolution.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto font-light"
          >
            Navigating family legal disputes can feel overwhelming. We break down the process into clear, manageable steps so you always know what to expect next.
          </motion.p>
        </div>

        {/* Interactive Desktop Layout (2-Column Split) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Steps List */}
          <div className="col-span-5 space-y-4 sticky top-24">
            <div className="border-l-2 border-[#1E293B] pl-6 ml-4 space-y-6 relative">
              
              {/* Dynamic progress highlight bar */}
              <div 
                className="absolute left-[-2px] top-0 w-[2px] bg-[#FECE14] transition-all duration-500 ease-in-out"
                style={{
                  height: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                  maxHeight: '100%'
                }}
              />

              {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = activeStep === step.id;
                const isCompleted = activeStep > step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="w-full text-left focus:outline-none group relative"
                    aria-label={`View details for ${step.headline}`}
                  >
                    {/* Bullet Indicator */}
                    <div className="absolute -left-[35px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#FECE14] border-[#FECE14] text-[#0F172A] scale-110 shadow-[0_0_12px_rgba(254,206,20,0.4)]' 
                          : isCompleted 
                          ? 'bg-[#FECE14]/20 border-[#FECE14] text-[#FECE14]' 
                          : 'bg-[#0F172A] border-[#334155] text-[#475569]'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <span className="text-xs font-bold font-mono">{step.number}</span>
                        )}
                      </div>
                    </div>

                    {/* Step Brief Card */}
                    <div className={`p-5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1E293B]/80 border border-[#FECE14]/30 shadow-xl translate-x-1' 
                        : 'bg-transparent border border-transparent hover:bg-[#1E293B]/30'
                    }`}>
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#FECE14]' : 'text-[#64748B] group-hover:text-white'}`} />
                        <span className={`text-xs font-semibold tracking-wider uppercase font-mono ${isActive ? 'text-[#FECE14]' : 'text-[#64748B]'}`}>
                          {step.timelineEstimate}
                        </span>
                      </div>
                      <h3 className={`mt-2 text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'}`}>
                        {step.headline.split('. ')[1]}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Dive Active Step Detail Panel */}
          <div className="col-span-7 bg-[#1E293B] border border-[#334155] rounded-3xl p-8 lg:p-12 shadow-2xl relative min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Step Index Circle & Title */}
                <div className="flex items-center justify-between border-b border-[#334155] pb-6">
                  <div>
                    <span className="text-[#FECE14] text-sm font-semibold uppercase tracking-wider font-mono block mb-1">
                      {steps[activeStep - 1].subheading}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
                      {steps[activeStep - 1].headline}
                    </h3>
                  </div>
                  <div className="w-14 h-14 bg-[#FECE14]/10 rounded-2xl flex items-center justify-center text-[#FECE14]">
                    {React.createElement(steps[activeStep - 1].icon, { className: "w-8 h-8" })}
                  </div>
                </div>

                {/* Body Paragraph */}
                <p className="text-[#CBD5E1] text-base leading-relaxed font-light">
                  {steps[activeStep - 1].body}
                </p>

                {/* Practical Advice Alert Tip */}
                <div className="bg-[#0F172A]/80 border-l-4 border-[#FECE14] p-5 rounded-r-xl space-y-1">
                  <div className="flex items-center gap-2 text-[#FECE14]">
                    <HelpCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">Solicitor's Advice</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed italic">
                    "{steps[activeStep - 1].tip}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions inside Panel */}
            <div className="mt-8 pt-6 border-t border-[#334155] flex items-center justify-between">
              <div className="text-xs text-[#64748B]">
                Step <span className="text-[#FECE14] font-bold">{activeStep}</span> of 4
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#475569] hover:bg-[#334155] transition disabled:opacity-40"
                >
                  Back
                </button>
                {activeStep < 4 ? (
                  <button
                    onClick={() => setActiveStep(prev => Math.min(4, prev + 1))}
                    className="px-4 py-2 bg-[#FECE14] text-[#0F172A] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition flex items-center gap-1"
                  >
                    Next Step <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#book"
                    className="px-4 py-2 bg-[#FECE14] text-[#0F172A] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition flex items-center gap-1 shadow-lg shadow-[#FECE14]/10"
                  >
                    Book Consultation <CheckCircle2 className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Accordion Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isOpen = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#1E293B] border-[#FECE14]/50 shadow-xl' 
                    : 'bg-[#111C2E] border-[#1E293B] hover:border-[#334155]'
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => setActiveStep(isOpen ? 0 : step.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-[#FECE14] text-[#0F172A]' : 'bg-[#1E293B] text-[#FECE14]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#FECE14] tracking-wider uppercase block font-mono">
                        {step.timelineEstimate}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {step.headline}
                      </h3>
                    </div>
                  </div>
                  <span className={`text-[#FECE14] font-mono text-xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    &rarr;
                  </span>
                </button>

                {/* Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-[#334155] space-y-4 mt-2">
                        <span className="text-xs font-semibold text-[#FECE14] uppercase tracking-wider block pt-3 font-mono">
                          {step.subheading}
                        </span>
                        <p className="text-sm text-[#CBD5E1] leading-relaxed font-light">
                          {step.body}
                        </p>
                        
                        {/* Interactive tip */}
                        <div className="bg-[#0F172A] border-l-4 border-[#FECE14] p-4 rounded-r-lg">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FECE14] block mb-1 font-mono">
                            Solicitor's Advice
                          </span>
                          <p className="text-xs text-[#94A3B8] italic leading-relaxed">
                            "{step.tip}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-24 bg-gradient-to-r from-[#1E293B] via-[#111C2E] to-[#1E293B] border border-[#334155] rounded-3xl p-8 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FECE14]/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Ready to secure a clear, calm path forward?
          </h3>
          <p className="text-[#94A3B8] text-sm max-w-xl mx-auto mb-6 font-light">
            We provide upfront conflict checks, transparent costs, and absolute confidentiality from your very first click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#book"
              className="w-full sm:w-auto px-8 py-4 bg-[#FECE14] text-[#0F172A] font-bold rounded-xl text-sm transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(254,206,20,0.3)] focus:outline-none focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:ring-offset-[#0F172A]"
            >
              Book Your Consultation
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border border-[#475569] hover:border-[#FECE14] text-white font-bold rounded-xl text-sm transition-all duration-200 hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#FECE14]"
            >
              Send a Secure Enquiry
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}