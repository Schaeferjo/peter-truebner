<template>
  <footer app color="#ccc">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" lg="6">
          <strong>Prof. em. Dr. phil. Peter Trübner</strong><br />
          Alexander Moserstraße 32a<br />
          CH-2503 Biel/ Bienne <br />
          Schweiz
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="6">
          <br />
          mail@petertruebner.ch
          <br />

          0041 (0)32 365 14 22<br />
          Copyright {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
}

@media only screen and (max-width: 960px) {
}
</style>
