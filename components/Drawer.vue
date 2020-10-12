<template>
  <v-navigation-drawer v-model="drawer" temporary app color="#305596">
    <template v-slot:img> </template>
    <v-card flat dark color="transparent" class="py-4">
      <v-toolbar flat color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleDrawer">
          <v-icon size="35">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list flat nav class="px-0 mobile_nav">
        <navigation-items></navigation-items>
      </v-list>
    </v-card>
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
  min-width: 38% !important;
  .v-navigation-drawer__content {
  }
  .v-toolbar__content {
    padding: 7px 30px !important;
    button {
      background-color: rgba(0, 0, 0, 0) !important;
      &:before,
      &:after {
        background-color: rgba(0, 0, 0, 0) !important;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0) !important;
        &:before,
        &:after {
          background-color: rgba(0, 0, 0, 0) !important;
        }
      }
    }
  }
  .drawer-background-image {
    opacity: 0.02;
    left: -20%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  // drawer active default
  a.v-list-item--active {
    color: #fff !important;
  }
  // drawer level 1
  .v-list-item,
  .v-list-group .v-list-group__header {
    font-family: 'PT Serif', sans-serif;
    font-style: italic;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.01em;

    padding: 7px 30px !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
    &:before {
      display: none !important;
    }
  }
  .v-list-group {
    .v-list-group__header {
      .v-list-item {
        padding: 0 !important;
      }
      .v-list-group__header__append-icon {
        color: #fff !important;
      }
    }
    // level 2
    .v-list-group__items {
      border-top: 1px dashed #fff;
      border-bottom: 1px dashed #fff;
      a {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        text-transform: none;
        letter-spacing: 0;
        &.v-list-item--active {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
