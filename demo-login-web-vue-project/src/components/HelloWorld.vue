<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>hi world!</h3>
  </div>
</template>
