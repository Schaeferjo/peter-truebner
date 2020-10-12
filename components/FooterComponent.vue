<template>
  <div>
    <!-- custom footer --->
    <div class="custom_footer d-none d-md-block">
      <div class="aside_left" align="right">
        <div id="foto_pt_align">
          <v-img
            src="/footer_foto.jpg"
            width="150px"
            height="150px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
          />
        </div>
        <div id="kontakt_pt_align">
          <p><strong>Prof. em. Dr. phil. Peter Trübner</strong></p>
          <p>
            E-Mail: <a href="mail@petertruebner.ch">mail@petertruebner.ch</a>
            <br />
            Telefon: <a href="tel:+41323651422">0041 (0)32 365 14 22</a>
          </p>
          <p>
            <nuxt-link to="/impressum">Impressum</nuxt-link> und
            <nuxt-link to="/datenschutz">Datenschutz</nuxt-link><br />Copyright
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
    <!-- end of custom footer -->

    <v-footer padless color="#fff" class="d-md-none">
      <v-container fluid class="pt-0 pb-3">
        <v-row
          justify="center"
          align="center"
          class="footer-component-bottom-row pt-8 pl-12 pb-3 pr-12"
        >
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" align="center">
            <v-img
              src="/footer_foto.jpg"
              width="150px"
              height="150px"
              alt="Logo Prof. em. Dr. phil. Peter Trübner"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <p>
              <strong>Prof. em. Dr. phil. Peter Trübner</strong>
            </p>
            <p>
              Telefon: <a href="mail@petertruebner.ch">mail@petertruebner.ch</a>
              <br />
              E-Mail: <a href="tel:+41323651422">0041 (0)32 365 14 22</a>
            </p>
            <p>
              <nuxt-link to="/impressum">Impressum</nuxt-link><br /><nuxt-link
                to="/datenschutz"
                >Datenschutz</nuxt-link
              ><br />Copyright {{ new Date().getFullYear() }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
/* */

.custom_footer {
  .aside_left {
    #foto_pt_align {
      width: 150px;
      height: 150px;
      margin-right: 150px;
    }
    #kontakt_pt_align {
      width: 250px;
      margin-right: 100px;
      padding: 2em 1em;
      text-align: left;
    }
  }
}

/* */

@media only screen and (max-width: 959px) {
  #footer_main {
    width: 100%;
  }
}
</style>
