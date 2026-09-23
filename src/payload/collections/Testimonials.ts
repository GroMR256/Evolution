export interface TestimonialItem {
  id: string;
  clientName: string;
  neighborhood: string;
  rating: number;
  quote: string;
  serviceReceived: string;
  avatarUrl?: string;
}

export const TestimonialsCollection = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'rating', 'serviceReceived'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Client Name',
    },
    {
      name: 'neighborhood',
      type: 'text',
      label: 'Location / Neighborhood (e.g. Beverly Hills, CA)',
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'serviceReceived',
      type: 'text',
      label: 'Service Received (e.g. Signature Sun-Kissed Balayage)',
    },
    {
      name: 'avatarUrl',
      type: 'text',
      label: 'Avatar URL or Image Upload',
    },
  ],
};
