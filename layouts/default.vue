<template>
  <v-app>
    <div id="deko_square"></div>
    <drawer ref="drawer"></drawer>
    <header-component @toggleDrawer="toggleDrawer"></header-component>
    <v-main>
      <div class="aside_left d-none d-md-block">
        <div class="aside_left_inside">
          <div class="aside_menu_wrap">
            <v-list id="nav_default" flat nav class="px-0">
              <NavigationItems></NavigationItems>
            </v-list>
          </div>
        </div>
      </div>
      <div class="custom_main">
        <nuxt />
      </div>
      <div class="aside_right d-none d-md-block pr-12"></div>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import NavigationItems from '~/components/NavigationItems.vue'
import Drawer from '~/components/Drawer.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import HeaderComponent from '~/components/HeaderComponent.vue'

export default {
  components: {
    NavigationItems,
    Drawer,
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      title: 'Prof. em. Dr. phil. Peter Trübner',
    }
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggleDrawer()
    },
  },
}
</script>

<style lang="scss">
#__layout {
  overflow-x: hidden;
}

#deko_square {
  position: absolute;
  top: 200px;
  right: -20px;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

.aside_left {
  min-width: 350px;
  width: 30%;
  .aside_left_inside {
    float: right;
    border-left: 1px solid #ccc;
    width: 205px;
    height: 100%;
    display: flex;
    .aside_menu_wrap {
      padding: 95px 0em 3em 0em;
      align-self: start;
      //
    }
  }
}

.menu_content a {
  // global styling
  font-family: 'PT Serif', sans-serif;
  font-style: italic;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 0.01em;
}

#nav_default {
  // #nav_default is shown, instead of #nav_mobile
  .menu_content {
    // > .menu_content : only custom styling for default nav
    a {
      color: #000;
      padding: 0 1em;
      &:before {
        content: '';
        position: absolute;
        display: block;
        top: 20px;
        margin-left: -1px;
        width: 0px;
        height: 0px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
        border: 1px solid #fff !important;
        border-top: 1px solid #ccc !important;
        border-right: 1px solid #ccc !important;
        border-radius: 0;
        background-color: #fff;
      }
      &:hover {
        color: #ccc !important;
        &:before {
          opacity: 1;
          top: 12px;
          margin-left: -10px;
          border: 1px solid #fff !important;
          border-top: 1px solid #ccc !important;
          border-right: 1px solid #ccc !important;
          width: 20px;
          height: 20px;
        }
      }
      &.v-list-item--active {
        color: #305596;
        &:before {
          opacity: 1;
          top: 12px;
          margin-left: -10px;
          border: 1px solid #fff !important;
          border-top: 1px solid #ccc !important;
          border-right: 1px solid #ccc !important;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.aside_right {
  width: 10%;
}

.v-main__wrap {
  display: flex;
  flex-direction: row;
}

.custom_main {
  width: 60% !important;
  padding: 20px 5em 3em 5em;
}

.v-divider {
  margin-top: 3em;
  padding-bottom: 3em;
}

@media only screen and (max-width: 1263px) {
  .custom_main {
    padding: 20px 3em 3em 3em !important;
  }
}

@media only screen and (max-width: 959px) {
  .custom_main {
    width: 100% !important;
    padding: 20px 1em 3em 1em !important;
  }
}

@media only screen and (max-width: 599px) {
  #deko_square {
    top: 185px;
  }
}
</style>
