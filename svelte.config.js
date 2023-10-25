import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: 'build',
			envPrefix: ''
		})
	},

	vitePlugin: {
		experimental: {
			inspector: true
		}
	}
};

export default config;
