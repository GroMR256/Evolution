'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { StylistsSection } from '@/components/StylistsSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CmsAdminModal } from '@/components/CmsAdminModal';

import {
  INITIAL_SERVICES,
  INITIAL_STYLISTS,
  INITIAL_GALLERY,
  INITIAL_TESTIMONIALS,
  INITIAL_SALON_INFO,
} from '@/lib/cmsData';

export default function HomePage() {
  // CMS State Providers (Synchronized between Payload CMS schemas and Web Frontend)
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [stylists, setStylists] = useState(INITIAL_STYLISTS);
  const [gallery, setGallery] = useState(INITIAL_GALLERY);
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [salonInfo, setSalonInfo] = useState(INITIAL_SALON_INFO);

  // Modals state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [cmsAdminOpen, setCmsAdminOpen] = useState(false);

  // Booking initial selections
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);
  const [preSelectedStylist, setPreSelectedStylist] = useState<string | undefined>(undefined);

  const handleOpenBookingForService = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    setPreSelectedStylist(undefined);
    setBookingOpen(true);
  };

  const handleOpenBookingForStylist = (stylistName: string) => {
    setPreSelectedStylist(stylistName);
    setPreSelectedService(undefined);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F0E0C] text-[#F8F6F0]">
      {/* Header */}
      <Header
        salonInfo={salonInfo}
        onOpenBooking={() => {
          setPreSelectedService(undefined);
          setPreSelectedStylist(undefined);
          setBookingOpen(true);
        }}
        onOpenCmsAdmin={() => setCmsAdminOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          salonInfo={salonInfo}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* Services Menu Section */}
        <ServicesSection
          services={services}
          onSelectServiceForBooking={handleOpenBookingForService}
        />

        {/* Master Stylists Team Section */}
        <StylistsSection
          stylists={stylists}
          onSelectStylistForBooking={handleOpenBookingForStylist}
        />

        {/* Hair Transformations Portfolio Gallery */}
        <GallerySection gallery={gallery} />

        {/* Client Praise & Testimonials */}
        <TestimonialsSection testimonials={testimonials} />
      </main>

      {/* Footer */}
      <Footer
        salonInfo={salonInfo}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCmsAdmin={() => setCmsAdminOpen(true)}
      />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        services={services}
        stylists={stylists}
        initialService={preSelectedService}
        initialStylist={preSelectedStylist}
      />

      {/* Payload CMS Admin & Content Management Modal */}
      <CmsAdminModal
        isOpen={cmsAdminOpen}
        onClose={() => setCmsAdminOpen(false)}
        services={services}
        stylists={stylists}
        salonInfo={salonInfo}
        onUpdateServices={setServices}
        onUpdateSalonInfo={setSalonInfo}
        onUpdateStylists={setStylists}
      />
    </div>
  );
}
