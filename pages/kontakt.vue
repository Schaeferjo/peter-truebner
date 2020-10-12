<template>
  <v-container>
    <v-row>
      <v-col class="pb-10"
        ><h1 class="pb-3">Kontakt</h1>

        <div id="map"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="pb-12">
        <h3 class="pb-3">Prof. em. Dr. phil. Peter Trübner</h3>

        <p>
          Alexander Moserstraße 32a<br />
          CH-2503 Biel/ Bienne <br />
          Schweiz
        </p>
        <p>
          Telefon: <a href="mail@petertruebner.ch">mail@petertruebner.ch</a>
          <br />
          E-Mail: <a href="tel:+41323651422">0041 (0)32 365 14 22</a>
        </p>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <!-- -->
        <h3 class="pb-3">Kontaktformular</h3>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                xs="12"
                sm="7"
                md="12"
                lg="12"
                xl="12"
                class="pa-0"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="Vor- und Nachname"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                xs="12"
                sm="7"
                md="12"
                lg="12"
                xl="12"
                class="pa-0"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-Mail"
                  required
                ></v-text-field>

                <v-checkbox v-model="agb" :rules="agbRules" required>
                  <template v-slot:label>
                    <div>
                      <div>
                        Ich habe die Informationen zum
                        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link
                        >&nbsp;gelesen und stimme diesem zu.
                      </div>
                    </div>
                  </template>
                </v-checkbox>

                <v-btn
                  class="mr-4 mb-4"
                  depressed
                  :disabled="!valid"
                  :loading="loading"
                  @click="submit"
                  >{{ 'Nachricht senden' }}</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <!--- --->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),

  data() {
    return {
      access_token:
        'pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w',
      map: {},
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/josen/ckg6n0brn0rs919qo99k4rx0x',
        zoom: 9,
        center: [7.2504221, 47.1272345],
        minZoom: 2,
        maxZoom: 20,
      })
      this.map.addControl(new mapboxgl.NavigationControl())

      new mapboxgl.Marker({
        color: '#305596',
      })

        .setLngLat([7.2504221, 47.1272345])
        .addTo(this.map)
    },
  },
  head() {
    return {
      title: ' | Kontakt',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 40vh;
  max-height: 500px;
}
.mapboxgl-popup-content {
  button.mapboxgl-popup-close-button {
    font-size: 24px;
    font-weight: bold;
    color: #2a434c;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: transparent !important;
      border: none !important;
    }
    &:active,
    &:focus {
      background-color: transparent !important;
      border: none !important;
    }
  }
  p {
    font-size: 14px;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    strong {
      font-family: 'Overlock';
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      color: #2a434c;
    }
  }
}
</style>
