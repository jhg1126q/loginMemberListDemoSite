<script setup>
import Game from './Game/Game.vue'
import BottomSheet from './UI/BottomSheet.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <BottomSheet></BottomSheet>
</template>
