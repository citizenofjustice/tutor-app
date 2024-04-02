import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
  schema: z.object({
    photo: z.string(),
    name: z.string(),
    education: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
});

export const collections = {
  about: aboutCollection,
};
