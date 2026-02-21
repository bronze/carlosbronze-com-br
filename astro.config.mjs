import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: "Geist",
				cssVariable: "--font-geist",
			},
		],
	},
});
