<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          title: 'Welcome',
          to: '/',
        },
        {
          title: 'Publikationen',
          to: '/publikationen',
        },
        {
          title: 'Lebenslauf',
          to: '/lebenslauf',
        },
        {
          title: 'Kontakt',
          to: '/kontakt',
        },
      ],
    }
  },
}
</script>
