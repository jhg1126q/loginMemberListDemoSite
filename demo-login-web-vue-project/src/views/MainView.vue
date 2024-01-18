<script setup>
import { ref } from 'vue'

const test = ref('')

const fn_test = () => {
  console.log('test')
}
</script>

<template>
  <v-app-bar :elevation="0" rounded>
    <v-app-bar-title>메인 페이지</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>

  <v-row>
    <v-col cols="12">
      <h1>Welcome to Our Website</h1>
      <p>fuck</p>
    </v-col>
  </v-row>

  <span>&copy; 2024</span>
</template>
