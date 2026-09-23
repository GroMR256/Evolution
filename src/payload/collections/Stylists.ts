export interface StylistItem {
  id: string;
  name: string;
  roleTitle: string;
  bio: string;
  specialties: string[];
  photo: string;
  instagram: string;
  bookingUrl?: string;
  displayOrder: number;
}

export const StylistsCollection = {
  slug: 'stylists',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'roleTitle', 'instagram', 'displayOrder'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Stylist Full Name',
    },
    {
      name: 'roleTitle',
      type: 'text',
      required: true,
      label: 'Title / Role (e.g. Founder & Master Colorist)',
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'specialties',
      type: 'array',
      label: 'Specialties',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram Handle (e.g. @stylist_la)',
    },
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'Direct Booking URL (Optional)',
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 1,
    },
  ],
};
