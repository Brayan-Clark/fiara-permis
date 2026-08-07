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
    // Catégories de permis concernées. Absent = module commun à toutes les
    // catégories, ce qui est le cas de la grande majorité du cours.
    categories: z.array(z.enum(['A', "A'", 'B', 'C', 'D', 'E'])).optional(),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

export const collections = { cours };
