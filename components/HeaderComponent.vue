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
      <div class="aside_left d-none d-md-block logo_wrap" align="right">
        <nuxt-link to="/">
          <v-img
            src="/logo_peter_truebner.svg"
            width="165px"
            max-width="165px"
            height="85px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
            class="d-none d-md-block logo_pt"
          />
        </nuxt-link>
      </div>
      <nuxt-link to="/">
        <v-img
          src="/logo_peter_truebner.svg"
          width="165px"
          max-width="165px"
          height="85px"
          alt="Logo Prof. em. Dr. phil. Peter Trübner"
          class="d-md-none"
        />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open Drawer"
        @click.stop="toggleDrawer"
      >
        <v-icon color="peter_blue" size="40">{{ mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>

      <div class="aside_right d-none d-md-block"></div>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
  data() {
    return { mdiMenu }
  },
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
  },
}
</script>

<style lang="scss">
.logo_wrap {
  align-self: flex-end;
}

.logo_pt {
  margin-right: 130px;
}

.v-toolbar__content {
  padding: 0em !important;
}

@media only screen and (max-width: 959px) {
  .v-toolbar__content {
    padding: 0 2.2em !important;
  }
}

@media only screen and (max-width: 599px) {
  .v-toolbar__content {
    padding: 0 1em !important;
  }
}
</style>
