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
                <basic-slide :data-list="dataList"></basic-slide>
              </v-row>
              <v-row ma="5rem">
                <list-with-title-vue title="Monsterss" :data-list="dataList"></list-with-title-vue>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="6" md="2">
            <v-sheet rounded="lg" min-height="30%">
              <div @click="onClickHandler" class="animated"><p>안녕하세요</p></div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CustomSideDrawer from '../../components/UI/Menu/SideDrawer.vue'
import CustomAppBarBasic from '../../components/UI/Header/AppBarBasic.vue'
import BasicSlide from '../../components/UI/Slide/BasicSlide.vue'
import ListWithTitleVue from '../../components/UI/List/ListWithTitle.vue'

const items = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  }
]
const drawer = ref(false)
const dataList = ref([])

onMounted(() => {
  dataList.value = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }]
})

function menuClickHandler() {
  drawer.value = !drawer.value
}

const onClickHandler = () => {
  console.log('1')
}
</script>

<style scoped>
.animated {
  transform: translateX(-50px);
}
</style>
