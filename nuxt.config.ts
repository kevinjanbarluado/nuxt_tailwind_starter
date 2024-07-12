// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // styleResources: {
  //   // your settings here

  //   scss: [
  //     "~/assets/scss/foundation/_variables.scss",
  //     "~/assets/scss/foundation/_mixin.scss",
  //   ],
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/foundation/_mixin.scss";
          @import "@/assets/scss/foundation/_variables.scss";
        `,
        },
      },
    },
  },

  compatibilityDate: "2024-07-12",
});