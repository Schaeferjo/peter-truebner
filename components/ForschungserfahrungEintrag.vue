<template>
  <v-row class="pb-10 align-baseline">
    <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="4" class="pb-0">
      <h4 class="text-right">{{ date }}</h4>
      <p class="overline text-right ma-0">
        {{ dateSubheadline }}
      </p>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7" offset-xl="1">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    dateSubheadline: {
      type: String,
      required: true,
    },
  },
}
</script>
