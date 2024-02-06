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
    <slot name="list"></slot>
  </v-navigation-drawer>
</template>

<style scoped></style>
