<script>
export default {
  data: () => ({
    sheet: false
  })
}
</script>
<template>
  <div class="text-center">
    <v-btn size="x-large" text="열기" @click="sheet = !sheet"></v-btn>

    <v-bottom-sheet v-model="sheet">
      <v-card class="text-center" height="200">
        <v-card-text>
          <v-btn variant="text" @click="sheet = !sheet"> 닫기 </v-btn>

          <br />
          <br />

          <div>클릭시 나오게 되는 파트입니다.</div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
