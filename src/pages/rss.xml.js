import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/data/constants";

export async function GET(context) {
	const posts = await getCollection("blog", ({ data }) => {
		return import.meta.env.PROD ? data.publish === true : true;
	});
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})),
	});
}
