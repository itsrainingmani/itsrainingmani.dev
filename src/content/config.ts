import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	// const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(array);
	return Array.from(distinctItems);
}

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(100),
		description: z.string().min(50).max(160).optional(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
		publish: z.boolean().default(false),
	}),
});

const clojurefam = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(100),
		description: z.string().min(50).max(160).optional(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
		publish: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(20).max(160).optional(),
		createdYear: z.coerce.number(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		repo: z.string().url(),
		variant: z.string(),
	}),
});

export const collections = { blog: blog, clojurefam: clojurefam, projects: projects };
