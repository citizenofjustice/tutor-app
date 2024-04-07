import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");
import react from "@astrojs/react";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {},
      apiOptions: {
        region: "eu",
      },
    }),
    db(),
  ],
});
