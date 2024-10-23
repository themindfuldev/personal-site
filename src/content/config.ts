import { z, defineCollection } from "astro:content";
const workSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
      message: 'tags must be unique',
  }).optional(),
});

export type WorkSchema = z.infer<typeof workSchema>;

const worksCollection = defineCollection({ schema: workSchema });

export const collections = {
  'works': worksCollection,
}