import { ObjectModel, Field } from '@stackbit/types';

export const Home: ObjectModel = {
  name: 'Home',
  type: 'data',
  label: 'Home',
  filePath: 'public/content/home.json',
  fields: [
    { type: 'string', name: 'heroTitle', label: 'Hero Title', required: true },
    { type: 'text', name: 'heroDescription', label: 'Hero Description', required: true },
    {
      type: 'list',
      name: 'services',
      label: 'Services',
      items: {
        type: 'object',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'text', name: 'description', label: 'Description', required: true },
          {
            type: 'enum',
            name: 'icon',
            label: 'Icon',
            options: [
              { label: 'Target', value: 'Target' },
              { label: 'Brain', value: 'Brain' },
              { label: 'Trophy', value: 'Trophy' }
            ],
            required: true
          }
        ]
      }
    },
    {
      type: 'list',
      name: 'testimonials',
      label: 'Testimonials',
      items: {
        type: 'object',
        fields: [
          { type: 'string', name: 'name', label: 'Name', required: true },
          { type: 'string', name: 'location', label: 'Location', required: true },
          { type: 'string', name: 'age', label: 'Age', required: true },
          { type: 'string', name: 'sport', label: 'Sport', required: false },
          { type: 'string', name: 'profession', label: 'Profession', required: false },
          {
            type: 'list',
            name: 'quote',
            label: 'Quote',
            items: { type: 'text' },
            required: true
          }
        ]
      }
    }
  ]
};
