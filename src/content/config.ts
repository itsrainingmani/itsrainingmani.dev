import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const blog = defineCollection({
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(50).max(160).optional(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
		publish: z.boolean().default(false),
	}),
});

const project = defineCollection({
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(20).max(160),
		createdYear: z.string(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		repo: z.string().url(),
	}),
});

export const collections = { blog, project };
