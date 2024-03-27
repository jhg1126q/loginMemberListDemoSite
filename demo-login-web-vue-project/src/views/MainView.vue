<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32" @click="drawer = !drawer"></v-avatar>

        <v-btn v-for="link in linkData" :key="link" :text="link.name" variant="text"></v-btn>

        <v-spacer></v-spacer>

        <v-text-field
          density="compact"
          flat
          hide-details
          label="Search"
          rounded="lg"
          single-line
          variant="solo-filled"
        ></v-text-field>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row class="d-flex" justify="center">
          <v-menu v-model="showMenu" absolute offset-y :position-x="x" :position-y="y">
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" link :title="`List Item ${n}`"></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" style="display: flex">
              <Game ref="gameRef" @logtr="testfunction" />
              <GameLog :log="testList"></GameLog>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {  ref } from 'vue'
import Game from '../components/Game/Game.vue'
import GameLog from '../components/Game/Log/GameLog.vue'

const linkData = [
  { link: '/', name: 'MainBoard' },
  { link: '/dungeon', name: 'Dungeon' },
  { link: '/shop', name: 'Shop' },
  { link: '/profile', name: 'MyPage' }
]

const showMenu = ref(false)
const items = [{ title: '몬스터 정보' }, { title: '몬스터 상세보기' }, { title: '닫기' }]
const x = ref(0)
const y = ref(0)

const drawer = ref(false)
const gameRef = ref(null)
const testList = ref([])
const testfunction = () => {
  // 데이터 바인딩이 아니라 그저 데이터를 후처리로 퍼 넘겨주는 형식입니다.
  testList.value = gameRef.value.playLog
}
</script>

<style scoped>
.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>
