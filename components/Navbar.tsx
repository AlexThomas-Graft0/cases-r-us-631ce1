'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabaseClient'

interface PracticeAreaItem {
  title: string
  slug: string
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [practiceAreas, setPracticeAreas] = useState<PracticeAreaItem[]>([])

  // Fetch practice areas from database with fallback
  useEffect(() => {
    async function fetchPracticeAreas() {
      try {
        const { data, error } = await supabase
          .from('practice_areas')
          .select('title, slug')
          .limit(5)
        
        if (error) throw error
        if (data && data.length > 0) {
          setPracticeAreas(data)
        } else {
          // Fallback static copy if table is empty
          setPracticeAreas([
            { title: 'Divorce & Separation', slug: 'divorce' },
            { title: 'Child Arrangements', slug: 'child-arrangements' },
            { title: 'Financial Settlements', slug: 'financial-settlements' }
          ])
        }
      } catch (err) {
        // Safe fallback in case of connection issue
        setPracticeAreas([
          { title: 'Divorce & Separation', slug: 'divorce' },
          { title: 'Child Arrangements', slug: 'child-arrangements' },
          { title: 'Financial Settlements', slug: 'financial-settlements' }
        ])
      }
    }

    fetchPracticeAreas()
  }, [])

  // Handle scroll detection for premium styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Trust Banner */}
      <div className="bg-[#000000] text-[#FFFFFF] text-[11px] md:text-xs py-2 px-4 border-b border-[#FECE14]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-medium tracking-wide">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FECE14] inline-block animate-pulse"></span>
              SRA Regulated
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-[#FECE14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Confidentiality Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Serving South Wales</span>
            <span className="text-gray-600">|</span>
            <a href="tel:01443456789" className="text-[#FECE14] hover:underline font-semibold flex items-center gap-1 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.3 11.3 0 005.455 5.455l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              01443 456 789
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#000000]/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-[#000000]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#FECE14] rounded-md px-1 py-1">
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tight text-[#FFFFFF] flex items-center gap-1.5">
                  CASES <span className="text-[#FECE14]">R</span> US
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gray-400 font-bold uppercase -mt-1 group-hover:text-[#FECE14] transition-colors">
                  Family Solicitors
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a 
                href="#" 
                className="text-sm font-semibold text-gray-200 hover:text-[#FECE14] transition-colors py-2 focus:outline-none focus:text-[#FECE14]"
              >
                Home
              </a>

              {/* Practice Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 text-sm font-semibold text-gray-200 hover:text-[#FECE14] transition-colors py-2 focus:outline-none focus:text-[#FECE14]"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Practice Areas
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#FECE14]' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-1 w-72 rounded-lg bg-[#000000] border border-gray-800 shadow-xl overflow-hidden py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-800">
                        <span className="text-[10px] font-bold tracking-widest text-[#FECE14] uppercase">
                          How We Can Help
                        </span>
                      </div>
                      <div className="p-1 space-y-0.5">
                        {practiceAreas.map((area) => (
                          <a
                            key={area.slug}
                            href={`#${area.slug}`}
                            className="flex items-start gap-2.5 p-2.5 rounded-md hover:bg-neutral-900 text-gray-300 hover:text-[#FECE14] transition-all group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FECE14] mt-2 group-hover:scale-125 transition-transform" />
                            <div>
                              <div className="text-sm font-bold leading-tight">{area.title}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="#about" 
                className="text-sm font-semibold text-gray-200 hover:text-[#FECE14] transition-colors py-2 focus:outline-none focus:text-[#FECE14]"
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="text-sm font-semibold text-gray-200 hover:text-[#FECE14] transition-colors py-2 focus:outline-none focus:text-[#FECE14]"
              >
                Contact
              </a>
            </div>

            {/* CTA Buttons & Client Portal Action */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#portal" 
                className="flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-neutral-900 border border-gray-800 hover:border-gray-700 px-4 py-2.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#FECE14]"
              >
                <svg className="w-3.5 h-3.5 text-[#FECE14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Client Portal
              </a>
              <a 
                href="#book" 
                className="text-xs font-bold bg-[#FECE14] text-[#000000] hover:bg-[#FECE14]/90 px-5 py-2.5 rounded-md transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#FECE14]"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a 
                href="#portal" 
                className="p-2 text-gray-300 hover:text-[#FECE14] bg-neutral-900 rounded-md border border-gray-800"
                title="Client Portal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-200 hover:text-[#FECE14] transition-colors bg-neutral-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FECE14]"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-[#000000] border-b border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              
              {/* Main Links */}
              <div className="space-y-1">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-bold text-gray-200 hover:text-[#FECE14] hover:bg-neutral-900 transition-all"
                >
                  Home
                </a>
                
                {/* Mobile Practice Areas Dropdown Group */}
                <div className="space-y-1 px-3 py-2">
                  <span className="block text-[10px] font-bold tracking-widest text-[#FECE14] uppercase mb-2">
                    Our Practice Areas
                  </span>
                  <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-gray-800">
                    {practiceAreas.map((area) => (
                      <a
                        key={area.slug}
                        href={`#${area.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm font-semibold text-gray-300 hover:text-[#FECE14] transition-colors"
                      >
                        {area.title}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-bold text-gray-200 hover:text-[#FECE14] hover:bg-neutral-900 transition-all"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-bold text-gray-200 hover:text-[#FECE14] hover:bg-neutral-900 transition-all"
                >
                  Contact
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-800 space-y-3 px-3">
                <a
                  href="#portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-neutral-900 border border-gray-800 rounded-md hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#FECE14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure Client Portal
                </a>
                <a
                  href="#book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-sm font-bold text-[#000000] bg-[#FECE14] rounded-md hover:bg-[#FECE14]/90 transition-all"
                >
                  Book Consultation
                </a>
              </div>

              {/* Quick Contact Highlight */}
              <div className="pt-4 text-center text-xs text-gray-500">
                <p>Nelson, Treharris Office: 12 Dynevor Terrace</p>
                <p className="mt-1 font-semibold text-[#FECE14]">01443 456 789</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}