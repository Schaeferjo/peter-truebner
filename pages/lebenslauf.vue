<template>
  <div id="lebenlauf">
    <h1>Lebenslauf</h1>
    <h2>Peter Trübner - Prof. emeritiert, Dr. phil.</h2>

    <p style="color: red;">FOTO</p>
    <div id="cv">
      <LebenslaufEintrag date="Aktuell">
        <ul>
          <li>Psychologische Beratung von Einzelnen</li>
          <li>
            Referent, Projektberatung und Entwicklungsberatung für Institutionen
          </li>
          <li>Stiftungsrat der Tagesstätte Mittelpunkt in Oensingen</li>
          <li>
            Redakteur der Zeitschrift der Analogue Audio Association Switzerland
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
        <br />
        <br />Ausbildung als Psychotherapeut, Arbeit als therapeutischer
        Mitarbeiter und als Leiter der Drogentherapieeinrichtung RELEASE e.V.
        Suchtforschung, Aufbau einer Therapieeinrichtung für sogenannt
        therapieresistente Heroinsüchtige nach mehrjährigem Aufenthalt im
        Strafvollzug, Leiter des Koordinationstreffens aller Drogen-Facharbeiter
        der Stadt Berlin.
      </LebenslaufEintrag>
    </div>
  </div>
</template>

<script>
import LebenslaufEintrag from '../components/lebenslauf-eintrag.vue'

export default {
  components: {
    LebenslaufEintrag,
  },
}
</script>

<style>
#cv {
  padding: 4em 0;
}
</style>
