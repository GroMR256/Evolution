'use client';

import React, { useState } from 'react';
import { GalleryItem } from '@/payload/collections/Gallery';
import { Camera, Eye, X, Instagram } from 'lucide-react';

interface GallerySectionProps {
  gallery: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Balayage & Blondes', 'Precision Cuts', 'Hair Extensions', 'Red Carpet & Styling'];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-[#14120E] relative border-t border-white/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#E5BD52]/40 rounded-full px-4 py-1 text-xs text-[#F7EAB8] uppercase tracking-widest font-bold">
            <Camera className="w-3.5 h-3.5 text-[#E5BD52]" />
            Real Transformations Portfolio
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Hair <span className="gold-gradient-text italic font-normal">Transformations</span> Gallery
          </h2>
          <p className="text-[#E3DDD4] font-normal text-base md:text-lg">
            Explore recent balayage blends, hand-tied extension installations, and red-carpet hair styling.
          </p>
        </div>

        {/* Category Filter Pills */}
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

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-white/15 hover:border-[#E5BD52] shadow-xl bg-[#0A0A08]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* High Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/40 to-transparent opacity-90" />

              {/* Eye View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#E5BD52] text-[#0A0A08] flex items-center justify-center shadow-2xl font-bold">
                  <Eye className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Info Banner */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                <span className="text-xs text-[#E5BD52] uppercase font-bold tracking-wider block">
                  {item.category}
                </span>
                <h4 className="text-white font-serif text-xl font-bold leading-snug">
                  {item.title}
                </h4>
                {item.stylistName && (
                  <p className="text-[#E3DDD4] text-xs font-semibold">Stylist: {item.stylistName}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#171511] rounded-2xl overflow-hidden border-2 border-[#E5BD52]/50 shadow-2xl flex flex-col md:flex-row">
            
            <div className="w-full md:w-2/3 h-80 md:h-[500px] bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between space-y-6">
              <div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/60"
                >
                  <X className="w-6 h-6" />
                </button>

                <span className="text-xs text-[#E5BD52] font-bold uppercase tracking-wider block mb-1">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-2xl text-white font-bold">
                  {activeImage.title}
                </h3>
                
                {activeImage.stylistName && (
                  <div className="mt-4 pt-4 border-t border-white/15">
                    <p className="text-xs text-[#A8A092] font-medium">Stylist Artisanship</p>
                    <p className="text-white font-bold text-sm mt-0.5">{activeImage.stylistName}</p>
                  </div>
                )}

                {activeImage.instagramTag && (
                  <a
                    href={`https://instagram.com`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#F7EAB8] hover:underline mt-3 font-semibold"
                  >
                    <Instagram className="w-4 h-4 text-[#E5BD52]" />
                    {activeImage.instagramTag}
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="btn-gold w-full text-xs"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
