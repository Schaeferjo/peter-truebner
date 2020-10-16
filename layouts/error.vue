<template>
  <v-container>
    <v-row>
      <v-col class="pb-10"
        ><h1>Uuuuuuuups ...</h1>
        <h2 v-if="error.statusCode === 404">{{ pageNotFound }}</h2>
        <h2 v-else>{{ otherError }}</h2>

        <p>
          Da ist was schiefgelaufen.<br />
          Möchten Sie zurück zur
          <nuxt-link to="/">Startseite</nuxt-link>?
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Fehler 404 – Seite nicht gefunden',
      otherError: 'Ein Fehler ist aufgetreten',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
