'use client';

import React from 'react';
import { TestimonialItem } from '@/payload/collections/Testimonials';
import { Star, Quote, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="reviews" className="section-padding bg-[#0F0E0C] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#D4AF37]/20 rounded-full px-4 py-1 text-xs text-[#E6C86E] uppercase tracking-widest font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            Client Praise & Love
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            What Our <span className="gold-gradient-text italic font-normal">Clients Say</span>
          </h2>
          <p className="text-[#C8C2B6] font-light text-base md:text-lg">
            Read authentic reviews from LA tastemakers, models, and long-time salon regulars.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tst) => (
            <div
              key={tst.id}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(tst.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors" />
                </div>

                {/* Service Tag */}
                {tst.serviceReceived && (
                  <span className="inline-block text-[11px] text-[#E6C86E] bg-[#24211C] px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    {tst.serviceReceived}
                  </span>
                )}

                {/* Quote Text */}
                <p className="text-[#C8C2B6] font-light text-sm italic leading-relaxed">
                  "{tst.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={tst.avatarUrl || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'}
                  alt={tst.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{tst.clientName}</h4>
                  <p className="text-[#8C8578] text-xs">{tst.neighborhood}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
