<template>
  <v-app id="inspire">
    <custom-side-drawer :drawer="drawer" @click="menuClickHandler">
      <li>list</li>
    </custom-side-drawer>
    <custom-app-bar-basic
      title="Test Application"
      @clickMenu="menuClickHandler"
    ></custom-app-bar-basic>
    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import CustomSideDrawer from '../../components/UI/Menu/SideDrawer.vue'
import CustomAppBarBasic from '../../components/UI/Header/AppBarBasic.vue'

const drawer = ref(false)

function menuClickHandler() {
  drawer.value = !drawer.value
}
</script>

<script>
export default {
  data: () => ({ drawer: null })
}
</script>
