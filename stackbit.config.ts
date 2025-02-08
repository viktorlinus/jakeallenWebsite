import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'git',
      type: 'git',
      models: ['Home']
    }
  ],
  models: {
    Home: {
      type: 'page',
      urlPath: '/',
      file: 'public/content/home.json',
      fields: [
        { type: 'string', name: 'heroTitle', label: 'Hero Title' },
        { type: 'text', name: 'heroDescription', label: 'Hero Description' },
        {
          type: 'list',
          name: 'services',
          items: {
            type: 'object',
            fields: [
              { type: 'string', name: 'title' },
              { type: 'text', name: 'description' },
              { type: 'string', name: 'icon' }
            ]
          }
        },
        {
          type: 'list',
          name: 'testimonials',
          items: {
            type: 'object',
            fields: [
              { type: 'string', name: 'name' },
              { type: 'string', name: 'location' },
              { type: 'string', name: 'age' },
              { type: 'string', name: 'sport', required: false },
              { type: 'string', name: 'profession', required: false },
              { type: 'list', name: 'quote', items: { type: 'text' } }
            ]
          }
        }
      ]
    }
  }
});
