'use client';

import React from 'react';
import { Star, Sparkles, Calendar, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';

interface HeroProps {
  salonInfo: SalonInfoSettings;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ salonInfo, onOpenBooking }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-20 overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#E6B8A2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1F1D18] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs text-[#E6C86E] font-medium tracking-wider uppercase">
            <span className="pulse-dot"></span>
            <MapPin className="w-3.5 h-3.5" />
            <span>{salonInfo.address}, {salonInfo.cityStateZip.split(',')[0]}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
            Bespoke <span className="gold-gradient-text font-normal italic">Balayage</span> & Luxury Hair Extensions
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#C8C2B6] font-light max-w-2xl leading-relaxed">
            {salonInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="btn-gold w-full sm:w-auto text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Your Transformation
            </button>

            <a
              href="#services"
              className="btn-outline-gold w-full sm:w-auto text-sm flex items-center justify-center gap-2"
            >
              View Service Menu
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 w-full max-w-xl">
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-white font-semibold text-sm mt-1">4.9 Star Rating</p>
              <p className="text-[#8C8578] text-xs">500+ Client Reviews</p>
            </div>

            <div>
              <p className="text-[#D4AF37] font-serif text-2xl font-semibold">12K+</p>
              <p className="text-white font-semibold text-sm">Blonde Color Melts</p>
              <p className="text-[#8C8578] text-xs">Custom Formulated</p>
            </div>

            <div>
              <p className="text-[#D4AF37] font-serif text-2xl font-semibold">100%</p>
              <p className="text-white font-semibold text-sm">Remy Hair</p>
              <p className="text-[#8C8578] text-xs">Damage-Free Extensions</p>
            </div>
          </div>

        </div>

        {/* Right Imagery Stack */}
        <div className="lg:col-span-5 relative">
          
          {/* Main Hero Card Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Hair Salon Balayage Transformation in Los Angeles"
              className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-transparent to-transparent opacity-80" />

            {/* Floating Live Status Badge */}
            <div className="absolute top-4 left-4 glass-panel-gold rounded-full px-4 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span className="text-xs text-white font-medium">Beverly Hills Stylists</span>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl border border-white/10">
              <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Featured Transformation</p>
              <p className="text-white font-serif text-xl font-medium">Signature Sun-Kissed Balayage</p>
              <p className="text-[#C8C2B6] text-xs mt-0.5">By Master Colorist Elena Rostova</p>
            </div>
          </div>

          {/* Secondary Floating Card */}
          <div className="hidden sm:flex absolute -bottom-6 -left-8 glass-panel-gold p-4 rounded-xl border border-[#D4AF37]/40 shadow-2xl items-center gap-4 max-w-xs animate-fade-in">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                alt="Elena Rostova" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-xs">Elena Rostova</p>
              <p className="text-[#E6C86E] text-[11px]">Executive Master Stylist</p>
              <p className="text-[#8C8578] text-[10px] mt-0.5">Vogue & Harper's Bazaar Featured</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
