<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>지티이노비젼의 위치</h1>
  </div>
  <br />
  <br />
  <br />
  <v-btn variant="tonal" @click="onClickHandler">click</v-btn>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})

function onClickHandler() {
  fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + 1233333, {
    method: 'GET',
    headers: {
      Authorization: 'KakaoAK ' 
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data.documents)
    })
}
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
