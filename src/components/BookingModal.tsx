'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Scissors, CheckCircle, Sparkles } from 'lucide-react';
import { ServiceItem } from '@/payload/collections/Services';
import { StylistItem } from '@/payload/collections/Stylists';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  stylists: StylistItem[];
  initialService?: string;
  initialStylist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  services,
  stylists,
  initialService,
  initialStylist,
}) => {
  const [selectedService, setSelectedService] = useState(initialService || services[0]?.title || '');
  const [selectedStylist, setSelectedStylist] = useState(initialStylist || 'Any Available Stylist');
  const [date, setDate] = useState('2026-09-25');
  const [time, setTime] = useState('11:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setSelectedService(initialService);
    if (initialStylist) setSelectedStylist(initialStylist);
  }, [initialService, initialStylist]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-xl w-full glass-panel-gold rounded-3xl p-8 border border-[#D4AF37]/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#C8C2B6] hover:text-white p-2 rounded-full bg-[#1F1D18] border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1C1A16] text-[#E6C86E] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 uppercase font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Online Reservation
              </div>
              <h3 className="font-serif text-3xl text-white font-light">
                Book Your <span className="gold-gradient-text italic font-normal">Sanctuary Visit</span>
              </h3>
              <p className="text-[#C8C2B6] text-xs mt-1">
                Select your desired service, master stylist, and time in West Hollywood.
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs text-[#E6C86E] uppercase tracking-wider font-semibold mb-2">
                Select Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#171613] text-white border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
                required
              >
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.price} • {s.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Stylist Selection */}
            <div>
              <label className="block text-xs text-[#E6C86E] uppercase tracking-wider font-semibold mb-2">
                Select Stylist
              </label>
              <select
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="w-full bg-[#171613] text-white border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Any Available Stylist">Any Master Stylist Available</option>
                {stylists.map((st) => (
                  <option key={st.id} value={st.name}>
                    {st.name} ({st.roleTitle})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#E6C86E] uppercase tracking-wider font-semibold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#171613] text-white border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-[#E6C86E] uppercase tracking-wider font-semibold mb-2">
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#171613] text-white border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
                >
                  <option>09:30 AM</option>
                  <option>11:00 AM</option>
                  <option>01:30 PM</option>
                  <option>03:00 PM</option>
                  <option>05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Client Contact Info */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs text-[#C8C2B6] font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Lauren Conrad"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#171613] text-white border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#C8C2B6] font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="lauren@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-[#171613] text-white border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C8C2B6] font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(310) 555-0199"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#171613] text-white border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-gold w-full text-sm mt-4 py-3.5"
            >
              Confirm Appointment Reservation
            </button>
          </form>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-white font-medium">Reservation Requested!</h3>
              <p className="text-[#C8C2B6] text-sm max-w-md mx-auto">
                Thank you <span className="text-white font-semibold">{clientName}</span>. Our concierge team at AURA Atelier Los Angeles will send a confirmation email & SMS shortly.
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="bg-[#171613] p-6 rounded-2xl border border-[#D4AF37]/20 text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8578]">Service:</span>
                <span className="text-white font-semibold">{selectedService}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8578]">Stylist:</span>
                <span className="text-white font-semibold">{selectedStylist}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8C8578]">Date & Time:</span>
                <span className="text-[#E6C86E] font-semibold">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8578]">Location:</span>
                <span className="text-white">8492 Melrose Ave, West Hollywood</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="btn-gold w-full text-xs"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
