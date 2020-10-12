<template>
  <v-container>
    <v-row class="pb-xs-6 pb-md-6">
      <v-col
        ><h1 class="pb-3">Kontakt</h1>

        <div id="map"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <p class="px-3"></p>

        <p>
          Alexander Moserstraße 32a<br />
          CH-2503 Biel/ Bienne <br />
          Schweiz
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
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
        style: 'mapbox://styles/josen/ckd5rgq6z0vwx1ir38367xhb1',
        zoom: 11.5,
        center: [7.2504221, 47.1272345],
        minZoom: 2,
        maxZoom: 20,
      })
      this.map.addControl(new mapboxgl.NavigationControl())

      new mapboxgl.Marker({
        color: '#ccc',
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
  max-height: 450px;
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
