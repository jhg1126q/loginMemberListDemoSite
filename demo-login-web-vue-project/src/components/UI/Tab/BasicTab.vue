<script setup>
const classes = {
  centered: 'centered',
  color: 'grey-darken-2'
}
const props = defineProps({ links: Array })

function onClickHandler(e) {
  console.log('test ::: ', e.target.id)
}
</script>

<template>
  <v-tabs>
    <v-tab
      v-for="link in props.links"
      :key="link"
      :id="link"
      :text="link"
      @click="onClickHandler"
    ></v-tab>
  </v-tabs>
</template>

<style scoped></style>
