// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['@heroicons/vue']
  },
  runtimeConfig: {
		public: {
			API_ENDPOINT: process.env.API_ENDPOINT,
      BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT
		}
	}
})
