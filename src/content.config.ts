import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './blogs/', pattern: '**/BLOG.md' }),
  schema: z.object({
    tech: z.boolean(),
    draft: z.boolean(),
    slug: z.string(),
  }),
});

export const collections = { blog };
