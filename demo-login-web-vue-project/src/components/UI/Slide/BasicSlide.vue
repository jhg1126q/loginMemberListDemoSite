<script setup>
import { ref } from 'vue'

const { test = '', dataList = [] } = defineProps({ test: String, dataList: Array })
const clickIndex = ref(-1)

function toggle(ind) {
  if (clickIndex.value == ind) {
    clickIndex.value = -1
  } else {
    clickIndex.value = ind
  }
}
</script>

<template>
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="(n, index) in dataList" :key="n">
      <v-sheet
        :color="clickIndex == index ? `red` : `grey-lighten-1`"
        height="200"
        rounded
        width="250"
        @click="toggle(index)"
        :class="['ma-3']"
        ><p>{{ `${index + 1}` }}</p></v-sheet
      >
    </v-slide-group-item>
  </v-slide-group>
</template>

<style scoped></style>
