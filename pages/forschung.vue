<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <h1 class="pb-6">Forschung</h1>
      </v-col>
    </v-row>

 

    <ForschungserfahrungEintrag
      date="Basel 2007 - 2010"
      dateSubheadline="Soziologisches Institut der Universität Basel"
    >
      <ul>
        <li>Jugendkulturen in der Schweiz</li>
        <li>
          Integration von Migrantenkindern im Zentrum für Brückenangebote am
          Schulhaus Klingenthal in Basel Stadt.
        </li>
      </ul>
    </ForschungserfahrungEintrag>

    <ForschungserfahrungEintrag
      date="Liestal 2003 - 2010"
      dateSubheadline="Pädagogische Hochschule der FHNW (zuerst HPSA-BB)"
    >
      <ul>
        <li>
          Evaluation der Unterrichtsqualität und Entwicklung der Flexiblen
          Ausbildung der PH-FHNW
        </li>
        <li>
          Untersuchung der ICTS Koordinatoren Ausbildungen in der
          Nordwestschweiz
        </li>
        <li>
          Entwicklung der Lernstrategien von Studierenden im computerbasiertem
          und Präsenz Unterricht
        </li>
      </ul>
    </ForschungserfahrungEintrag>

    <ForschungserfahrungEintrag
      date="Bern 2001 - 2003"
      dateSubheadline="Lehrerinnen und Lehrerausbildung der Universität Bern"
    >
      <ul>
        <li>
          Einführung in quantitative und qualitative pädagogische Forschung.
          Betreuung von Forschungsprojekten der Studierenden. Aufbau des
          Studienmoduls und Umsetzung zusammen mit Prof. Dr. Ursula Streckeisen.
        </li>
      </ul>
    </ForschungserfahrungEintrag>
    <ForschungserfahrungEintrag
      date="Basel 1998 - 2003"
      dateSubheadline="an der Fachhochschule für Soziale Arbeit beider Basel"
    >
      <ul>
        <li>Soziale Arbeit im Kinderspital Basel Stadt</li>
        <li>Gewalt unter Jugendlichen in der Freien Strasse Basel</li>
        <li>Sozialarbeit im Krankenhaus</li>
      </ul>
    </ForschungserfahrungEintrag>

    <ForschungserfahrungEintrag
      date="Solothurn 1988 - 1992"
      dateSubheadline="in der Gemeinwesen Arbeit der Stadt Solothurn"
    >
      <ul>
        <li>Angebote der Suchtprävention in der Stadt Solothurn</li>
        <li>
          Integration von Migranten durch Ausländervereine in der Stadt
          Solothurn
        </li>
        <li>Jugendarbeit im Kanton Solothurn</li>
      </ul>
    </ForschungserfahrungEintrag>

    <ForschungserfahrungEintrag
      date="Berlin 1979 - 1986"
      dateSubheadline="Forschungsarbeiten zur Drogenabhängigkeit Jugendlicher als Leiter des
          Therapiezentrums Release und im Auftrag des Senators für Familie
          Jugend und Sport als Koordinator der Berliner Drogenarbeit"
    >
      <ul>
        <li>
          Therapeutischer Strafvollzug oder Therapie statt Strafe.
          Rahmenbedingungen zur Therapie von ehemals süchtigen Straftätern.
        </li>
        <li>
          Suizid oder Zufall. Evaluation der sozialen Hintergründe von
          Drogentoten, die an einer Überdosis gestorben sind.
        </li>
        <li>
          Nachsorge von Therapieabsolventen. Angebote und Bedürfnisse der
          Drogentherapieeinrichtungen der Stadt Berlin.
        </li>
        <li>Gesellschaftliche und individuelle Hintergründe der Heroinsucht</li>
      </ul>
    </ForschungserfahrungEintrag>

    <ForschungserfahrungEintrag
      date="Berlin 1974"
      dateSubheadline="als Forschungsprojekt im Soziologiestudium"
    >
      <ul>
        <li>
          Das Verhältnis des Berliner Soziologiestudiums zum Beruf. Evaluation
          der Berufslaufbahnen der Soziologie Studienabgänger seit 1966.
        </li>
      </ul>
    </ForschungserfahrungEintrag>

  </v-container>
</template>

<script>
import ForschungserfahrungEintrag from '../components/ForschungserfahrungEintrag.vue'

export default {
  components: {
    ForschungserfahrungEintrag,
  },
  head() {
    return {
      title: ' | Forschungserfahrung',
    }
  },
}
</script>
