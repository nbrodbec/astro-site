import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
      tags: z.array(z.string()),
			path: z.string()
		}),
});

export const collections = { blog };
