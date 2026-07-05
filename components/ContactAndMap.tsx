'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  Send,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export function ContactAndMap() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Email is preferred',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'submitting' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, consent: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setStatus({ 
        type: 'error', 
        message: 'You must accept the conflict check and relationship terms before sending.' 
      });
      return;
    }

    setStatus({ type: 'submitting' });

    try {
      // Direct insert into cases_r_us_631ce1.general_enquiries
      const { error } = await supabase
        .from('general_enquiries')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferred_contact_method: formData.contactMethod,
          message: formData.message,
          consent_checked: formData.consent
        });

      if (error) throw error;

      setStatus({ 
        type: 'success', 
        message: 'Your secure message has been transmitted. An experienced team member will review it and reach out within 24 business hours.' 
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: 'Email is preferred',
        message: '',
        consent: false
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus({ 
        type: 'error', 
        message: err?.message || 'A transmission error occurred. Please try again or call our office directly.' 
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-[#111827] overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FECE14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#000000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#000000] bg-[#FECE14] uppercase shadow-sm"
          >
            <Sparkles className="w-3.h h-3 text-[#000000]" />
            LOCAL INFORMATION & CONTACT
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] font-sans"
          >
            We are here when you are ready to talk.
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-[#FECE14] mx-auto rounded-full" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Local Info & Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FECE14]" />
              <h3 className="text-xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                Office Headquarters
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-xl text-[#000000] shrink-0 group-hover:bg-[#FECE14] transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Address</h4>
                    <p className="mt-1 text-sm font-medium text-neutral-800 leading-relaxed">
                      Cases R Us<br />
                      12 Dynevor Terrace, Nelson<br />
                      Treharris, CF46 6PD
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-xl text-[#000000] shrink-0 group-hover:bg-[#FECE14] transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Telephone</h4>
                    <a 
                      href="tel:01443456789" 
                      className="mt-1 text-lg font-bold text-[#111827] block hover:text-[#FECE14] transition-colors"
                    >
                      01443 456 789
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-xl text-[#000000] shrink-0 group-hover:bg-[#FECE14] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Email Address</h4>
                    <a 
                      href="mailto:contact@casesrus.co.uk" 
                      className="mt-1 text-sm font-medium text-neutral-800 hover:text-[#FECE14] transition-colors break-all block"
                    >
                      contact@casesrus.co.uk
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-xl text-[#000000] shrink-0 group-hover:bg-[#FECE14] transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Opening Hours</h4>
                    <p className="mt-1 text-sm font-medium text-neutral-800">
                      Monday to Friday, 9:00 AM – 5:00 PM
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      (Closed on weekends and public holidays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 overflow-hidden space-y-4">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <iframe
                  title="Cases R Us Office Location Map"
                  src="https://maps.google.com/maps?q=12%20Dynevor%20Terrace%2c%20Nelson%2c%20Treharris%2c%20CF46%206PD&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-115 hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 bg-[#000000] text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-lg flex items-center gap-1.5">
                  <span>Nelson Office</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FECE14]" />
                </div>
              </div>
              <div className="px-2">
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong className="text-[#111827]">Location Note:</strong> Our office is located on Dynevor Terrace in Nelson, just a short walk from the local library. Free on-street parking is available directly outside the office for our clients.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Secure Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
              <div className="p-6 sm:p-10 bg-[#000000] text-white relative">
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FECE14]/10 to-transparent pointer-events-none" />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Send us a secure message.
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Have a general question? Fill out the form below, and a member of our team will get back to you within 24 business hours.
                </p>
              </div>

              <div className="p-6 sm:p-10 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., John Evans"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm placeholder-neutral-400 focus:border-[#FECE14] focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Contact Methods Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm placeholder-neutral-400 focus:border-[#FECE14] focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 07123 456789"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm placeholder-neutral-400 focus:border-[#FECE14] focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      How should we contact you?
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-800 bg-white focus:border-[#FECE14] focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:outline-none transition-all"
                    >
                      <option value="Email is preferred">Email is preferred</option>
                      <option value="Phone is preferred">Phone is preferred</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you? Please keep your message brief and general."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm placeholder-neutral-400 focus:border-[#FECE14] focus:ring-2 focus:ring-[#FECE14] focus:ring-offset-2 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Conflict Warning Box */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 leading-relaxed">
                      <strong className="font-semibold">Please note:</strong> Do not send highly sensitive case details or confidential evidence through this form. A formal conflict check must be completed before we can accept confidential information.
                    </p>
                  </div>

                  {/* Checkbox Agreement */}
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="w-4.5 h-4.5 text-[#FECE14] border-neutral-300 rounded focus:ring-[#FECE14]"
                      />
                    </div>
                    <label htmlFor="consent" className="text-xs text-neutral-600 leading-relaxed select-none">
                      I understand that submitting this form does not create a solicitor-client relationship and that my inquiry is subject to a conflict check. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Status Indicator Messages */}
                  <AnimatePresence mode="wait">
                    {status.type === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                        <p className="text-sm text-emerald-800 leading-normal">{status.message}</p>
                      </motion.div>
                    )}

                    {status.type === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                      >
                        <AlertTriangle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800 leading-normal">{status.message}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.type === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FECE14] hover:bg-[#E2B70F] text-[#000000] font-bold text-sm tracking-wide uppercase transition-all duration-150 focus:ring-2 focus:ring-offset-2 focus:ring-[#FECE14] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {status.type === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Securely...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Secure Message
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}