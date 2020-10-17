<template>
  <v-container class="cv-item-wrap">
    <v-row class="cv-item">
      <v-col class="cv-item-date" cols="12" xs="12" sm="4">
        {{ date }}
      </v-col>
      <v-col class="cv-item-content" cols="12" xs="12" sm="8">
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

<style lang="scss">
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
  font-family: 'PT Serif', sans-serif;
  font-style: italic;
  font-weight: 700;
  padding-bottom: 0.25em;
  text-align: right;
  font-weight: 700; /* bold */
  font-size: 1.1em;
  line-height: 1.4em;
  padding: 0 2em;
  letter-spacing: 0;
}

.cv-item-content {
  text-align: left;
  padding: 5px 2em 3em 2em;
  border-left: 1px solid #ccc;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-left: calc(-2em - 5px);
    margin-top: 10px;
  }
}

@media only screen and (max-width: 599px) {
  .cv-item-date {
    border-right: 1px solid #ccc !important;
    &:before {
      content: '';
      display: block;
      position: absolute;
      right: 1.6em;
      width: 9px;
      height: 9px;
      border-radius: 100%;
      border: 1px solid #ccc;
      background-color: #fff;
      margin-left: calc(-2em - 5px);
      margin-top: 8px;
    }
  }

  .cv-item-content {
    border-left: none;
    border-right: 1px solid #ccc;
    padding: 5px 2em 3em 0em;

    &:before {
      display: none;
    }
  }
}
</style>
