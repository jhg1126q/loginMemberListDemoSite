<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>지티이노비젼의 위치</h1>
    <MapKakao :latitude="37.546194350143" :longitude="127.048432321547"></MapKakao>
  </div>
  <br />
  <br />
  <br />
  <v-btn variant="tonal" @click="onClickHandler">click</v-btn>
</template>

<script setup>
import { onMounted } from 'vue'
import MapKakao from '../components/Map/mapKakao.vue'
import apikey from '../properties/apikey'

onMounted(() => {})

function onClickHandler() {
  fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + apikey.address, {
    method: 'GET',
    headers: {
      Authorization: 'KakaoAK ' + apikey.restapi
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
