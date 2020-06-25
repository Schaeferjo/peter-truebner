<template>
  <v-footer app>
    <ul>
      <li>Copyright {{ new Date().getFullYear() }}</li>
      <li>Prof. em. Dr. Peter Trübner</li>
      <li>Alexander Moserstraße 32a</li>
      <li>CH-2503 Biel/Bienne</li>
      <li>Schweiz</li>
      <li>mail@petertruebner.ch</li>
      <li>01234. 56789</li>
    </ul>
  </v-footer>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  li {
    display: inline-block;
  }
}
</style>
