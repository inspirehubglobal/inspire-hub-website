import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    titleScript: z.string().optional(),
    category: z.string().default("Transición"),
    readTime: z.string().default("6 min de lectura"),
    lead: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

// Permissive schema for "pages" — each page file has its own fields.
// Validation happens in the .astro page that consumes the entry.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.record(z.string(), z.any())
});

export const collections = { blog, pages };
