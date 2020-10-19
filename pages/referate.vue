<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h1 class="pb-3">Einzelne Referate</h1>

        <h2 class="text-right py-6">1. Audio</h2>

        <h4>Gesprächsstoff – Die Konsumfalle</h4>
        <p class="overline">Radiointerview</p>
        <vuetify-audio
          :file="file"
          color="peter_blue"
          downloadable
          flat
        ></vuetify-audio>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h2 class="text-right">2. Referate als PDF-Dateien</h2>
        <p class="text-right pb-6">
          (Zum Anzeigen wird der kostenlose
          <a
            href="https://acrobat.adobe.com/de/de/acrobat/pdf-reader.html"
            target="_blank"
            >Adobe Acrobat Reader</a
          >
          benötigt)
        </p>
      </v-col>
      <v-col
        cols="12"
        xs="6"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="text-center pb-12"
      >
        <a href="/Entwicklungsaufgaben-im-Jugendalter.pdf" target="_blank">
          <v-icon color="peter_blue" size="40" class="pb-6">{{
            mdiFileDownload
          }}</v-icon>
          <br />
          Entwicklungsaufgaben im Jugendalter
        </a>
      </v-col>
      <v-col
        cols="12"
        xs="6"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="text-center pb-12"
      >
        <a href="/Konsumterror.pdf" target="_blank">
          <v-icon color="peter_blue" size="40" class="pb-6">{{
            mdiFileDownload
          }}</v-icon>
          <br />
          Konsumterror
        </a>
      </v-col>
      <v-col
        cols="12"
        xs="6"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="text-center pb-12"
      >
        <a href="/Lernatmosphaere-herstellen.pdf" target="_blank">
          <v-icon color="peter_blue" size="40" class="pb-6">{{
            mdiFileDownload
          }}</v-icon>
          <br />
          Lernatmosphäre herstellen
        </a>
      </v-col>
      <v-col
        cols="12"
        xs="6"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="text-center pb-12"
      >
        <a
          href="/Veraenderungsprozesse-im-Verhalten-von-SchuelerInnen anregen.pdf"
          target="_blank"
        >
          <v-icon color="peter_blue" size="40" class="pb-6">{{
            mdiFileDownload
          }}</v-icon>
          <br />
          Veränderungsprozesse im Verhalten von SchülerInnen anregen
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiFileDownload } from '@mdi/js'
import VuetifyAudio from '../components/VuetifyAudio.vue'

export default {
  components: {
    VuetifyAudio,
  },
  data() {
    return {
      file: '/gespraechsstoff-die-konsumfalle.mp3',
      mdiFileDownload,
    }
  },
  head() {
    return {
      title: ' | Einzelne Referate',
    }
  },
}
</script>
