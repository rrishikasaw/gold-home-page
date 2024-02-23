// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['nuxt-icon', '@pinia/nuxt'],
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
	runtimeConfig: {
		public: {
			backend: process.env.BACKEND,
		},
	},
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					href: '/icon.svg',
				},
				{
					rel: 'stylesheet',
					href: '/helpers.css',
				},
				{
					rel: 'stylesheet',
					href: '/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: '/style.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css',
				},
			],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js',
					defer: true
				},
				{
					src: 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js',
					defer: true
				},
				{
					src: 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js',
					defer: true
				},
			]
		},
	},
	experimental: {
		renderJsonPayloads: false,
	},
});
