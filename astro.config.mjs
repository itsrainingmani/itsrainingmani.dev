import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://itsrainingmani.dev",
  image: {
    service: squooshImageService(),
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
