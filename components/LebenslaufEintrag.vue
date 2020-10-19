<template>
  <v-row class="pb-6 align-baseline">
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="pb-0">
      <h4 class="text-right">{{ date }}</h4>
    </v-col>
    <v-col
      cols="12"
      xs="0"
      sm="0"
      md="0"
      lg="1"
      xl="1"
      class="text-center d-none d-lg-block"
    >
      <v-icon color="#ccc" size="15">{{ mdiCircleOutline }}</v-icon>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCircleOutline } from '@mdi/js'

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mdiCircleOutline,
    }
  },
}
</script>
