<template>
  <v-app>
    <drawer ref="drawer"></drawer>
    <header-component @toggleDrawer="toggleDrawer"></header-component>

    <v-main>
      <div class="aside_left d-none d-md-block">
        <div class="aside_left_inside">
              <div class="aside_menu">
              <v-list flat nav>
                    <NavigationItems></NavigationItems>
                </v-list>
                </div>
         </div>
        </div>
      </div>
      <nuxt class="px-4" />
       <div class="aside_right d-none d-md-block"></div>
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
  async mounted() {
    try {
      // ping heroku to wake it up
      await this.$axios.$get('/veranstaltungs/count')
    } catch {
      /* ignore */
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




.aside_left {
  min-width: 350px;

  width: 30%;
  .aside_left_inside{ 
    float:right;
    border-left:1px solid #ccc;
    width:225px;
    height:100%;
    .aside_menu{
      padding:1em;
    }

  }
}


.aside_right{
    width: 10%;
    border:1px solid green;
}


.v-main__wrap {
  display: flex;
  flex-direction: row;
}


</style>
