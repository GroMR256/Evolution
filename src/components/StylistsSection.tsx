'use client';

import React from 'react';
import { StylistItem } from '@/payload/collections/Stylists';
import { Instagram, Sparkles, Calendar, Award } from 'lucide-react';

interface StylistsSectionProps {
  stylists: StylistItem[];
  onSelectStylistForBooking: (stylistName: string) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ stylists, onSelectStylistForBooking }) => {
  return (
    <section id="stylists" className="section-padding bg-[#0F0E0C] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#D4AF37]/20 rounded-full px-4 py-1 text-xs text-[#E6C86E] uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            Celebrity & Master Artists
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Meet Our <span className="gold-gradient-text italic font-normal">Master Hair Stylists</span>
          </h2>
          <p className="text-[#C8C2B6] font-light text-base md:text-lg">
            Our team of internationally trained colorists, cut artisans, and extension specialists bring high-fashion expertise to every seat.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="glass-panel-gold rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={stylist.photo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171613] via-transparent to-transparent opacity-90" />

                  {/* Instagram Badge */}
                  {stylist.instagram && (
                    <a
                      href={`https://instagram.com/${stylist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-[#0F0E0C]/80 hover:bg-[#D4AF37] hover:text-[#0F0E0C] text-[#E6C86E] p-2.5 rounded-full border border-white/10 transition-colors"
                      title="Follow on Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                    {stylist.roleTitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {stylist.name}
                  </h3>
                  <p className="text-[#C8C2B6] text-sm font-light leading-relaxed">
                    {stylist.bio}
                  </p>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {stylist.specialties?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#24211C] text-[#E6C86E] text-[11px] px-3 py-1 rounded-full border border-[#D4AF37]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectStylistForBooking(stylist.name)}
                  className="btn-gold w-full text-xs"
                >
                  <Calendar className="w-4 h-4" />
                  Book with {stylist.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
