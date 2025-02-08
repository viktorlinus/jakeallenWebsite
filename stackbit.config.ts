import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'content',
      type: 'files',
      location: 'public/content',
    },
  ],
  modelExtensions: [
    {
      name: 'home',
      type: 'page',
      urlPath: '/',
      file: 'public/content/home.json'
    }
  ]
});
