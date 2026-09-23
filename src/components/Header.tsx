'use client';

import React, { useState, useEffect } from 'react';
import { Scissors, Sparkles, Menu, X, Calendar, Settings, MapPin, Phone } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar (Configurable in Payload CMS Globals) */}
      {salonInfo.showAnnouncementBar && (
        <div className="bg-[#1A1814] text-[#E6C86E] text-xs py-2 px-4 text-center border-b border-[#D4AF37]/20 flex items-center justify-center gap-2 tracking-wide font-medium">
          <span>{salonInfo.announcementBarText}</span>
          <button 
            onClick={onOpenBooking}
            className="underline hover:text-white transition-colors cursor-pointer ml-1 font-semibold"
          >
            Claim Offer
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F0E0C]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container flex items-center justify-between">
          
          {/* Salon Logo */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 text-[#0F0E0C]" />
            </div>
            <div>
              <span className="block font-serif text-2xl tracking-widest text-white font-semibold uppercase leading-none">
                AURA
              </span>
              <span className="block text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-sans mt-1">
                Atelier Los Angeles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#services" className="text-[#C8C2B6] hover:text-[#E6C86E] transition-colors">Services</a>
            <a href="#stylists" className="text-[#C8C2B6] hover:text-[#E6C86E] transition-colors">Stylists</a>
            <a href="#gallery" className="text-[#C8C2B6] hover:text-[#E6C86E] transition-colors">Transformations</a>
            <a href="#reviews" className="text-[#C8C2B6] hover:text-[#E6C86E] transition-colors">Reviews</a>
            <a href="#location" className="text-[#C8C2B6] hover:text-[#E6C86E] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              West Hollywood
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Payload CMS Admin Toggle Button */}
            <button
              onClick={onOpenCmsAdmin}
              className="flex items-center gap-2 bg-[#1C1A16] hover:bg-[#2A2721] text-[#E6C86E] text-xs font-semibold px-3.5 py-2.5 rounded-full border border-[#D4AF37]/30 transition-all cursor-pointer shadow-md"
              title="Open Payload CMS Content Manager"
            >
              <Settings className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Payload CMS Admin</span>
            </button>

            {/* Book Appointment CTA */}
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
              className="bg-[#1C1A16] text-[#E6C86E] p-2 rounded-full border border-[#D4AF37]/30"
              title="CMS Admin"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#171613] border-b border-[#D4AF37]/20 px-6 py-6 animate-fade-in">
            <div className="flex flex-col gap-4 font-medium text-base">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                Services & Menu
              </a>
              <a 
                href="#stylists" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                Our Master Stylists
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                Hair Transformations
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                Client Testimonials
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] py-2"
              >
                Location & Hours
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-gold w-full text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCmsAdmin();
                  }}
                  className="btn-outline-gold w-full text-center text-xs"
                >
                  <Settings className="w-4 h-4" />
                  Manage Web Content (Payload CMS)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
