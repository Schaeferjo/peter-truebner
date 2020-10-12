<template>
  <div>
    <v-app-bar
      height="120px"
      flat
      color="transparent"
      absolute
      app
      clipped-left
    >
      <div class="aside_left d-none d-md-block" align="right">
        <nuxt-link to="/">
          <v-img
            src="/logo_peter_truebner.svg"
            width="185px"
            max-width="185px"
            height="120px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
            class="d-none d-md-block logo_pt"
          />
        </nuxt-link>
      </div>
      <nuxt-link to="/">
        <v-img
          src="/logo_peter_truebner.svg"
          width="185px"
          max-width="185px"
          height="120px"
          alt="Logo Prof. em. Dr. phil. Peter Trübner"
          class="d-md-none"
        />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-md-none mt-6"
        aria-label="Open Drawer"
        @click.stop="toggleDrawer"
      >
        <v-icon size="35" color="#305596">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <div class="aside_right d-none d-md-block"></div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
  },
}
</script>

<style lang="scss">
.logo_pt {
  margin-right: 150px;
}

.v-toolbar__content {
  padding: 0em !important;
}

@media only screen and (max-width: 959px) {
  .v-toolbar__content {
    padding: 0 1em 0 0.95em !important;
  }
}
</style>
