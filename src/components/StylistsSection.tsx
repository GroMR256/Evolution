'use client';

import React from 'react';
import { StylistItem } from '@/payload/collections/Stylists';
import { Instagram, Calendar, Award } from 'lucide-react';

interface StylistsSectionProps {
  stylists: StylistItem[];
  onSelectStylistForBooking: (stylistName: string) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ stylists, onSelectStylistForBooking }) => {
  return (
    <section id="stylists" className="section-padding bg-[#0A0A08] relative border-t border-white/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#E5BD52]/40 rounded-full px-4 py-1 text-xs text-[#F7EAB8] uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5 text-[#E5BD52]" />
            Master Colorists & Stylists
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Meet Our <span className="gold-gradient-text italic font-normal">Expert Team</span>
          </h2>
          <p className="text-[#E3DDD4] font-normal text-base md:text-lg">
            Our master stylists bring European technique and Beverly Hills artistry to every transformation.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-[#1A1814] rounded-2xl overflow-hidden border border-white/15 hover:border-[#E5BD52]/60 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Stylist Image */}
                <div className="relative h-72 overflow-hidden bg-[#0A0A08]">
                  <img
                    src={stylist.photo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-transparent to-transparent opacity-90" />

                  {/* Instagram Button */}
                  {stylist.instagram && (
                    <a
                      href={`https://instagram.com/${stylist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-[#0A0A08] hover:bg-[#E5BD52] hover:text-[#0A0A08] text-[#F7EAB8] p-2.5 rounded-full border border-white/20 transition-colors shadow-md"
                      title="Follow on Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs text-[#E5BD52] font-bold uppercase tracking-wider">
                    {stylist.roleTitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold">
                    {stylist.name}
                  </h3>
                  <p className="text-[#E3DDD4] text-sm font-normal leading-relaxed">
                    {stylist.bio}
                  </p>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {stylist.specialties?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#26231C] text-[#F7EAB8] text-xs font-semibold px-3 py-1 rounded-full border border-[#E5BD52]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-2">
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
