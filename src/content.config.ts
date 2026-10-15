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

// Version malgache d'une leçon : même nom de fichier que dans src/content/cours.
// Une leçon sans traduction relue reste affichée en français en mode malagasy,
// avec un avertissement, plutôt que d'afficher une traduction non vérifiée.
const coursMg = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cours-mg' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = { cours, coursMg };
