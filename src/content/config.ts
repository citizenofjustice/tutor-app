import { defineCollection, z } from "astro:content";

const methodSchema = z.object({
  icon: z.string(),
  alt: z.string(),
  title: z.string(),
  description: z.string(),
});

const homepageCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      methods: z.array(methodSchema),
    }),
});

const aboutCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      photo: image(),
      name: z.string(),
      education: z.string(),
      email: z.string().email(),
      phone: z.string(),
    }),
});

export const collections = {
  homepage: homepageCollection,
  about: aboutCollection,
};
