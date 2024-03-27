<!----------------------------------------------------------------
  File Name : LoginPage
  Description : 로그인 및 회원가입 화면
  Author : B102030
  Create Date : 2024-02-16
  Update Date : 2024-02-16
---------------------------------------------------------------->

<script setup>
import { ref } from 'vue'

const testTitle = ref('testTitle')
const testParam = ref('testParam')
const show = ref(true)

function onClickHandler() {
  show.value = !show.value
}
</script>
<template>
  <div class="testdiv">
    <v-sheet>
      <h1>{{ testTitle }}</h1>
      <!-- Transition 자체는 하나의 v-show만 가지고 행동하게 된다.여러개가 들어오면 에러가 나온다 -->
      <Transition name="slide-fade">
        <p v-show="show">{{ testParam }}</p>
      </Transition>
      <Transition name="bounce">
        <p v-show="show" style="text-align: center">{{ testParam }}</p>
      </Transition>
    </v-sheet>

    <v-btn @click="onClickHandler">test</v-btn>
  </div>
</template>
<style scoped>
.testdiv {
  color: red;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
