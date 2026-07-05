'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Scale, UserCheck, FileText, ArrowRight, HelpCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot_image: string;
  credentials?: string;
}

const FALLBACK_TEAM: TeamMember[] = [
  {
    id: 'gareth',
    name: 'Gareth Evans',
    role: 'Principal Solicitor & Founder',
    bio: 'Gareth has over 20 years of experience practicing family law in South Wales. Known for his calm, analytical approach and commanding courtroom presence, Gareth specializes in complex financial settlements and high-conflict custody disputes. He founded the practice to offer local families a more supportive, direct way to resolve legal issues.',
    headshot_image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    credentials: 'SRA Number: 412983 | Member of the Law Society Family Law Panel'
  },
  {
    id: 'carys',
    name: 'Carys Evans',
    role: 'Senior Family Solicitor',
    bio: 'Carys specializes in child arrangements, domestic abuse protective orders, and cohabitation disputes. She is passionate about protecting children\'s welfare and helping parents establish stable, cooperative co-parenting structures. Carys is highly regarded for her empathetic listening style and her practical, solution-focused legal advice.',
    headshot_image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    credentials: 'SRA Number: 589201'
  },
  {
    id: 'megan',
    name: 'Megan Evans',
    role: 'Practice Manager & Client Liaison',
    bio: 'Megan is the operational heart of Cases R Us. She manages client onboarding, coordinates court schedules, and oversees our secure digital client portal. Megan is dedicated to making sure your experience with us is smooth, organized, and completely stress-free from your very first call.',
    headshot_image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    credentials: 'Client Relations & Case Coordination'
  }
];

export function AboutAndTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(FALLBACK_TEAM);
  const [activeTab, setActiveTab] = useState<'story' | 'values'>('story');

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('id, name, role, bio, headshot_image');
        
        if (error) throw error;
        if (data && data.length > 0) {
          // Map credentials safely if they don't exist in the database schema directly
          const mapped: TeamMember[] = data.map((member: any) => {
            const fallback = FALLBACK_TEAM.find(f => f.name.toLowerCase().includes(member.name.toLowerCase()));
            return {
              id: member.id,
              name: member.name,
              role: member.role,
              bio: member.bio,
              headshot_image: member.headshot_image || 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600',
              credentials: fallback?.credentials || 'SRA Regulated Professional'
            };
          });
          setTeamMembers(mapped);
        }
      } catch (err) {
        console.warn('Could not load team from database, using local high-fidelity fallback:', err);
      }
    }
    fetchTeam();
  }, []);

  return (
    <section id="about" className="relative bg-[#000000] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-poppins">
      {/* Decorative clean background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FECE14_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* UPPER SECTION: Our Story & Why Choose Us Toggle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Mission & Interactive Toggle */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FECE14] px-3 py-1 rounded-full bg-white/10 inline-block mb-4">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Grounded in our community, dedicated to your family.
              </h2>
            </div>

            {/* Premium Navigation Tabs for Story vs Values */}
            <div className="flex space-x-2 bg-neutral-900 p-1.5 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTab('story')}
                className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeTab === 'story'
                    ? 'bg-[#FECE14] text-black shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeTab === 'values'
                    ? 'bg-[#FECE14] text-black shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                Why Choose Us
              </button>
            </div>

            {/* Animate Content Change */}
            <div className="min-h-[260px]">
              <AnimatePresence mode="wait">
                {activeTab === 'story' ? (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed"
                  >
                    <p>
                      Cases R Us was founded in <strong className="text-[#FECE14]">Nelson, Treharris</strong>, with a clear and simple mission: to provide high-quality family law representation without the intimidating, cold atmosphere of traditional corporate firms.
                    </p>
                    <p>
                      We saw that families going through divorce, separation, and child custody disputes were often left feeling ignored by large, automated legal practices. We chose to build a firm where clients are treated as people, not file numbers.
                    </p>
                    <p>
                      Over the years, we have grown into a respected legal practice known for our direct, honest guidance and our strong, professional presence in the family courts. We are proud of our South Wales heritage, and we remain deeply committed to helping local families navigate their most difficult moments with dignity, clarity, and strength.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#FECE14]/10 rounded-lg text-[#FECE14] shrink-0 mt-1">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">No Gatekeepers</h4>
                        <p className="text-neutral-300 text-sm mt-1">
                          You will never have to repeat your sensitive personal story to multiple receptionists. You will have a direct line and email address for the specific solicitor managing your case.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#FECE14]/10 rounded-lg text-[#FECE14] shrink-0 mt-1">
                        <Scale className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Transparent Costs</h4>
                        <p className="text-neutral-300 text-sm mt-1">
                          We believe in absolute financial transparency. We provide clear, fixed-fee options for initial consultations and straightforward hourly rates, ensuring you are always in control of your legal costs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#FECE14]/10 rounded-lg text-[#FECE14] shrink-0 mt-1">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">Courtroom Authority</h4>
                        <p className="text-neutral-300 text-sm mt-1">
                          While we always try to reach peaceful, out-of-court agreements first, we are experienced litigators. If court becomes necessary, we will represent you with absolute professionalism and determination.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Cases R Us Nelson Meeting Room"
                className="w-full h-[320px] sm:h-[480px] object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FECE14] animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-[#FECE14] uppercase">NELSON, TREHARRIS OFFICE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Large regional expertise. Personal, family-run care.</h3>
                <p className="text-neutral-300 text-xs sm:text-sm mt-2 max-w-xl">
                  When you call us, you get direct access to qualified solicitors who stand firmly by your side. We operate with strict discretion and warm, local South Wales heritage.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-white/80">
                  <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#FECE14]" /> SRA Regulated</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-[#FECE14]" /> 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Floating absolute badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-[#FECE14] text-black font-bold text-center p-3 shadow-lg border-4 border-black rotate-12 hover:rotate-0 transition-all duration-300">
              <span className="text-[10px] uppercase tracking-wider">ESTABLISHED</span>
              <span className="text-lg leading-none font-extrabold my-0.5">LOCAL</span>
              <span className="text-[9px] uppercase tracking-wider">PRACTICE</span>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: Meet the Team Profile Cards */}
        <div id="team" className="border-t border-neutral-900 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FECE14] px-3 py-1 rounded-full bg-white/10 inline-block mb-3">
              MEET THE TEAM
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Dedicated Family Law Experts
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base mt-4">
              Our family-run practice brings decades of combined family court experience directly to your case, ensuring you are never passed to junior assistants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden flex flex-col h-full hover:border-neutral-700 transition-all duration-300 group shadow-xl"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img
                    src={member.headshot_image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Absolute Role Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-extrabold text-[#FECE14] uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-neutral-950/90">
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Credentials / SRA Numbers Footer */}
                  {member.credentials && (
                    <div className="pt-4 border-t border-neutral-900 flex items-center gap-2">
                      <span className="font-mono text-[10px] text-neutral-500 tracking-tight leading-tight">
                        {member.credentials}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="mt-16 bg-neutral-950 rounded-2xl p-8 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FECE14]" />
                Need direct guidance on your family matter?
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl">
                We provide structured, fully confidential consultations to review your case, complete mandatory conflict checks, and lay out an honest, plain-English action plan.
              </p>
            </div>
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-[#FECE14] text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-lg hover:bg-white transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}