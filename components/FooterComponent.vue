<template>
  <div>
    <div class="custom_footer_wrap d-none d-md-block">
      <div class="custom_footer_first_row">
        <div class="aside_left" align="right">
          <v-img
            src="/footer_foto.jpg"
            width="150px"
            height="150px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
            class="foto_footer"
          />
        </div>
      </div>
      <div class="custom_footer_second_row">
        <div class="aside_left" align="right">
          <v-img
            src="/logo_peter_truebner_inverted.svg"
            width="165px"
            max-width="165px"
            height="85px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
            class="logo_pt"
          />
        </div>
        <div>
          <p class="ma-0">
            <span class="overline font-weight-bold">Telefon:</span>

            <a href="tel:+41323651422" class="text-decoration-none"
              >0041 (0)32 365 14 22</a
            >
            <br />
            <span class="overline font-weight-bold">E-Mail:</span>
            <a href="mailto:mail@petertruebner.ch" class="text-decoration-none"
              >mail@petertruebner.ch</a
            >
          </p>
          <p class="pt-1 ma-0">
            <nuxt-link to="/impressum" class="text-decoration-none"
              >Impressum</nuxt-link
            >
            |
            <nuxt-link to="/datenschutz" class="text-decoration-none"
              >Datenschutz</nuxt-link
            >
            | Copyright
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
    <!-- end custom footer -->

    <v-footer padless color="#ccc" class="py-5 d-md-none">
      <v-container fluid class="pt-0 pb-0">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="5" justify="center" align="center">
            <v-img
              src="/logo_peter_truebner_inverted.svg"
              width="180px"
              max-width="180px"
              height="85px"
              alt="Logo Prof. em. Dr. phil. Peter Trübner"
            />
          </v-col>
          <v-col cols="12" sm="7" class="text-center text-sm-left">
            <p class="ma-0">
              <span class="overline font-weight-bold">Telefon:</span>

              <a href="tel:+41323651422" class="text-decoration-none"
                >0041 (0)32 365 14 22</a
              >
              <br />
              <span class="overline font-weight-bold">E-Mail:</span>
              <a
                href="mailto:mail@petertruebner.ch"
                class="text-decoration-none"
                >mail@petertruebner.ch</a
              >
            </p>
            <p class="pt-1 ma-0">
              <nuxt-link to="/impressum" class="text-decoration-none"
                >Impressum</nuxt-link
              >
              |
              <nuxt-link to="/datenschutz" class="text-decoration-none"
                >Datenschutz</nuxt-link
              >
              | Copyright
              {{ new Date().getFullYear() }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #000 !important;
}
.custom_footer_wrap {
  .custom_footer_first_row {
    display: flex;
    flex-direction: row;
    padding: 0 0 3em 0;
    .foto_footer {
      margin-right: 130px;
    }
  }
  .custom_footer_second_row {
    background-color: #ccc;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
  }
}
</style>
