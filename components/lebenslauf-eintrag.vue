<template>
  <div class="cv-item">
    <div class="cv-item-date">
      {{ date }}
    </div>

    <div class="cv-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.cv-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.cv-item-date {
  text-align: right;
  font-weight: bold;
  font-size: 1.2em;
  border-right: 1px solid #ccc;
  padding: 2em;
}

.cv-item-content {
  text-align: left;
  padding: 2em;
}
</style>
