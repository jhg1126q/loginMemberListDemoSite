<!----------------------------------------------------------------
  File Name : BasicModal.vue
  Description : 기본적인 모달 화면 입니다.
  Author : B102030
  Create Date : 2024-01-10
  Update Date : 2024-01-10
---------------------------------------------------------------->

<script setup>
import { ref } from 'vue'

/*----------------------------------------------------------------
  props 설명

  - btnTxt : 버튼 텍스트
  - title : 모달창 제목
----------------------------------------------------------------*/
const props = defineProps({
  btnTxt: String,
  title: String
})

/*----------------------------------------------------------------
  emits 설명

  - onClose : 모달창 닫기 콜백
  - onConfirm : 확인버튼 클릭 
  - onOpen : 모달창 오픈시 콜백
----------------------------------------------------------------*/
const emits = defineEmits(['onClose', 'onConfirm', 'onOpen'])

const onActive = ref(false) // 화면 Open 제어 변수

/*----------------------------------------------------------------
  title : onClickHandler
  param : none
  description : 모달창 버튼 클릭
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
const onClickHandler = () => {
  onActive.value = false
  emits('onClose')
}

/*----------------------------------------------------------------
  title : onModalOpen
  param : event
  description : 모달창 열기 - 외부 접근용
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
const onModalOpen = () => {
  onActive.value = true
  emits('onOpen')
}

// 밖에서 해당 모달 창을 열수 있게 만들어서 진행합니다
// 모달 컴포넌트 필요한 기능 테스트 중
defineExpose({
  onModalOpen
})
</script>

<template>
  <v-dialog v-model="onActive" width="500">
    <v-card :title="props.title">
      <v-card-text>
        <slot name="contents">
          <!-- default -->
          <p>내용이 없습니다</p>
        </slot>
      </v-card-text>
      <v-card-actions class="btngroup">
        <v-btn :text="props.btnTxt" @click="onClickHandler" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.btngroup {
  justify-content: right;
}

slot {
  text-align: center;
}
</style>
