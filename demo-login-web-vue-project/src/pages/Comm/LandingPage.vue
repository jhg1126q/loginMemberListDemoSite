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
        <li>list</li>
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
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="6" md="2">
            <v-sheet rounded="lg" min-height="30%">
              <!--  -->
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

function menuClickHandler() {
  drawer.value = !drawer.value
}
</script>
