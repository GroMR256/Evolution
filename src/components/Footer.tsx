'use client';

import React from 'react';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';
import { MapPin, Phone, Mail, Clock, Instagram, Scissors, ExternalLink } from 'lucide-react';

interface FooterProps {
  salonInfo: SalonInfoSettings;
  onOpenBooking: () => void;
  onOpenCmsAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ salonInfo, onOpenBooking, onOpenCmsAdmin }) => {
  return (
    <footer id="location" className="bg-[#0A0A08] text-white pt-20 pb-10 border-t border-[#D4AF37]/20 relative">
      <div className="container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#0F0E0C] flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-2xl tracking-widest text-white uppercase leading-none">
                  AURA
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase mt-1">
                  Atelier Los Angeles
                </span>
              </div>
            </a>

            <p className="text-[#C8C2B6] text-sm font-light leading-relaxed">
              {salonInfo.tagline}
            </p>

            <div className="flex items-center gap-4 text-[#D4AF37]">
              <a href={salonInfo.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#171613] hover:bg-[#D4AF37] hover:text-[#0F0E0C] border border-white/10 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={salonInfo.socialLinks.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#171613] hover:bg-[#D4AF37] hover:text-[#0F0E0C] border border-white/10 flex items-center justify-center transition-colors text-xs font-bold">
                TT
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-xl text-white font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              Atelier Business Hours
            </h4>

            <div className="space-y-2.5 text-xs text-[#C8C2B6]">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span>Monday:</span>
                <span className="text-[#8C8578]">{salonInfo.hours.monday}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span>Tuesday – Friday:</span>
                <span className="text-white font-medium">{salonInfo.hours.tuesdayToFriday}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span>Saturday:</span>
                <span className="text-[#E6C86E] font-medium">{salonInfo.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">{salonInfo.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-xl text-white font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              West Hollywood Location
            </h4>

            <div className="space-y-3 text-xs text-[#C8C2B6]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{salonInfo.address}<br />{salonInfo.cityStateZip}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="hover:text-white transition-colors">{salonInfo.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="hover:text-white transition-colors">{salonInfo.email}</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-gold text-xs w-full py-3"
              >
                Book Your Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Payload Badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8C8578] gap-4">
          <p>© {new Date().getFullYear()} {salonInfo.salonName}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCmsAdmin}
              className="text-[#E6C86E] hover:underline cursor-pointer flex items-center gap-1"
            >
              ⚙️ Manage Site Content (Payload CMS)
            </button>
            <span>•</span>
            <a href="/admin" className="hover:text-white transition-colors flex items-center gap-1">
              Admin Portal
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
