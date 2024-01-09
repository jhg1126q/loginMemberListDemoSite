<script setup>
import { computed, ref, toRaw } from 'vue'

const props = defineProps({
  log: [Object]
})

function classColor(target, type) {
  if (target === 'monster') {
    return 'log--monster'
  }

  if (type === 'attack') {
    return `log--damage`
  }
  if (type === 'sp-attack') {
    return `log--player`
  }
  if (type === 'heal') {
    return `log--heal`
  }
  if (type === 'surrender') {
    return `log--player`
  }

  return `log--monster`
}
</script>

<template>
  <section id="log" class="container">
    <h2>Battle Log</h2>
    <ul v-for="item in props.log" :class="classColor(item.target, item.type)">
      <li>target : {{ item.target }}</li>
      <li>type : {{ item.type }}</li>
      <li>size : {{ item.size }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>
