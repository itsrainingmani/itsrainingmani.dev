/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
		extend: {
			fontFamily: {
				mono: ["BerkeleyMonoVariable", ...defaultTheme.fontFamily.mono],
				// sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		// typography enables styling for HTML rendered from Markdown
		require("@tailwindcss/typography"),
	],
};
