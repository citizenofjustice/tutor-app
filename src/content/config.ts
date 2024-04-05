import { defineCollection, z } from "astro:content";

export const methodSchema = z.object({
  icon: z.string(),
  alt: z.string(),
  color: z.string(),
  title: z.string(),
  description: z.string(),
});

const reviewsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      reviews: z.array(
        z.object({
          author: z.string(),
          photo: image(),
          discipline: z.string(),
          text: z.string(),
        })
      ),
    }),
});

const homepageCollection = defineCollection({
  schema: z.object({
    greet: z.object({
      title: z.string(),
    }),
    methods: z.array(methodSchema),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    education: z.string(),
    experince: z.string(),
    email: z.string().email(),
    phone: z.string(),
    aboutMe: z.array(z.string()),
  }),
});

const pricesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    disciplines: z.array(
      z.object({
        label: z.string(),
        price: z.string(),
      })
    ),
  }),
});

export const collections = {
  index: homepageCollection,
  about: aboutCollection,
  reviews: reviewsCollection,
  prices: pricesCollection,
};
