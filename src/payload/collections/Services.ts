export interface ServiceItem {
  id: string;
  title: string;
  category: 'Color & Balayage' | 'Haircuts & Styling' | 'Hair Extensions' | 'Treatments & Gloss';
  price: string;
  duration: string;
  description: string;
  featuredImage: string;
  isPopular?: boolean;
}

export const ServicesCollection = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'duration', 'isPopular'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Name',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Color & Balayage', value: 'Color & Balayage' },
        { label: 'Haircuts & Styling', value: 'Haircuts & Styling' },
        { label: 'Hair Extensions', value: 'Hair Extensions' },
        { label: 'Treatments & Gloss', value: 'Treatments & Gloss' },
      ],
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Starting Price (e.g. $250+)',
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      label: 'Estimated Duration (e.g. 120 mins)',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      label: 'Highlight as Featured / Most Popular',
      defaultValue: false,
    },
  ],
};
