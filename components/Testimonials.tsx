'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Shield, MapPin, Lock, ChevronRight, MessageSquare, Star, CheckCircle } from 'lucide-react'

// Authentic South Wales landscape & Nelson office vibe images
const SOUTH_WALES_SCENE = "https://images.unsplash.com/photo-1505832018823-50331d70d237?auto=format&fit=crop&q=80&w=1200"
const MEETING_ROOM_SCENE = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"

interface TestimonialData {
  id: string
  name: string
  location: string
  tag: string
  quote: string
  context: string
}

const testimonialsData: TestimonialData[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    location: 'Merthyr Tydfil',
    tag: 'Child Arrangements',
    quote: "Going through a custody dispute was the most terrifying time of my life. The team at Cases R Us did not just handle my legal paperwork; they kept me calm, informed, and reassured throughout. In court, their preparation was flawless. I felt incredibly protected, and we achieved an arrangement that was best for my daughter.",
    context: 'Name changed for client privacy. Cases R Us represented Sarah in securing a stable child contact schedule.'
  },
  {
    id: 'david',
    name: 'David',
    location: 'Pontypridd',
    tag: 'Financial Settlements',
    quote: "I was completely overwhelmed by the financial side of my divorce. Cases R Us sat down with me and explained everything in plain English. They helped me secure a fair settlement that protected my pension and family home. I cannot thank them enough for their honesty and support.",
    context: 'Name changed for client privacy. Consent order secured permanently protecting future assets.'
  }
]

export function Testimonials() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredTestimonials = activeTab === 'all' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.tag.toLowerCase().includes(activeTab))

  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-24 font-sans"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#EAB308] uppercase bg-[#EAB308]/10 px-3 py-1 rounded-full inline-block mb-3"
          >
            CLIENT STORIES
          </motion.p>
          
          <motion.h2 
            id="testimonials-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]"
          >
            Trusted by families across South Wales.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Real results from our Nelson-based family practice. We stand firmly by your side during life's most challenging transitions.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Stories' },
            { id: 'child', label: 'Child Arrangements' },
            { id: 'financial', label: 'Financial Settlements' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EAB308] focus:ring-offset-2 ${
                activeTab === tab.id
                  ? 'bg-[#0F172A] text-[#FECE14] shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Testimonial Cards */}
          <div className="lg:col-span-8 flex flex-col gap-6 justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredCard(testimonial.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative group"
                  >
                    {/* Quotation Icon and Top Accents */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl text-[#EAB308]">
                        <Quote className="w-5 h-5 fill-[#EAB308]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider bg-[#F1F5F9] text-slate-700 px-2.5 py-1 rounded">
                        {testimonial.tag}
                      </span>
                    </div>

                    {/* Star Rating Graphic */}
                    <div className="flex gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Reviewer Details */}
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <cite className="not-italic font-bold text-slate-900 block text-base">
                            — {testimonial.name}
                          </cite>
                          <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#EAB308]" />
                            {testimonial.location}, South Wales
                          </span>
                        </div>
                        <div className="text-slate-400 text-xs text-right italic">
                          (Name changed)
                        </div>
                      </div>
                      
                      {/* Sub-context description */}
                      <p className="mt-3 text-[11px] text-slate-400 leading-tight">
                        {testimonial.context}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Panel: South Wales Heritage & Quick Contact */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#0F172A] text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800 relative">
            {/* Visual Header Image */}
            <div className="h-48 relative">
              <img 
                src={SOUTH_WALES_SCENE} 
                alt="South Wales landscape representing our local expertise" 
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FECE14] block">
                  South Wales Local Authority
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Rooted in Treharris, Serving the Valleys
                </h3>
              </div>
            </div>

            {/* Core commitment points */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#FECE14]/10 rounded-lg text-[#FECE14] shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Solicitor Access</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      You will speak directly to Carys, Gareth, or Megan—not an automated call center.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#FECE14]/10 rounded-lg text-[#FECE14] shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Absolute Confidentiality</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Strict data protection protocols ensure your case files and sensitive data are encrypted.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Trigger */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 mb-3">
                  Need professional legal advice regarding your family?
                </p>
                <a 
                  href="#book"
                  className="inline-flex items-center justify-between w-full bg-[#FECE14] hover:bg-[#EAB308] text-[#0F172A] font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:ring-offset-[#0F172A]"
                >
                  <span>Book Your Consultation</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Real-time Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-slate-200/60 text-center mb-12">
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-2xl sm:text-3xl font-bold text-[#0F172A]">20+</span>
            <span className="text-xs text-slate-500 mt-1 font-medium">Years Local Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 border-l border-slate-200/60">
            <span className="text-2xl sm:text-3xl font-bold text-[#0F172A]">100%</span>
            <span className="text-xs text-slate-500 mt-1 font-medium">Confidentiality Guarantee</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 border-l border-slate-200/60">
            <span className="text-2xl sm:text-3xl font-bold text-[#0F172A]">SRA</span>
            <span className="text-xs text-slate-500 mt-1 font-medium">Regulated Authority</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 border-l border-slate-200/60">
            <span className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Direct</span>
            <span className="text-xs text-slate-500 mt-1 font-medium">Solicitor Contact Only</span>
          </div>
        </div>

        {/* Legal and Privacy Notice Disclaimer */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200/80 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#EAB308] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Privacy & Court Compliance Notice
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                To protect our clients and comply with strict family court privacy laws, all names and identifying details in these testimonials have been changed. We treat your personal details with the same absolute confidentiality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}