import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './blogs/', pattern: '**/BLOG.{md,mdx}' }),
  schema: z.object({
    tech: z.boolean(),
    draft: z.boolean(),
    slug: z.string(),
    title: z.string(),
    // This would only work if dates are in ISO format
    // in blog markdown files
    publishedOn: z.coerce.date(),
    lastEditedOn: z.coerce.date(),
  }),
});

export const collections = { blog };
