'use client';

import React from 'react';
import { TestimonialItem } from '@/payload/collections/Testimonials';
import { Star, Quote, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="reviews" className="section-padding bg-[#0A0A08] relative border-t border-white/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#E5BD52]/40 rounded-full px-4 py-1 text-xs text-[#F7EAB8] uppercase tracking-widest font-bold">
            <Heart className="w-3.5 h-3.5 text-[#E5BD52]" />
            Client Praise & Verified Reviews
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            What Our <span className="gold-gradient-text italic font-normal">Clients Say</span>
          </h2>
          <p className="text-[#E3DDD4] font-normal text-base md:text-lg">
            Read authentic reviews from LA tastemakers, celebrities, and long-time salon regulars.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tst) => (
            <div
              key={tst.id}
              className="bg-[#1A1814] p-8 rounded-2xl border border-white/15 hover:border-[#E5BD52]/60 transition-all flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E5BD52]">
                    {[...Array(tst.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5BD52]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#E5BD52]/30" />
                </div>

                {/* Service Tag */}
                {tst.serviceReceived && (
                  <span className="inline-block text-xs font-bold text-[#F7EAB8] bg-[#26231C] px-3.5 py-1.5 rounded-full border border-[#E5BD52]/30">
                    {tst.serviceReceived}
                  </span>
                )}

                {/* Quote Text */}
                <p className="text-[#E3DDD4] font-normal text-sm italic leading-relaxed">
                  "{tst.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/15">
                <img
                  src={tst.avatarUrl || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'}
                  alt={tst.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E5BD52]"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{tst.clientName}</h4>
                  <p className="text-[#A8A092] text-xs font-medium">{tst.neighborhood}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
