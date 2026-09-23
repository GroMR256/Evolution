'use client';

import React from 'react';
import { Star, Sparkles, Calendar, ArrowRight, MapPin } from 'lucide-react';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';

interface HeroProps {
  salonInfo: SalonInfoSettings;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ salonInfo, onOpenBooking }) => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0A0A08] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5BD52]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#171511] border border-[#E5BD52]/40 rounded-full px-4 py-1.5 text-xs text-[#F7EAB8] font-semibold uppercase tracking-wider shadow-sm">
            <span className="pulse-dot" />
            <MapPin className="w-3.5 h-3.5 text-[#E5BD52]" />
            <span>{salonInfo.address} • {salonInfo.cityStateZip}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            Bespoke <span className="gold-gradient-text italic font-normal">Balayage</span> & Hair Extensions
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#E3DDD4] font-normal leading-relaxed max-w-2xl">
            {salonInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="btn-gold text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Your Appointment
            </button>

            <a
              href="#services"
              className="btn-outline-gold text-sm flex items-center justify-center gap-2"
            >
              Explore Services & Menu
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* High Contrast Trust Badges */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/15 max-w-xl">
            <div className="bg-[#14120E] p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-1 text-[#E5BD52]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5BD52]" />
                ))}
              </div>
              <p className="text-white font-bold text-sm mt-1">4.9 Stars</p>
              <p className="text-[#A8A092] text-xs">500+ Verified Reviews</p>
            </div>

            <div className="bg-[#14120E] p-4 rounded-xl border border-white/10">
              <p className="text-[#E5BD52] font-serif text-2xl font-bold">12K+</p>
              <p className="text-white font-bold text-sm">Blonde Color Melts</p>
              <p className="text-[#A8A092] text-xs">Custom Formulated</p>
            </div>

            <div className="bg-[#14120E] p-4 rounded-xl border border-white/10">
              <p className="text-[#E5BD52] font-serif text-2xl font-bold">100%</p>
              <p className="text-white font-bold text-sm">Remy Hair</p>
              <p className="text-[#A8A092] text-xs">Invisible Extensions</p>
            </div>
          </div>

        </div>

        {/* Right Column: Featured Image Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#E5BD52]/40 shadow-2xl bg-[#141310]">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Hair Salon Balayage Transformation in Los Angeles"
              className="w-full h-[480px] object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08] via-transparent to-transparent opacity-85" />

            {/* Badge overlay */}
            <div className="absolute top-4 left-4 bg-[#14120E] border border-[#E5BD52]/50 rounded-full px-4 py-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E5BD52]" />
              <span className="text-xs text-white font-bold">West Hollywood Salon</span>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#141310] rounded-xl border border-white/15">
              <span className="text-xs text-[#E5BD52] font-bold uppercase tracking-wider block">Featured Style</span>
              <h3 className="text-white font-serif text-xl font-bold">Signature Sun-Kissed Balayage</h3>
              <p className="text-[#E3DDD4] text-xs mt-0.5">Crafted by Master Colorist Elena Rostova</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
