import { ServicesCollection } from './collections/Services';
import { StylistsCollection } from './collections/Stylists';
import { GalleryCollection } from './collections/Gallery';
import { TestimonialsCollection } from './collections/Testimonials';
import { MediaCollection } from './collections/Media';
import { SalonInfoGlobal } from './globals/SalonInfo';

export const payloadConfig = {
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- AURA Salon LA Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [
    ServicesCollection,
    StylistsCollection,
    GalleryCollection,
    TestimonialsCollection,
    MediaCollection,
  ],
  globals: [
    SalonInfoGlobal,
  ],
  secret: process.env.PAYLOAD_SECRET || 'SUPER_SECRET_PAYLOAD_KEY_AURA_SALON_LA',
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
};

export default payloadConfig;
