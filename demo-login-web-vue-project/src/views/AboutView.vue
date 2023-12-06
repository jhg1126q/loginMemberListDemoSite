<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ check ? data : '데이터가 없습니다' }}
    <input :placeholder="data" />
    <div v-bind="componentTestData"></div>
    <p v-if="check">확인하세용!</p>
    <button @click="testCnt++">{{ testCnt }}</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const data = ref(500)
const check = ref(true)
const testCnt = ref(0)
const componentTestData = {
  id: 'test',
  class: 'test'
}

onMounted(() => {
  fn_test()
})

const fn_test = () => {
  console.log('init test :::: ')
  console.log('this is vue testing')
  console.log('mounting')
}

console.log('this is global area down of mount!')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
