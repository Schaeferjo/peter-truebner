<template>
  <div>
    <div class="custom_footer_wrap d-none d-md-block">
      <div class="custom_footer">
        <div class="aside_left" align="right">
          <v-img
            src="/footer_foto.jpg"
            width="150px"
            height="150px"
            alt="Logo Prof. em. Dr. phil. Peter Trübner"
            class="foto_footer"
          />
        </div>
        <div class="custom_footer_center"></div>
      </div>
    </div>
    <!-- end custom footer -->

    <v-footer padless color="#fff" class="d-md-none">
      <v-container fluid class="pt-0 pb-3">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6" align="center">
            <v-img
              src="/footer_foto.jpg"
              width="150px"
              height="150px"
              alt="Logo Prof. em. Dr. phil. Peter Trübner"
            />
          </v-col>

          <v-col cols="12" sm="6">
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

    <div id="footer_last_row">
      <div class="aside_left" align="right">
        <v-img
          src="/logo_peter_truebner_inverted.svg"
          width="185px"
          max-width="185px"
          height="85px"
          alt="Logo Prof. em. Dr. phil. Peter Trübner"
          class="logo_pt"
        />
      </div>
      <div class="custom_footer_center">
        <v-container>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
              dfgnldkfng
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- --->
  </div>
</template>

<style lang="scss" scoped>
.custom_footer {
  display: flex;
  flex-direction: row;
  padding: 0 0 3em 0;
  .foto_footer {
    margin-right: 150px;
  }
  .custom_footer_center {
    width: 70%;
    align-self: center;
    padding-left: 3em;
  }
}

#footer_last_row {
  background-color: #ccc;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 959px) {
  #footer_main {
    width: 100%;
  }
}
</style>
