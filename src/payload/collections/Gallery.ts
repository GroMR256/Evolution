export interface GalleryItem {
  id: string;
  title: string;
  category: 'Balayage & Blondes' | 'Precision Cuts' | 'Hair Extensions' | 'Red Carpet & Styling';
  image: string;
  stylistName?: string;
  instagramTag?: string;
}

export const GalleryCollection = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'stylistName'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Transformation / Haircut Title',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Balayage & Blondes', value: 'Balayage & Blondes' },
        { label: 'Precision Cuts', value: 'Precision Cuts' },
        { label: 'Hair Extensions', value: 'Hair Extensions' },
        { label: 'Red Carpet & Styling', value: 'Red Carpet & Styling' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stylistName',
      type: 'text',
      label: 'Stylist Credit',
    },
    {
      name: 'instagramTag',
      type: 'text',
      label: 'Instagram Tag / Link',
    },
  ],
};
