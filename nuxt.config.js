export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Huntsman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  chakra: {
    icons: {
      extend: {
        huntsman: {
          path: `<g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M50 52H20c-4.95 0-9-4.05-9-9s4.05-9 9-9h30c4.95 0 9 4.05 9 9s-4.05 9-9 9h0z"/><path d="M50 34c2.821 0 5.347 1.318 7 3.366V1l-6.028 4.822A10.588 10.588 0 0047 14.087V34h3z" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 43c0-4.95 4.05-9 9-9h-5c-4.95 0-9 4.05-9 9s4.05 9 9 9h5c-4.95 0-9-4.05-9-9h0z"/><path d="M11 43c0-4.95 4.05-9 9-9H10c-4.95 0-9 4.05-9 9s4.05 9 9 9h10c-4.95 0-9-4.05-9-9h0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 16l2 5v13h4V21l2-5-2-6H9zM20 34h10.153l6.164-9.584a10.58 10.58 0 001.131-9.1L34.987 8 18.135 34.198A8.968 8.968 0 0120 34h0zM35 39v8M39 43h-8M23 43a3 3 0 11-6 0 3 3 0 016 0h0zM53 43a3 3 0 11-6 0 3 3 0 016 0h0zM52 14v4M33 20l-2 3"/></g>`,
          viewBox: `0 0 60 60`,
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
