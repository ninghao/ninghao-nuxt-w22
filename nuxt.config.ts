// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: ['@nuxt/image-edge'],

  image: {
    domains: ['resources.ninghao.net'],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://nid-node.ninghao.co',
    },
  },
});
