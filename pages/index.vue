<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h1 class="pb-6">Aktuelle Tätigkeiten</h1>
      </v-col>
    </v-row>

    <v-row class="pt-12">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="3"
        class="text-center pb-8"
      >
        <v-icon color="peter_blue" size="70" class="pb-8">{{
          mdiClipboardCheckOutline
        }}</v-icon>
        <h4>Konzeptberatung</h4>
        <p class="overline">
          Reflexion und Entwicklung für therapeutische und pädagogische
          Institutionen
        </p>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="3"
        class="text-center pb-8"
      >
        <v-icon color="peter_blue" size="70" class="pb-8">{{
          mdiHeadCogOutline
        }}</v-icon>
        <h4>Projektberatung und Projektentwicklung</h4>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="3"
        class="text-center pb-8"
      >
        <v-icon color="peter_blue" size="70" class="pb-8">{{
          mdiHandshakeOutline
        }}</v-icon>
        <h4>Psychologische Beratung und Betreuung in Krisensituationen</h4>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="3"
        class="text-center pb-8"
      >
        <v-icon color="peter_blue" size="70" class="pb-8">{{
          mdiMessageOutline
        }}</v-icon>
        <h4>Vortragstätigkeit nach Absprache</h4>
      </v-col>
    </v-row>
    <v-row class="pt-12">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <ul>
          <li>
            Präsident des Strategischen Gremiums und Mitglied des Stiftungsrats
            der
            <a
              href="https://www.tagesstaettemittelpunkt.ch/ueber-uns/stiftung-mittelpunkt/"
              target="_blank"
              rel="noopener"
              >Tagesstätte Mittelpunkt
            </a>
          </li>
          <li>
            Redaktionsmitglied der Zeitschrift der
            <a
              href="https://www.aaa-switzerland.ch/zeitschrift"
              target="_blank"
              rel="noopener"
              >Analogue Audio Association Switzerland</a
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiClipboardCheckOutline,
  mdiHeadCogOutline,
  mdiHandshakeOutline,
  mdiMessageOutline,
} from '@mdi/js'

export default {
  data() {
    return {
      mdiClipboardCheckOutline,
      mdiHeadCogOutline,
      mdiHandshakeOutline,
      mdiMessageOutline,
    }
  },
  head() {
    return {
      title: ' | Start',
    }
  },
}
</script>
