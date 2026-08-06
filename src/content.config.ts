import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cours' }),
  schema: z.object({
    title: z.string(),
    pk: z.number(),
    summary: z.string(),
    accent: z.enum(['laterite', 'ravinala', 'signal', 'sun']),
    order: z.number(),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

export const collections = { cours };
