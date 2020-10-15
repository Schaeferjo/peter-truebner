<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h1>Lebenslauf</h1>
        <h2 class="text-right py-6">
          Peter Trübner <span class="dont_show">– </span
          ><span class="show_as_block">Prof. emeritiert, Dr. phil.</span>
        </h2>
        <img
          src="https://www.mediaevent.de/html/img/needles-1440.jpg"
          srcset="
            https://www.mediaevent.de/html/img/needles-780.jpg   780w,
            https://www.mediaevent.de/html/img/needles-1024.jpg 1024w,
            https://www.mediaevent.de/html/img/needles-1440.jpg 1440w,
            https://www.mediaevent.de/html/img/needles-2400.jpg 2400w
          "
          sizes="(min-width: 1600px) 1200px, // ViewPort mindestens 1600 px, nimm Bild mit 1200px Breite
               (min-width: 1400px) 1100px,  // ViewPort mindestens 1400 px, nimm Bild mit 1100px Breite
               (min-width:1000px) 900px,    // ViewPort mindestens 1000 px (links), nimm Bild mit 900px (rechts) Breite
               100vw"
          width="780"
          height="521"
          alt="HTML img srcset – Bilder je nach Breite des Viewports laden"
        />

        <div id="cv">
          <LebenslaufEintrag date="Aktuell">
            <ul class="lebenslauf">
              <li>Psychologische Beratung von Einzelnen</li>
              <li>
                Referent, Projektberatung und Entwicklungsberatung für
                Institutionen
              </li>
              <li>Stiftungsrat der Tagesstätte Mittelpunkt in Oensingen</li>
              <li>
                Redakteur der Zeitschrift der Analogue Audio Association
                Switzerland
              </li>
            </ul>
          </LebenslaufEintrag>

          <LebenslaufEintrag date="2003 - 2020">
            Professor für Bildungssoziologie an der Pädagogischen Hochschule der
            Fachhochschule Nordwestschweiz
          </LebenslaufEintrag>

          <LebenslaufEintrag date="2007 - 2010"
            >Lehrbeauftragter des Instituts für Soziologie der Universität
            Basel</LebenslaufEintrag
          >

          <LebenslaufEintrag date="2001 - 2003"
            >Dozent für empirische Sozialforschung an der Neuen Lehrerinnen- und
            Lehrerausbildung der Universität Bern</LebenslaufEintrag
          >

          <LebenslaufEintrag date="1995 - 2003"
            >Lehrauftrag und anschliessende Professur an der Fachhochschule für
            Soziale Arbeit beider Basel</LebenslaufEintrag
          >

          <LebenslaufEintrag date="1992 - 1997"
            >Arbeit als Einzeltherapeut im Auftrag der Psychiatrischen Klinik
            Solothurn im Therapiezentrum Schachen mit Drogensüchtigen,
            Suizidgefährdeten und Depressiven</LebenslaufEintrag
          >

          <LebenslaufEintrag date="1988 - 1992"
            >Gemeinwesenarbeit mit dem Schwerpunkt Suchtprävention als Beamter
            der Stadt Solothurn</LebenslaufEintrag
          >

          <LebenslaufEintrag date="1987"
            >Mitarbeiter im Psychologischen Marktforschungsinstitut
            Zürich</LebenslaufEintrag
          >

          <LebenslaufEintrag date="1986"
            >Heirat und Umzug in die Schweiz</LebenslaufEintrag
          >

          <LebenslaufEintrag date="bis 1986">
            Studium der Soziologe und Psychologe an der Johann Wolfgang Goethe
            Universität in Frankfurt/Main und an der Freien Universität Berlin.
            <br />
            <br />Ausbildung als Psychotherapeut, Arbeit als therapeutischer
            Mitarbeiter und als Leiter der Drogentherapieeinrichtung RELEASE
            e.V. Suchtforschung, Aufbau einer Therapieeinrichtung für sogenannt
            therapieresistente Heroinsüchtige nach mehrjährigem Aufenthalt im
            Strafvollzug, Leiter des Koordinationstreffens aller
            Drogen-Facharbeiter der Stadt Berlin.
          </LebenslaufEintrag>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LebenslaufEintrag from '../components/lebenslauf-eintrag.vue'

export default {
  components: {
    LebenslaufEintrag,
  },
  head() {
    return {
      title: ' | Lebenslauf',
    }
  },
}
</script>

<style lang="scss">
#cv {
  padding: 4em 0 0 0;
}

@media only screen and (max-width: 1024px) {
  .show_as_block {
    display: block;
  }
  .dont_show {
    display: none;
  }
}
</style>
