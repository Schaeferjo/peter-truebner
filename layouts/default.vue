<template>
  <v-app dark>
    <!-- HEADER -->
    <Header :drawer="drawer" />
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <!-- MAIN -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- FOOTER -->
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      drawer: false,
      title: 'Peter Trübner',
    }
  },
}
</script>
