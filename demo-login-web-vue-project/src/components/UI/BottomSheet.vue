<script setup>
import { ref } from 'vue'

const sheet = ref(false)
const fn_clickBtn = (event) => {
  console.log('click')
  sheet.value = !sheet.value
}

const dataSetting = (value) => {
  return 'test ::: ' + value
}
</script>
<template>
  <div class="text-center">
    <v-btn size="x-large" text="열기" @click="fn_clickBtn"></v-btn>

    <v-bottom-sheet v-model="sheet">
      <v-card class="text-center" height="200">
        <v-card-text>
          <v-btn variant="text" @click="fn_clickBtn"> 닫기 </v-btn>

          <br />
          <br />

          <div>{{ dataSetting(' test ') }}</div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
