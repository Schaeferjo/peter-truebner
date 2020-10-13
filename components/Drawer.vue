<template>
  <v-navigation-drawer v-model="drawer" temporary app color="peter_blue">
    <template v-slot:img> </template>

    <v-toolbar flat color="transparent">
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="toggleDrawer">
        <v-icon size="35">mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list id="nav_mobile" flat nav class="px-0">
      <NavigationItems></NavigationItems>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
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
.v-navigation-drawer {
  min-width: 50% !important;

  #nav_mobile {
    // #nav_mobile is shown, instead of #nav_default
    .menu_content {
      // > .menu_content : only custom styling for mobile nav
      a {
        color: #fff !important;
        padding: 0 1em;
        &.v-list-item--active {
          color: #000 !important;
          &:before {
            content: '';
            position: absolute;
            display: block;
            width: 12px;
            height: 12px;
            top: 18px;
            margin-left: 3px;
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
</style>
