import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
	site: "https://itsrainingmani.dev",
	image: {
		service: squooshImageService(),
	},
	markdown: {
		rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
			behavior: "prepend", content: { type: 'text', value: '# ' }, headingProperties: { className: ['anchor'] }, properties: {
				className: ['anchor-link'],
			},
		}]],
	},
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "github-dark-dimmed", wrap: false },
			remarkPlugins: [[remarkToc, { headings: "contents" }]],
			gfm: true,
		}),
		sitemap(),
		tailwind(),
	],
});
