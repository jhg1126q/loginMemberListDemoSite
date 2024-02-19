<script setup>
import { onMounted, ref } from 'vue'

const { title = 'Monsters', dataList = [] } = defineProps({ title: String, dataList: Array })
const clickIndex = ref(-1)

function onClickSheet(ind) {
  if (clickIndex.value == ind) {
    clickIndex.value = -1
  } else {
    clickIndex.value = ind
  }
}
</script>

<template>
  <v-col class="mt-2" cols="12">
    <strong>{{ `${title}` }}</strong>
  </v-col>
  <v-col v-for="(n, index) in dataList" :key="`${n.key}`" cols="6" md="2">
    <v-sheet
      height="150"
      :color="clickIndex == index ? `green` : `grey`"
      :border="clickIndex == index ? `md` : ``"
      :rounded="clickIndex == index ? true : false"
      @click="onClickSheet(index)"
      >{{ index + 1 }}</v-sheet
    >
  </v-col>
</template>

<style scoped></style>
