const colors = {
  primary: '#000000',
  error: '#E0124D',
  secondary: '#ECE1CB',
  ichen_beige: '#ece1cb',
  ichen_yellow: '#e5bc80',
  ichen_green: '#709726',
  ichen_blue: '#2a434c',
  ichen_red: '#e0124d',
  ichen_brown: '#48413d',
  $peter_blue: '#305596',
}

const description = 'Prof. em. Dr. phil. Peter Trübner'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */

  head: {
    titleTemplate: 'Prof. em. Dr. phil. Peter Trübner %s',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    theme: {
      themes: {
        dark: {
          accent: colors.ichen_green,
          success: colors.ichen_green,
          warning: colors.error,
          info: colors.ichen_blue,
          ...colors,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },
  transpile: ['mapbox-gl-controls/lib/styles'],
}
