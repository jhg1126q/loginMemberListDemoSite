<script setup>
import { ref } from 'vue'
const props = defineProps({ btnTxt: String })

const sheet = ref(false)
const fn_clickBtn = (event) => {
  sheet.value = !sheet.value
}
</script>
<template>
  <div class="text-center">
    <v-btn size="x-large" :text="props.btnTxt" @click="fn_clickBtn"></v-btn>

    <v-bottom-sheet v-model="sheet">
      <v-card class="text-center" height="200">
        <v-card-text>
          <v-btn variant="text" @click="fn_clickBtn"> 닫기 </v-btn>
          <div><slot> </slot></div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
