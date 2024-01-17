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

const testFlag = ref(false)
const gameRef = ref(null)
const testList = ref([])
const testfunction = () => {
  // 데이터 바인딩이 아니라 그저 데이터를 후처리로 퍼 넘겨주는 형식입니다.
  testList.value = gameRef.value.playLog
}
</script>

<template>
  <div>
    <!-- header -->
    <v-toolbar color="grey" dark fixed app :collapse="testFlag">
      <v-btn
        icon
        @click="
          () => {
            testFlag = !testFlag
          }
        "
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-toolbar-title>Monster Slayer</v-toolbar-title>
    </v-toolbar>
    <!-- header -->
    <main>
      <Game ref="gameRef" @logtr="testfunction" />
      <GameLog :log="testList"></GameLog>
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
}
</style>
