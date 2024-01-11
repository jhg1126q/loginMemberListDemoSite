<!----------------------------------------------------------------
  File Name : HomeView
  Description : 홈화면
  Author : B102030
  Create Date : 2024-01-10
  Update Date : 2024-01-10
---------------------------------------------------------------->

<script setup>
import { computed, ref, toRaw } from 'vue'
import Game from '../components/Game/Game.vue'
import GameLog from '../components/Game/Log/GameLog.vue'

const gameRef = ref(null)
const computedGameLog = computed(() => {
  return []
})
const onClickTestEvent = () => {
  console.log('hi ::::: ')
  console.log(gameRef.value.playLogFn())
  console.log(toRaw(gameRef.value.playLog))
}
</script>

<template>
  <main>
    <Game ref="gameRef"></Game>
    <GameLog :log="computedGameLog"></GameLog>
  </main>
  <v-btn @click="onClickTestEvent">test </v-btn>
</template>
<style scoped>
main {
  display: flex;
}
</style>
