<!----------------------------------------------------------------
  File Name : LandingPage
  Description : 메인 화면
  Author : B102030
  Create Date : 2024-02-16
  Update Date : 2024-02-16
---------------------------------------------------------------->
<template>
  <v-app id="inspire">
    <custom-side-drawer :drawer="drawer" @click="menuClickHandler">
      <template #list>
        <v-list rounded="lg">
          <v-list-item v-for="n in 4" :key="n" link :title="`나만의 메뉴 ${n}`"></v-list-item>
        </v-list>
      </template>
    </custom-side-drawer>
    <custom-app-bar-basic
      title="Monster Colosseo"
      @clickMenu="menuClickHandler"
    ></custom-app-bar-basic>

    <v-main class="bg-grey-lighten-3">
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <v-container>
        <v-row>
          <v-col cols md="10">
            <v-sheet min-height="70vh" rounded="lg">
              <v-row ma="1 rem">
                <v-slide-group show-arrows>
                  <v-slide-group-item v-for="n in 9" :key="n">
                    <v-sheet
                      color="grey-lighten-1"
                      height="200"
                      rounded
                      width="250"
                      @click="toggle(n)"
                      :class="['ma-3']"
                    ></v-sheet>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row ma="5rem">
                <v-col class="mt-2" cols="12">
                  <strong>Monsters</strong>
                </v-col>

                <v-col v-for="j in 4" :key="`${j}`" cols="6" md="2">
                  <v-sheet height="150" color="grey"></v-sheet>
                </v-col>
              </v-row>
              {{ clickData }}
            </v-sheet>
          </v-col>

          <v-col cols="6" md="2">
            <v-sheet rounded="lg" min-height="30%">
              <v-list-item v-for="n in 3" :key="n" link :title="`사이드 ${n}`"></v-list-item>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import CustomSideDrawer from '../../components/UI/Menu/SideDrawer.vue'
import CustomAppBarBasic from '../../components/UI/Header/AppBarBasic.vue'
import { ref } from 'vue'

const items = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  }
]
const drawer = ref(false)
const clickData = ref('아직 클릭 안됨')

function menuClickHandler() {
  drawer.value = !drawer.value
}

function toggle(ind) {
  console.log('data')
  clickData.value = 'click ::: ' + ind + '번째 데이터'
}
</script>
