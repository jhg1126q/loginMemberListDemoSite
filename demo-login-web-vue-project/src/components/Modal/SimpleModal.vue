<script setup>
import { ref } from 'vue'

const props = defineProps({
  explainTxt: String,
  positiveTxt: String,
  negetiveTxt: String,
  isShow: Boolean
})
const emits = defineEmits(['testEmit'])

const onShow = ref(props.isShow)

const onClickPositiveBtnHandler = (event) => {
  console.log(event)
  emits('testEmit')
  onShow.value = false
}

const onClickNegetiveBtnHandler = (event) => {
  console.log(event)
  emits('testEmit')
  onShow.value = false
}
</script>

<template>
  <v-sheet
    v-show="onShow"
    border="md"
    class="pa-6 text-white mx-auto"
    color="#141518"
    max-width="400"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>

    <p class="mb-8">
      {{ props.explainTxt }}

      <br />
      <br />

      Please read our <a href="/about" class="text-red-accent-2">Privacy Policy</a> to learn about
      our privacy practices or click "Your Preferences" to exercise control over your data.
    </p>

    <v-btn
      block
      class="text-none text-black mb-4"
      color="red-accent-2"
      size="x-large"
      variant="flat"
      @click="onClickPositiveBtnHandler"
    >
      {{ props.positiveTxt }}
    </v-btn>

    <v-btn
      block
      class="text-none text-black"
      color="red-accent-2"
      size="x-large"
      variant="outlined"
      @click="onClickNegetiveBtnHandler"
    >
      {{ props.negetiveTxt }}
    </v-btn>
  </v-sheet>
</template>
