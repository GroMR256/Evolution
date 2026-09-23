export interface SalonInfoSettings {
  salonName: string;
  tagline: string;
  address: string;
  cityStateZip: string;
  phone: string;
  email: string;
  hours: {
    monday: string;
    tuesdayToFriday: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    instagram: string;
    tiktok: string;
    facebook: string;
    pinterest: string;
  };
  bookingExternalUrl: string;
  announcementBarText?: string;
  showAnnouncementBar?: boolean;
}

export const SalonInfoGlobal = {
  slug: 'salon-info',
  label: 'Salon Settings & Hours',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'salonName',
      type: 'text',
      defaultValue: 'AURA Atelier Los Angeles',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Bespoke Balayage, Luxury Extensions & High-End Haircare in West Hollywood',
    },
    {
      name: 'address',
      type: 'text',
      defaultValue: '8492 Melrose Ave, Suite 200',
    },
    {
      name: 'cityStateZip',
      type: 'text',
      defaultValue: 'West Hollywood, CA 90069',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+1 (310) 555-0198',
    },
    {
      name: 'email',
      type: 'text',
      defaultValue: 'concierge@aurasalonla.com',
    },
    {
      name: 'hoursGroup',
      type: 'group',
      label: 'Business Hours',
      fields: [
        { name: 'monday', type: 'text', defaultValue: 'Closed (Private Consultations Only)' },
        { name: 'tuesdayToFriday', type: 'text', defaultValue: '9:00 AM – 7:00 PM' },
        { name: 'saturday', type: 'text', defaultValue: '8:30 AM – 6:00 PM' },
        { name: 'sunday', type: 'text', defaultValue: '10:00 AM – 5:00 PM' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media',
      fields: [
        { name: 'instagram', type: 'text', defaultValue: 'https://instagram.com/aurasalon.la' },
        { name: 'tiktok', type: 'text', defaultValue: 'https://tiktok.com/@aurasalon.la' },
        { name: 'facebook', type: 'text', defaultValue: 'https://facebook.com/aurasalonla' },
        { name: 'pinterest', type: 'text', defaultValue: 'https://pinterest.com/aurasalonla' },
      ],
    },
    {
      name: 'bookingExternalUrl',
      type: 'text',
      defaultValue: 'https://squareup.com/appointments/book/aurasalonla',
    },
    {
      name: 'announcementBarText',
      type: 'text',
      defaultValue: '✨ Complimentary Gloss Treatment with any Signature Balayage service this month. Reserve now.',
    },
    {
      name: 'showAnnouncementBar',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};
