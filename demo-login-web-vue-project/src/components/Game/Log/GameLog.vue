<script setup>
const props = defineProps({
  log: [Object]
})

function classColor(target, type) {
  // 타겟이 monster
  if (target === 'monster') {
    return 'log--monster'
  }

  // 타겟이 monster가 아니면
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
    <ul v-for="(item, index) in props.log" :class="classColor(item.target, item.type)">
      <li>{{ item.target }} 의 행동!</li>
      <li>{{ item.size }} {{ item.type == 'heal' ? '회복' : '공격' }}</li>
    </ul>
  </section>
</template>

<style scoped>
section {
  width: 90%;
  height: 30rem;
  max-width: 40rem;
  margin: auto;
  overflow-y: scroll;
  text-align: center;
}

section::-webkit-scrollbar {
  width: 1rem;
}

section::-webkit-scrollbar-thumb {
  height: 20%;
  background: #454c56;

  border-radius: 1rem;
}

section::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1);
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
