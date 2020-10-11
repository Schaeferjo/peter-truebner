<template>
  <div>
    <div class="custom_footer_wrapper d-none d-md-block">
      <!-- custom footer --->
      <div id="custom_footer" class="pb-12">
        <div class="aside_left" align="right">
          <div class="foto_pt">
            <v-img
              src="/footer_foto.jpg"
              width="150px"
              height="150px"
              alt="Logo Prof. em. Dr. phil. Peter Trübner"
            />
          </div>
        </div>
        <div class="kontakt_pt pa-6">
          <p>
            <strong>Prof. em. Dr. phil. Peter Trübner</strong><br />
            Alexander Moserstraße 32a<br />
            CH-2503 Biel/ Bienne <br />
            Schweiz
          </p>
        </div>
        <div class="kontakt_pt pa-6">
          <p>
            Telefon: <a href="mail@petertruebner.ch">mail@petertruebner.ch</a>
            <br />
            E-Mail: <a href="tel:+41323651422">0041 (0)32 365 14 22</a>
          </p>
          <p>Copyright {{ new Date().getFullYear() }}</p>
        </div>
      </div>
      <!-- end of custom footer -->
    </div>

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
              <strong>Prof. em. Dr. phil. Peter Trübner</strong><br />
              Alexander Moserstraße 32a<br />
              CH-2503 Biel/ Bienne <br />
              Schweiz
            </p>
            <p>
              Telefon: <a href="mail@petertruebner.ch">mail@petertruebner.ch</a>
              <br />
              E-Mail: <a href="tel:+41323651422">0041 (0)32 365 14 22</a>
            </p>
            <p>Copyright {{ new Date().getFullYear() }}</p>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3" xl="2"> </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
/* */
#custom_footer {
  display: flex;
  flex-direction: row;
}
.foto_pt {
  width: 150px;
  height: 150px;
  margin-right: 150px;
}

.kontakt_pt {
  width: 30%;
  max-width: 300px;
}

/* */

@media only screen and (max-width: 959px) {
  #footer_main {
    width: 100%;
  }
}
</style>
