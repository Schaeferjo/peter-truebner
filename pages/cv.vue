<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h1>Curriculum Vitae</h1>
        <h2 class="text-right py-6">
          Peter Trübner<br />Prof. emeritiert, Dr. phil.
        </h2>
        <v-img
          src="/pt_400x216.jpg"
          srcset="
            /pt_1000x540.jpg 1000w,
            /pt_750x405.jpg 750w,
            /pt_400x216.jpg 400w"
          sizes="(min-width: 960px) 50vw, 90vw"
          contain
          max-width="1000px"
          class="mx-auto py-8"
          alt="Porträt von Prof. emeritiert, Dr. phil. Peter Trübner"
        />

        <h2 class="text-right py-6">Schwerpunkte meiner Lehrtätigkeit</h2>
        <h3>Fachhochschule Soziale Arbeit beider Basel</h3>

        <p class="pb-6">
          Projektarbeit, Problem-Orientiertes-Lernen (POL), Arbeit mit
          Einzelnen, Nachsozialisation in Jugendheimen<br />
        </p>

        <h3>Universität Bern</h3>
        <p class="pb-6">
          Methoden der Sozialforschung, Bildungstheorien, Migration und
          Globalisierung, Begleitung von Forschungsprojekten an Berner Schulen
        </p>

        <h3>Universität Basel</h3>
        <p class="pb-6">
          Bildungssoziologie, Sozialisationstheorie, Methoden der Cultural
          Studies, Gouvernementalität, Bildungstheorie in den Werken von Michel
          Foucault, Pierre Bourdieu und Niklas Luhmann, Forschungsprojekt zur
          schulischen Integration von jugendlichen Migranten
        </p>

        <h3>Pädagogische Hochschule der FHNW</h3>
        <p class="pb-6">
          Bildung im gesellschaftlichen Verlauf, Schulische Sozialisation,
          Migrationspädagogik, Abweichendes Verhalten, Institutionelle
          Diskriminierung, Kommunikation und Klassenführung, Burn Out,
          Professionsentwicklung<br />
        </p>

        <h2 class="text-right py-6">Forschung zu:</h2>

        <p class="pb-12">
          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Unterrichtsqualität</h3>
          </v-chip>

          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Konzeptentwicklung flexibler Ausbildung</h3>
          </v-chip>

          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Lernstrategien</h3>
          </v-chip>

          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Migration</h3>
          </v-chip>

          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Informationstechnologien in der Schule</h3>
          </v-chip>

          <v-chip class="ma-2" color="peter_blue" text-color="white">
            <h3>Einführung der ersten Fremdsprache</h3>
          </v-chip>
        </p>

        <v-divider></v-divider>
        <h2 class="text-right py-6">Theoretischer Hintergrund</h2>
        <p>
          Studium der Soziologie und Psychologie in Frankfurt / Main und Berlin.
        </p>
        <p>
          Als Soziologe interessiert mich, wie Menschen ihre Umwelten schaffen
          aber zugleich durch ihre Umwelten in ihrem Denken, Handeln und Habitus
          geprägt werden.
        </p>
        <p>
          Als Psychologe interessiert mich, wie die Spuren der Sozialisation in
          Köpfen und Körpern bewusst gemacht werden können. Lebensgeschichten
          können nur in neue und emanzipative Handlungskompetenzen überführt
          werden, wenn das vorher Verdrängte mit Bewusstsein bearbeitet wird.
        </p>
        <p>
          Diese Fähigkeit zur Selbstreflexion sahen die Soziologen Ulrich Beck
          und Anthony Giddens am Ende des 20. Jahrhunderts als Ergebnis der
          Globalisierung und als Grundlage einer echten Demokratie an. Zu
          hinterfragen ist heute die globale Regression, mit der Parteien
          Heilung in der Rückkehr der Staaten zum Nationalismus des 19.
          Jahrhunderts versprechen. Die immer breitere Wut auf Minderheiten
          zeugt von der Flucht in Verdrängung.
        </p>
        <p>
          Dagegen wäre die Basis von Demokratien die Bereitschaft, sich bewusst
          anderen Meinungen zu stellen. Nur so kann eigenes falsches Bewusstsein
          reflektiert werden.
        </p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

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
      >Gemeinwesenarbeit mit dem Schwerpunkt Suchtprävention als Beamter der
      Stadt Solothurn</LebenslaufEintrag
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
      
      <br />Ausbildung als Psychotherapeut, Arbeit als therapeutischer
      Mitarbeiter und als Leiter der Drogentherapieeinrichtung RELEASE e.V.
      Suchtforschung, Aufbau einer Therapieeinrichtung für sogenannt
      therapieresistente Heroinsüchtige nach mehrjährigem Aufenthalt im
      Strafvollzug, Leiter des Koordinationstreffens aller Drogen-Facharbeiter
      der Stadt Berlin.
    </LebenslaufEintrag>
  </v-container>
</template>

<script>
import { mdiCircleOutline } from '@mdi/js'
import LebenslaufEintrag from '../components/LebenslaufEintrag.vue'

export default {
  components: {
    LebenslaufEintrag,
  },
  data() {
    return {
      mdiCircleOutline,
    }
  },
  head() {
    return {
      title: ' | Curriculum Vitae',
    }
  },
}
</script>

<style lang="scss">
#cv {
  padding: 4em 0 0 0;
}

p.test {
  display: flex;
  align-items: baseline;
}
</style>
