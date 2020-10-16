<template>
  <v-navigation-drawer v-model="drawer" temporary app color="peter_blue">
    <template v-slot:img> </template>

    <v-toolbar flat color="transparent">
      <v-spacer></v-spacer>
      <v-btn icon class="ma-0" @click.stop="toggleDrawer">
        <v-icon color="#fff" size="40">{{ mdiClose }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list id="nav_mobile" flat nav class="px-0">
      <NavigationItems></NavigationItems>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js'

export default {
  data() {
    return {
      mdiClose,
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>

<style lang="scss">
@media only screen and (min-width: 960px) {
  .v-navigation-drawer,
  .v-overlay__scrim {
    display: none !important;
  }
}

@media only screen and (max-width: 959px) {
  .v-navigation-drawer {
    min-width: 80% !important;
    max-width: 600px !important;

    .v-navigation-drawer__content {
      header.v-toolbar {
        .v-toolbar__content {
          // row with close icon
          padding: 2.5em 1em !important;
        }
      }
    }
    // custom mobile styling
    #nav_mobile {
      // #nav_mobile is shown, instead of #nav_default
      .menu_content {
        // > .menu_content : only custom styling for mobile nav
        a {
          color: #fff !important;
          padding: 0 0 0 15%;
          &.v-list-item--active {
            color: #000 !important;
            &:before {
              content: '';
              position: relative;
              display: block;
              width: 12px;
              height: 12px;
              top: 0px;
              left: -25px;
              margin-right: -10px;
              border: 1px solid #305596 !important;
              border-top: 1px solid #000 !important;
              border-right: 1px solid #000 !important;
              border-radius: 0;
              background-color: #305596;
              opacity: 1;
              -webkit-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
}
</style>
