'use client';

import React, { useState } from 'react';
import { GalleryItem } from '@/payload/collections/Gallery';
import { Camera, Eye, X, Instagram, Sparkles } from 'lucide-react';

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
    <section id="gallery" className="section-padding bg-[#171613] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1C1A16] border border-[#D4AF37]/20 rounded-full px-4 py-1 text-xs text-[#E6C86E] uppercase tracking-widest font-semibold">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            Real Client Results
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Hair <span className="gold-gradient-text italic font-normal">Transformations</span> Portfolio
          </h2>
          <p className="text-[#C8C2B6] font-light text-base md:text-lg">
            Explore recent balayage blends, extension installations, and red-carpet stylings crafted at our West Hollywood atelier.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#0F0E0C] font-semibold shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#1C1A16] text-[#C8C2B6] border border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#D4AF37]/50 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* View Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0F0E0C] flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
              </div>

              {/* Info Label */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                <span className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-white font-serif text-lg font-medium leading-snug">
                  {item.title}
                </h4>
                {item.stylistName && (
                  <p className="text-[#C8C2B6] text-xs">Stylist: {item.stylistName}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full glass-panel-gold rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row">
            
            {/* Image */}
            <div className="w-full md:w-2/3 h-80 md:h-[500px] bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sidebar info */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between space-y-6">
              <div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-black/40"
                >
                  <X className="w-6 h-6" />
                </button>

                <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium mt-2">
                  {activeImage.title}
                </h3>
                
                {activeImage.stylistName && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-[#8C8578]">Crafted By</p>
                    <p className="text-white font-medium text-sm mt-0.5">{activeImage.stylistName}</p>
                  </div>
                )}

                {activeImage.instagramTag && (
                  <a
                    href={`https://instagram.com`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#E6C86E] hover:underline mt-3"
                  >
                    <Instagram className="w-4 h-4 text-[#D4AF37]" />
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
