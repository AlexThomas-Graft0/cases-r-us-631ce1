'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';

interface PracticeAreaItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailed_content?: string;
  key_fact?: string;
  extra_info?: string;
  image_url?: string;
}

export function PracticeAreas() {
  const [dbPracticeAreas, setDbPracticeAreas] = useState<PracticeAreaItem[]>([]);
  const [selectedArea, setSelectedArea] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Static high-quality default fallback data matching the copy guidelines exactly
  const fallbackAreas: PracticeAreaItem[] = [
    {
      id: 'divorce',
      title: 'Divorce & Separation',
      slug: 'divorce-separation',
      description: 'Ending a marriage or civil partnership is emotionally exhausting. We guide you through the legal paperwork and process step-by-step, protecting your rights without adding unnecessary conflict.',
      detailed_content: 'A divorce is more than just a legal transaction; it is a major life transition. Our role is to handle the legal complexities so you can focus on rebuilding your life. Under UK law, the divorce process has been simplified to reduce conflict, but resolving the practical details remains critical. We assist you with drafting and filing the divorce application, responding to applications, and negotiating crucial timelines.',
      key_fact: 'The UK now operates under a "no-fault" divorce system, which means you do not need to prove blame or separation periods to end your marriage.',
      extra_info: 'A standard, uncontested divorce typically takes between 6 to 8 months to complete due to mandatory court cooling-off periods.',
      image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'child',
      title: 'Child Arrangements',
      slug: 'child-arrangements',
      description: "Your children’s welfare is our absolute priority. We help you create practical custody, residency, and contact agreements that keep their lives stable and secure.",
      detailed_content: 'When parents separate, deciding where children will live and how they will spend time with each parent is often the most sensitive issue. We believe that children thrive best when their parents can cooperate, and we work hard to help you reach practical, long-term agreements without court intervention. If an agreement cannot be reached privately, we will guide you through the family court system to secure a formal Child Arrangements Order.',
      key_fact: "Courts start with the legal presumption that involvement of both parents in a child's life is beneficial, unless there is a clear risk of harm.",
      extra_info: 'You must normally attend a Mediation Information and Assessment Meeting (MIAM) before you can apply to the court for a child arrangements order.',
      image_url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'financial',
      title: 'Financial Settlements',
      slug: 'financial-settlements',
      description: 'Splitting assets, property, and pensions can feel overwhelming. We work to secure a fair, transparent financial division so you can move forward with confidence.',
      detailed_content: "Dividing marital assets is not as simple as splitting everything in half. The law requires a fair division based on your specific circumstances, including your income, earning capacity, housing needs, and pensions. We help you achieve a legally binding financial order (Consent Order) that protects your assets and provides long-term security.",
      key_fact: 'A divorce decree does not automatically end your financial links to your ex-spouse. Only a court-approved Consent Order can permanently cut those financial ties.',
      extra_info: "Assets are not always split 50/50. The court's primary focus is always on meeting the housing and financial needs of any dependent children first.",
      image_url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  useEffect(() => {
    async function fetchPracticeAreas() {
      try {
        setIsLoading(true);
        // Table name: cases_r_us_631ce1.practice_areas
        const { data, error } = await supabase
          .from('practice_areas')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;

        if (data && data.length > 0) {
          // Map DB values to component structure
          const formatted: PracticeAreaItem[] = data.map((item: any, index: number) => {
            const fallback = fallbackAreas[index] || fallbackAreas[0];
            return {
              id: item.id,
              title: item.title,
              slug: item.slug,
              description: item.description || fallback.description,
              detailed_content: item.detailed_content || fallback.detailed_content,
              key_fact: fallback.key_fact, // Using rich fallback metadata to keep design premium
              extra_info: fallback.extra_info,
              image_url: item.icon_image || fallback.image_url,
            };
          });
          setDbPracticeAreas(formatted);
        } else {
          setDbPracticeAreas(fallbackAreas);
        }
      } catch (err) {
        console.warn('Using premium static content fallback for practice areas:', err);
        setDbPracticeAreas(fallbackAreas);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPracticeAreas();
  }, []);

  const currentAreas = dbPracticeAreas.length > 0 ? dbPracticeAreas : fallbackAreas;
  const activeArea = currentAreas[selectedArea] || currentAreas[0];

  return (
    <section id="practice-areas" className="py-24 bg-[#F1F5F9] text-[#111827] relative overflow-hidden font-sans">
      {/* Background soft lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-amber-600 uppercase font-mono mb-3"
          >
            HOW WE CAN HELP
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-sans mb-6"
          >
            Clear, expert focus on family law.
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-[#FECE14] mx-auto rounded-full"
          />
        </div>

        {/* 3-Column Practice Area Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {currentAreas.map((area, index) => {
            const isSelected = selectedArea === index;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedArea(index)}
                className={`group cursor-pointer rounded-2xl p-8 bg-white border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected 
                    ? 'border-[#FECE14] shadow-xl ring-2 ring-[#FECE14]/20 scale-[1.02]' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg hover:scale-[1.01]'
                }`}
              >
                {/* Visual Accent Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="absolute transform rotate-45 bg-[#FECE14] text-[#111827] text-[10px] font-bold py-1 right-[-28px] top-[12px] w-[90px] text-center uppercase tracking-wider">
                    Active
                  </div>
                </div>

                <div>
                  {/* Decorative Custom Icons based on guidelines */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-[#FECE14] group-hover:text-slate-900">
                      {index === 0 && (
                        /* Two separate overlapping circles forming a clear, supportive path */
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="8" cy="12" r="5" stroke="currentColor" />
                          <circle cx="16" cy="12" r="5" stroke="currentColor" />
                          <path d="M12 12h.01" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      )}
                      {index === 1 && (
                        /* A protective, stylized hand icon shielding a smaller figure */
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <circle cx="12" cy="10" r="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c0-1.5 1.5-2 3-2s3 .5 3 2" />
                        </svg>
                      )}
                      {index === 2 && (
                        /* A secure balance scale symbol representing fairness and asset protection */
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M6 8l6-2 6 2M6 8l-3 4h6L6 8zm12 0l-3 4h6l-3-4zM4 19h16" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 inline-flex items-center gap-1 transition-colors">
                    Learn more about {area.title.split(' ')[0]}
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Educational Interactive Panel */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Detailed Content Column (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Deep Dive Overview
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {activeArea.title === 'Divorce & Separation' && "Navigating divorce with clarity and dignity."}
                    {activeArea.title === 'Child Arrangements' && "Putting your children’s future first."}
                    {activeArea.title === 'Financial Settlements' && "Securing a fair financial future."}
                    {!['Divorce & Separation', 'Child Arrangements', 'Financial Settlements'].includes(activeArea.title) && `Expert advice for ${activeArea.title}`}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {activeArea.detailed_content}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-100">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Factor</h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {activeArea.key_fact}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">What To Expect</h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {activeArea.extra_info}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-[#FECE14] hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-md transition-colors text-center"
                >
                  Book a {activeArea.title.split(' ')[0]} Consultation
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors text-center"
                >
                  Send a Secure Enquiry
                </a>
              </div>
            </div>

            {/* Visual Sidebar & Quick Fact Panel (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white relative flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden min-h-[350px]">
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeArea.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={activeArea.image_url}
                    alt={activeArea.title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
              </div>

              {/* Dynamic Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 tracking-wider uppercase block mb-2">Practice Highlight</span>
                  <h4 className="text-2xl font-bold text-white mb-4">{activeArea.title}</h4>
                  <div className="w-12 h-1 bg-[#FECE14] rounded-full mb-6" />
                </div>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-2">Legal Context (Wales & England)</p>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      All consultations are completely confidential, handled by qualified local solicitors based in Nelson, Treharris.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>SRA Regulated • 100% Confidentiality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}