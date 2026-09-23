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
    <footer id="location" className="bg-[#0A0A08] text-white pt-20 pb-10 border-t border-[#E5BD52]/40 relative">
      <div className="container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5BD52] text-[#0A0A08] flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-2xl tracking-widest text-white font-bold uppercase leading-none">
                  AURA
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#E5BD52] uppercase font-bold mt-1">
                  Atelier Los Angeles
                </span>
              </div>
            </a>

            <p className="text-[#E3DDD4] text-sm font-normal leading-relaxed">
              {salonInfo.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href={salonInfo.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1C1A16] hover:bg-[#E5BD52] hover:text-[#0A0A08] text-[#F7EAB8] border border-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={salonInfo.socialLinks.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1C1A16] hover:bg-[#E5BD52] hover:text-[#0A0A08] text-[#F7EAB8] border border-white/20 flex items-center justify-center font-bold text-xs">
                TT
              </a>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-2xl text-white font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E5BD52]" />
              Atelier Business Hours
            </h4>

            <div className="space-y-3 text-sm text-[#E3DDD4]">
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span className="font-medium">Monday:</span>
                <span className="text-[#A8A092] font-semibold">{salonInfo.hours.monday}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span className="font-medium">Tuesday – Friday:</span>
                <span className="text-white font-bold">{salonInfo.hours.tuesdayToFriday}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span className="font-medium">Saturday:</span>
                <span className="text-[#F7EAB8] font-bold">{salonInfo.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-white font-bold">{salonInfo.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-2xl text-white font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E5BD52]" />
              West Hollywood Location
            </h4>

            <div className="space-y-3 text-sm text-[#E3DDD4]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5BD52] shrink-0 mt-1" />
                <span className="font-medium">{salonInfo.address}<br />{salonInfo.cityStateZip}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5BD52] shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="hover:text-white font-semibold transition-colors">{salonInfo.phone}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5BD52] shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="hover:text-white font-semibold transition-colors">{salonInfo.email}</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-gold text-xs w-full py-3"
              >
                Book Appointment Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Payload Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A8A092] gap-4">
          <p>© {new Date().getFullYear()} {salonInfo.salonName}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCmsAdmin}
              className="text-[#F7EAB8] font-bold hover:underline cursor-pointer flex items-center gap-1.5"
            >
              ⚙️ Payload CMS Content Manager
            </button>
            <span>•</span>
            <a href="/admin" className="hover:text-white font-bold transition-colors flex items-center gap-1">
              Admin Portal
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
