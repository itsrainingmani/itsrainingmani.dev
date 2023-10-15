import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://itsrainingmani.dev",
  image: {
    service: squooshImageService(),
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula-soft", wrap: true },
      remarkPlugins: [remarkToc],
      gfm: true,
    }),
    sitemap(),
    tailwind(),
  ],
});
