<script setup>
import { ref } from 'vue'

const props = defineProps({ drawer: Boolean })
const emits = defineEmits(['click'])

function clickHanlder() {
  emits('click')
}
</script>

<template>
  <v-navigation-drawer :model-value="props.drawer" @update:modelValue="clickHanlder">
    <v-avatar image="" class="hidden-sm-and-down" color="grey-darken-1" size="32">
      <v-img src="https://i.ibb.co/DDXdCFG/catprofile.png" alt="Cat"></v-img
    ></v-avatar>
    <slot name="list"></slot>
  </v-navigation-drawer>
</template>

<style scoped></style>
