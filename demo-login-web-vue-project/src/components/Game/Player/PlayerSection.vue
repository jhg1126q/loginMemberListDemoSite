<!----------------------------------------------------------------
  File Name : PlayerSection
  Description : 화면에 표시될 타겟의 UI 파트입니다
  Author : B102030
  Create Date : 2024-01-10
  Update Date : 2024-01-10
---------------------------------------------------------------->

<script setup>
import { computed } from 'vue'

/*----------------------------------------------------------------
  props 설명

  - type : 타겟 타입
  - value : 타겟 Health Point( HP )
----------------------------------------------------------------*/
const props = defineProps({
  type: String,
  value: Number,
  point: Number
})

/*----------------------------------------------------------------
  title : computeHealthBar
  description : 체력바를 조절합니다.
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
const computeHealthBar = computed(() => {
  return { width: `${props.value}%` }
})

const computeAttackPoint = computed(() => {
  return { width: `${props.point}%` }
})
</script>

<template>
  <section :id="props.type" class="container">
    <h2>{{ props.type }} Health</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="computeHealthBar"></div>
    </div>
    <div v-show="props.point" class="healthbar">
      <div class="healthbar__remain" :style="computeAttackPoint"></div>
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

.healthbar__remain {
  background-color: coral;
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
