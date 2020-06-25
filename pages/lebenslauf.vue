<template>
  <div id="lebenlauf">
    <h1>lebenslauf</h1>

    <LebenslaufEintrag date="2020">
      Professor für Bildungssoziologie an der Pädagogischen Hochschule der
      Fachhochschule Nordwestschweiz.
    </LebenslaufEintrag>
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
