<template>
  <v-container class="cv-item-wrap">
    <v-row class="cv-item">
      <v-col class="cv-item-date" cols="12" xs="12" sm="3">
        {{ date }}
      </v-col>
      <v-col class="cv-item-content" cols="12" xs="12" sm="9">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.cv-item-wrap {
  padding: 0;
}

.cv-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  padding: 0;
}

.cv-item-date {
  text-align: right;
  font-weight: 700; /* bold */
  font-size: 1.2em;
  padding: 0 2em;
  letter-spacing: 0;
}

.cv-item-content {
  text-align: left;
  padding: 1em 1em 4.5em 2em;
  border-left: 1px solid #ccc;
}
</style>
