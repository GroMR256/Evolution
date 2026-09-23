'use client';

import React, { useState } from 'react';
import { ServiceItem } from '@/payload/collections/Services';
import { Clock, DollarSign, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Color & Balayage', 'Haircuts & Styling', 'Hair Extensions', 'Treatments & Gloss'];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section-padding bg-[#141310] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#D4AF37]/20 rounded-full px-4 py-1 text-xs text-[#E6C86E] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Bespoke Menu & Pricing
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Curated <span className="gold-gradient-text italic font-normal">Haircare & Styling</span> Services
          </h2>
          <p className="text-[#C8C2B6] font-light text-base md:text-lg">
            Every service includes a personalized color & texture consultation, premium organic botanical washing, and signature LA finish styling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#0F0E0C] font-semibold shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-[#1C1A16] text-[#C8C2B6] border border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Service Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.featuredImage || 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-transparent to-transparent opacity-90" />

                  {/* Popular Tag */}
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0F0E0C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Client Favorite
                    </div>
                  )}

                  {/* Price & Duration Badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-medium">
                    <span className="bg-[#0F0E0C]/90 text-[#E6C86E] px-3 py-1 rounded-full border border-[#D4AF37]/30 font-serif text-lg font-bold">
                      {service.price}
                    </span>
                    <span className="bg-[#0F0E0C]/80 text-[#C8C2B6] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Body */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-[#E6C86E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#C8C2B6] text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#24211C] hover:bg-[#D4AF37] text-white hover:text-[#0F0E0C] font-semibold text-xs tracking-wider uppercase border border-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve This Service
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
