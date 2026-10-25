import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    start: z.number(),
    end: z.number().nullable().default(null),
    era: z.string(),
    topics: z.array(z.string()),
    status: z.enum(['published', 'ongoing', 'legacy']).default('published'),
    featured: z.boolean().default(true),
    order: z.number().default(100),
    hero: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      fit: z.enum(['cover', 'contain']).default('cover'),
      position: z.string().optional(),
    }),
    thumb: z.string().optional(), // card image, when the hero crops badly at 16:9
    summary: z.string(),
    role: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    figures: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
      .default([]),
    demo: z.string().optional(),
  }),
});

export const collections = { projects };
