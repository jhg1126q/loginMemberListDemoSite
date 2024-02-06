<script setup>
import { onMounted, ref } from 'vue'
import BasicTab from '../Tab/BasicTab.vue'

const props = defineProps({ title: String })
const emits = defineEmits(['clickMenu'])

const list = ref([])

function clickLeftMenuHandler() {
  emits('clickMenu')
}

function clickTitleHandler() {
  console.log('테스트')
}
onMounted(() => {
  console.log('list 가져옵니다 ')

  //TODO: 권한 조회를 통해 목록 리스트를 가져오는 단계 작성 필요
  list.value = ['1', '2', '3']
})
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="clickLeftMenuHandler"></v-app-bar-nav-icon>
    <v-app-bar-title @click="clickTitleHandler">{{ props.title }}</v-app-bar-title>
    <basic-tab :links="list"></basic-tab>
  </v-app-bar>
</template>

<style scoped></style>
