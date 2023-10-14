/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	corePlugins: {
		// disabling some core plugins that are included in the css even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
	},
	theme: {
		extend: {},
	},
	plugins: [
		// typography enables styling for HTML rendered from Markdown
		require("@tailwindcss/typography"),
	],
};
