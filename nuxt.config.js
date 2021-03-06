const description =
  'Prof. em. Dr. phil Peter Trübner: Psychologische Krisenbetreuung für Individuen. Beratung bei Projektplanung und Konzeptentwicklung für Institutionen.'
const colors = {
  secondary: '#ECE1CB',
  peter_blue: '#305596',
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'fontsource-pt-serif/latin-700-italic.css',
    'fontsource-pt-sans/latin-400.css',
    'fontsource-pt-sans/latin-700.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'mdiSvg',
    },
    theme: {
      themes: {
        light: colors,
      },
    },
  },

  pwa: {
    meta: {
      theme_color: colors.peter_blue,
      lang: 'de',
      description,
    },
  },

  /* sitemap */
  sitemap: {
    hostname: 'https://petertruebner.ch/',
    gzip: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  transpile: ['mapbox-gl-controls/lib/styles'],
}
