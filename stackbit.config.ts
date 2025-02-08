import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['public/content'],
      models: [
        {
          name: 'Home',
          type: 'page',
          urlPath: '/',
          filePath: 'public/content/home.json',
          fields: [
            { name: 'heroTitle', type: 'string', required: true },
            { name: 'heroDescription', type: 'text', required: true },
            {
              name: 'services',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', required: true },
                  { name: 'description', type: 'text', required: true },
                  {
                    name: 'icon',
                    type: 'enum',
                    options: ['Target', 'Brain', 'Trophy'],
                    required: true
                  }
                ]
              }
            },
            {
              name: 'testimonials',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'name', type: 'string', required: true },
                  { name: 'location', type: 'string', required: true },
                  { name: 'age', type: 'string', required: true },
                  { name: 'sport', type: 'string' },
                  { name: 'profession', type: 'string' },
                  {
                    name: 'quote',
                    type: 'list',
                    items: { type: 'text' },
                    required: true
                  }
                ]
              }
            }
          ]
        }
      ]
    })
  ],
  // Define the site map to help editors navigate
  siteMap: ({ documents }) => {
    return documents
      .filter((doc) => doc.modelName === 'Home')
      .map((document) => ({
        stableId: document.id,
        urlPath: '/',
        document,
        isHomePage: true
      }));
  }
});
