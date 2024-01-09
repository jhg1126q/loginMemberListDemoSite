<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: String,
  value: Number
})

const computeHealthBar = computed(() => {
  return { width: `${props.value}%` }
})
</script>

<template>
  <section :id="props.type" class="container">
    <h2>{{ props.type }} Health</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="computeHealthBar"></div>
    </div>
    <p>{{ props.value }}</p>
  </section>
</template>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

h2 {
  margin: 0.25rem;
}
</style>
