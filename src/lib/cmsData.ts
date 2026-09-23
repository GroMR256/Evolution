import { ServiceItem } from '@/payload/collections/Services';
import { StylistItem } from '@/payload/collections/Stylists';
import { GalleryItem } from '@/payload/collections/Gallery';
import { TestimonialItem } from '@/payload/collections/Testimonials';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Signature Sun-Kissed Balayage',
    category: 'Color & Balayage',
    price: '$350+',
    duration: '180 mins',
    description: 'Bespoke hand-painted highlights tailored to your natural skin tone. Includes olaplex bond builder, customized gloss toner, and signature bouncy LA blowout.',
    featuredImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    isPopular: true,
  },
  {
    id: 'srv-2',
    title: 'Precision Luxury Haircut & Styling',
    category: 'Haircuts & Styling',
    price: '$175+',
    duration: '75 mins',
    description: 'Comprehensive consultation, deep scalp massage, customized precision haircut (layers, curtain bangs, or sleek bob), and finished with red-carpet styling.',
    featuredImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1000',
    isPopular: true,
  },
  {
    id: 'srv-3',
    title: 'Beverly Hills Blonde Transformation',
    category: 'Color & Balayage',
    price: '$450+',
    duration: '240 mins',
    description: 'Full head foil-ayage, root melt, custom platinum or buttery blonde toning, deep moisture treatment, and celebrity finish styling.',
    featuredImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000',
    isPopular: false,
  },
  {
    id: 'srv-4',
    title: 'Invisible Bead Hair Extensions',
    category: 'Hair Extensions',
    price: '$800+',
    duration: '210 mins',
    description: '100% Remy human hair hand-tied hair extensions for seamless volume and length with zero damage to natural hair roots. Custom color blend included.',
    featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    isPopular: true,
  },
  {
    id: 'srv-5',
    title: 'Caviar Scalp & Silk Gloss Treatment',
    category: 'Treatments & Gloss',
    price: '$120',
    duration: '45 mins',
    description: 'Restorative scalp detox treatment infused with botanical oils and caviar extract, followed by a glass-hair shine gloss treatment.',
    featuredImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
    isPopular: false,
  },
  {
    id: 'srv-6',
    title: 'Glamour Hollywood Waves & Styling',
    category: 'Haircuts & Styling',
    price: '$140',
    duration: '60 mins',
    description: 'Iconic glossy Hollywood waves or effortless beach texture perfect for red carpet events, photo shoots, or special evenings in LA.',
    featuredImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    isPopular: false,
  }
];

export const INITIAL_STYLISTS: StylistItem[] = [
  {
    id: 'sty-1',
    name: 'Elena Rostova',
    roleTitle: 'Founder & Executive Colorist',
    bio: 'Trained in Paris & London, Elena has spent over 14 years perfecting effortless California blondes for Hollywood celebrities and West Coast tastemakers.',
    specialties: ['Balayage Master', 'Blonde Corrections', 'Celebrity Styling'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    instagram: '@elena_auracolor',
    displayOrder: 1,
  },
  {
    id: 'sty-2',
    name: 'Marcus Vance',
    roleTitle: 'Lead Extension Specialist & Stylist',
    bio: 'Master of invisible hand-tied extensions and precision architectural cuts. Marcus specializes in high-volume transformations.',
    specialties: ['Invisible Extensions', 'Precision Bobs', 'Textured Layers'],
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    instagram: '@marcusvance_hair',
    displayOrder: 2,
  },
  {
    id: 'sty-3',
    name: 'Sofia Chen',
    roleTitle: 'Senior Colorist & Scalp Specialist',
    bio: 'Passionate about hair wellness and dimensional warm brunettes, Sofia crafts custom color melts that age gracefully for months.',
    specialties: ['Warm Brunettes', 'Gloss Treatments', 'Scalp Health'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    instagram: '@sofia_aurastyle',
    displayOrder: 3,
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dimensional Honey Balayage & Layers',
    category: 'Balayage & Blondes',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Elena Rostova',
    instagramTag: '@elena_auracolor',
  },
  {
    id: 'gal-2',
    title: 'Sleek Italian Bob & Face-Framing Gloss',
    category: 'Precision Cuts',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Marcus Vance',
    instagramTag: '@marcusvance_hair',
  },
  {
    id: 'gal-3',
    title: '24-Inch Seamless Hand-Tied Extension Volume',
    category: 'Hair Extensions',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Marcus Vance',
    instagramTag: '@marcusvance_hair',
  },
  {
    id: 'gal-4',
    title: 'Butter Blonde Foil-ayage Transformation',
    category: 'Balayage & Blondes',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Elena Rostova',
    instagramTag: '@elena_auracolor',
  },
  {
    id: 'gal-5',
    title: 'Hollywood Sunset Copper Gloss & Soft Waves',
    category: 'Red Carpet & Styling',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Sofia Chen',
    instagramTag: '@sofia_aurastyle',
  },
  {
    id: 'gal-6',
    title: 'Chai Latte Brunette Melt',
    category: 'Balayage & Blondes',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
    stylistName: 'Sofia Chen',
    instagramTag: '@sofia_aurastyle',
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'tst-1',
    clientName: 'Camille Reynolds',
    neighborhood: 'Beverly Hills, CA',
    rating: 5,
    quote: 'Elena is a literal wizard with blondes! I was nervous about brassiness after moving to LA, but she achieved the exact sun-drenched tone I dreamed of without damaging my hair. The salon vibe is pure luxury.',
    serviceReceived: 'Signature Sun-Kissed Balayage',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'tst-2',
    clientName: 'Victoria Sterling',
    neighborhood: 'West Hollywood, CA',
    rating: 5,
    quote: 'Marcus did my invisible bead extensions for an award ceremony and I was blown away! Absolutely comfortable, completely undetectable, and lasted months. AURA is hands down the best hair salon in LA.',
    serviceReceived: 'Invisible Bead Hair Extensions',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'tst-3',
    clientName: 'Jessica Taylor-Ross',
    neighborhood: 'Malibu, CA',
    rating: 5,
    quote: 'From the espresso upon arrival to the scalpmassage and custom gloss treatment, every minute at AURA feels like a 5-star spa getaway. My hair has never felt so silky.',
    serviceReceived: 'Caviar Scalp & Silk Gloss',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  }
];

export const INITIAL_SALON_INFO: SalonInfoSettings = {
  salonName: 'AURA Atelier Los Angeles',
  tagline: 'Bespoke Balayage, Invisible Extensions & Luxury Styling in West Hollywood',
  address: '8492 Melrose Avenue, Suite 200',
  cityStateZip: 'West Hollywood, CA 90069',
  phone: '+1 (310) 555-0198',
  email: 'concierge@aurasalonla.com',
  hours: {
    monday: 'Closed (Private Consultations Only)',
    tuesdayToFriday: '9:00 AM – 7:00 PM',
    saturday: '8:30 AM – 6:00 PM',
    sunday: '10:00 AM – 5:00 PM',
  },
  socialLinks: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
  },
  bookingExternalUrl: 'https://squareup.com/appointments/book/aurasalonla',
  announcementBarText: '✨ Complimentary Gloss & Scalp Therapy with any Signature Balayage service this month. Reserve now.',
  showAnnouncementBar: true,
};
