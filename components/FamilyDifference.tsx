'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Scale, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot_image: string;
}

export function FamilyDifference() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .schema('cases_r_us_631ce1')
          .from('team_members')
          .select('*')
          .limit(3);

        if (error) throw error;
        if (data && data.length > 0) {
          setTeam(data as TeamMember[]);
        }
      } catch (err) {
        console.error('Error fetching team members:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  // Default team fallback if database is empty/not seeded yet
  const defaultTeam: TeamMember[] = [
    {
      id: 'gareth',
      name: 'Gareth Evans',
      role: 'Principal Solicitor & Founder',
      bio: 'Gareth has over 20 years of experience practicing family law in South Wales. Known for his calm, analytical approach and commanding courtroom presence.',
      headshot_image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'carys',
      name: 'Carys Evans',
      role: 'Senior Family Solicitor',
      bio: 'Carys specializes in child arrangements, domestic abuse protective orders, and cohabitation disputes. Passionate about protecting children\'s welfare.',
      headshot_image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'megan',
      name: 'Megan Evans',
      role: 'Practice Manager & Client Liaison',
      bio: 'Megan is the operational heart of Cases R Us. She manages client onboarding, coordinates court schedules, and oversees our secure digital client portal.',
      headshot_image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const activeTeam = team.length > 0 ? team : defaultTeam;

  const differentiators = [
    {
      title: 'Direct Solicitor Access',
      description: 'You will speak directly to the qualified solicitor handling your case, not an administrative middleman.',
      icon: Users
    },
    {
      title: 'Plain English Guidance',
      description: 'We explain every step of the legal process clearly, leaving out confusing legal jargon.',
      icon: MessageSquare
    },
    {
      title: 'Honest, Transparent Pricing',
      description: 'We provide clear cost estimates upfront so you never have to worry about unexpected bills.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="approach" className="relative bg-[#0F172A] text-[#F8FAFC] py-20 lg:py-32 overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FECE14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Showcase (High-quality Image & Stats) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10 opacity-80" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Gareth, Carys, and Megan Evans outside their Nelson office" 
                className="w-full h-[450px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-[#FECE14] text-xs font-semibold tracking-widest uppercase mb-1">OUR NELSON OFFICE</p>
                <h4 className="text-xl font-bold text-white">The Evans Family Legal Team</h4>
                <p className="text-slate-300 text-sm mt-1">Grounded in Treharris, trusted in South Wales courts.</p>
              </div>
            </motion.div>

            {/* Micro-trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="text-center lg:text-left">
                <p className="text-[#FECE14] text-2xl lg:text-3xl font-bold font-mono">20+</p>
                <p className="text-slate-400 text-xs mt-1">Years Combined Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[#FECE14] text-2xl lg:text-3xl font-bold font-mono">100%</p>
                <p className="text-slate-400 text-xs mt-1">Confidentiality Assured</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[#FECE14] text-2xl lg:text-3xl font-bold font-mono">Direct</p>
                <p className="text-slate-400 text-xs mt-1">Solicitor Communication</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Differentiators */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-[#FECE14] text-xs font-extrabold tracking-widest uppercase border-b-2 border-[#FECE14] pb-1">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight pt-2">
                Large regional expertise.<br />
                <span className="text-[#FECE14]">Personal, family-run care.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                When you call a large corporate law firm, you are often passed from call center staff to junior assistants. At Cases R Us, we do things differently.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We are a dedicated, family-run legal practice rooted right here in Nelson, Treharris. We understand that family disputes are deeply personal and stressful. That is why we combine rigorous courtroom authority with a warm, supportive approach. When you work with us, you get direct access to experienced family solicitors who know your name, understand your story, and will stand firmly by your side in court.
              </p>
            </motion.div>

            {/* Key Differentiators List */}
            <div className="space-y-4 pt-4">
              {differentiators.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#FECE14]/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-[#FECE14]/10 text-[#FECE14]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dynamic Team Members Section (from database or default fallback) */}
            <div className="pt-8 border-t border-slate-800">
              <h4 className="text-xs font-extrabold tracking-widest text-[#FECE14] uppercase mb-6">
                MEET YOUR ADVOCATES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeTeam.map((member) => (
                  <div key={member.id} className="group flex flex-col items-center text-center sm:text-left sm:items-start space-y-3">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-[#FECE14] transition-colors duration-300">
                      <img 
                        src={member.headshot_image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-[#FECE14] transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 font-medium mb-1">{member.role}</p>
                      <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed hidden sm:block">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <a 
                href="#book" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-[#0F172A] bg-[#FECE14] hover:bg-[#FECE14]/90 transition-all duration-200 shadow-lg shadow-[#FECE14]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FECE14] focus:ring-offset-[#0F172A]"
              >
                Book Your Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-sm font-semibold rounded-lg text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 focus:ring-offset-[#0F172A]"
              >
                Send a Secure Enquiry
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}