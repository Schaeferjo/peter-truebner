<template>
  <footer app>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" lg="3"
          >Prof. em. Dr. phil. Peter Trübner</v-col
        >
        <v-col cols="12" xs="12" sm="6" lg="3">
          Alexander Moserstraße 32a
          <br />CH-2503 Biel/ Bienne <br />Schweiz
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          mail@petertruebner.ch
          <br />123456789
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3"
          >Copyright {{ new Date().getFullYear() }}</v-col
        >
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>

>
