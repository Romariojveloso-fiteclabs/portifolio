import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Use Markdown content model
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(), // Saved as YYYY-MM-DD
    category: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
