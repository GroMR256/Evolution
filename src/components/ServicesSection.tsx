'use client';

import React, { useState } from 'react';
import { ServiceItem } from '@/payload/collections/Services';
import { Clock, Sparkles, Calendar } from 'lucide-react';

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
    <section id="services" className="section-padding bg-[#14120E] relative border-t border-white/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#E5BD52]/40 rounded-full px-4 py-1 text-xs text-[#F7EAB8] uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#E5BD52]" />
            Service Menu & Transparent Pricing
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Curated <span className="gold-gradient-text italic font-normal">Haircare & Styling</span> Services
          </h2>
          <p className="text-[#E3DDD4] font-normal text-base md:text-lg">
            Every appointment includes a custom color consultation, luxury hair wash, scalp therapy, and signature LA finish styling.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E5BD52] text-[#0A0A08] shadow-lg shadow-[#E5BD52]/30'
                  : 'bg-[#1C1A16] text-[#E3DDD4] border border-white/15 hover:border-[#E5BD52]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#1A1814] rounded-2xl overflow-hidden border border-white/15 hover:border-[#E5BD52]/60 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-[#0A0A08]">
                  <img
                    src={service.featuredImage || 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-transparent to-transparent opacity-90" />

                  {/* Popular Badge */}
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 bg-[#E5BD52] text-[#0A0A08] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}

                  {/* Price & Duration Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#0A0A08] text-[#F7EAB8] px-3.5 py-1 rounded-full border border-[#E5BD52]/40 font-serif text-lg font-bold">
                      {service.price}
                    </span>
                    <span className="bg-[#0A0A08] text-[#E3DDD4] px-3 py-1 rounded-full border border-white/15 text-xs font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E5BD52]" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-2.5">
                  <span className="text-xs text-[#E5BD52] font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold">
                    {service.title}
                  </h3>
                  <p className="text-[#E3DDD4] text-sm font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="btn-gold w-full text-xs"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve Service
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
