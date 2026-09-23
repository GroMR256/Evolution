'use client';

import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Calendar, Settings, MapPin } from 'lucide-react';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';

interface HeaderProps {
  salonInfo: SalonInfoSettings;
  onOpenBooking: () => void;
  onOpenCmsAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ salonInfo, onOpenBooking, onOpenCmsAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      {salonInfo.showAnnouncementBar && (
        <div className="bg-[#1A1813] text-[#F7EAB8] text-xs py-2.5 px-4 text-center border-b border-[#E5BD52]/30 flex items-center justify-center gap-2 font-medium tracking-wide">
          <span>{salonInfo.announcementBarText}</span>
          <button 
            onClick={onOpenBooking}
            className="underline hover:text-white font-bold cursor-pointer ml-1"
          >
            Claim Offer
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A08]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl' 
          : 'bg-[#0A0A08] py-5 border-b border-white/5'
      }`}>
        <div className="container flex items-center justify-between">
          
          {/* Salon Logo */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-full bg-[#E5BD52] text-[#0A0A08] flex items-center justify-center shadow-md font-bold">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl tracking-widest text-white font-bold uppercase leading-none">
                AURA
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#E5BD52] uppercase font-sans mt-1 font-semibold">
                Atelier Los Angeles
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <a href="#services" className="text-[#E3DDD4] hover:text-[#E5BD52] transition-colors">Services</a>
            <a href="#stylists" className="text-[#E3DDD4] hover:text-[#E5BD52] transition-colors">Stylists</a>
            <a href="#gallery" className="text-[#E3DDD4] hover:text-[#E5BD52] transition-colors">Transformations</a>
            <a href="#reviews" className="text-[#E3DDD4] hover:text-[#E5BD52] transition-colors">Reviews</a>
            <a href="#location" className="text-[#E3DDD4] hover:text-[#E5BD52] transition-colors flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E5BD52]" />
              West Hollywood
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenCmsAdmin}
              className="flex items-center gap-2 bg-[#1C1A16] hover:bg-[#2A2620] text-[#E5BD52] text-xs font-bold px-4 py-2.5 rounded-full border border-[#E5BD52]/40 transition-all cursor-pointer shadow-sm"
              title="Open Payload CMS Content Manager"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Payload CMS Admin</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="btn-gold text-xs"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenCmsAdmin}
              className="bg-[#1C1A16] text-[#E5BD52] p-2 rounded-full border border-[#E5BD52]/30"
              title="CMS Admin"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141310] border-b border-[#E5BD52]/30 px-6 py-6 animate-fade-in space-y-4">
            <div className="flex flex-col gap-3 font-semibold text-base">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10">Services Menu</a>
              <a href="#stylists" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10">Master Stylists</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10">Transformations</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10">Client Reviews</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-white py-2">Location & Hours</a>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                  className="btn-gold w-full text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCmsAdmin(); }}
                  className="btn-outline-gold w-full text-center text-xs"
                >
                  <Settings className="w-4 h-4" />
                  Payload CMS Content Manager
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
