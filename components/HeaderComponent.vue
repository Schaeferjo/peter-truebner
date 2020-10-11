<template>
  <div>
    <v-app-bar height="85px" flat color="transparent" absolute app clipped-left>
      <div class="aside_left d-none d-md-block" align="right">
        <v-img
          src="/logo_peter_truebner.svg"
          width="185px"
          max-width="185px"
          height="85px"
          alt="Logo Prof. em. Dr. phil. Peter Trübner"
          class="d-none d-md-block logo_pt"
        />
      </div>
      <v-img
        src="/logo_peter_truebner.svg"
        width="185px"
        max-width="185px"
        height="85px"
        alt="Logo Prof. em. Dr. phil. Peter Trübner"
        class="d-md-none"
      />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open Drawer"
        @click.stop="toggleDrawer"
      >
        <v-icon size="35" color="#000">mdi-menu</v-icon>
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
    padding: 1em !important;
  }
}
</style>
