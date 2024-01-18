<!----------------------------------------------------------------
  File Name : Game.vue
  Description : 게임 컴포넌트들이 모아져 있는 화면입니다.
  Author : B102030
  Create Date : 2024-01-10
  Update Date : 2024-01-10
---------------------------------------------------------------->

<script setup>
import PlayerSection from './Player/PlayerSection.vue'
import BasicModal from '../Modal/BasicModal.vue'
import { computed, ref } from 'vue'

const playerHealth = ref(100) // 플레이어 체력바
const monsterHealth = ref(100) // 몬스터 체력바
const playLog = ref([]) // 플레이 로그

// 게임 플레이 추가 요소
const attackPoint = ref(0) // 공격 점수
const resultMessage = ref('') // 결과 메세지

const modalRef = ref(null)
const emits = defineEmits(['logtr']) // 배열 형태로 선언할 것 << 그냥 선언할 시에는 warning 이 나옴

//----------------------------------------------------------------//

// computed 모음

// 버튼 disable 제어
const fn_specialAttackDisabled = computed(() => {
  return attackPoint.value > 3 ? false : true
})

const fn_fatalAttackDisabled = computed(() => {
  return attackPoint.value > 9 ? false : true
})

const fn_healDisabled = computed(() => {
  return attackPoint.value > 1 ? false : true
})

//----------------------------------------------------------------//

// 화면단 이벤트

// 버튼 클릭시 나오는 행동
// 클릭 버튼의 id값으로 구별하려고 했으나 v-btn id값 범위가 상당히 이상함 -> 글자에는 id값이 없음
// 이벤트 자체를 매달아 놓는 방식으로 작성
function onClickAtttackHandler() {
  fn_round('attack')
}

function onClickSpAtttackHandler() {
  fn_round('special')
}

function onClickFtAtttackHandler() {
  fn_round('fatal')
}

function onClickHealHandler() {
  fn_round('heal')
}

function onClickSurrenderHandler() {
  fn_round('surrender')
}

//----------------------------------------------------------------//

/*----------------------------------------------------------------
  title : fn_printLog
  param : target - 행동대상,  type - 행동명칭, size - 행동수치
  description : game에서의 행동 데이터들을 로그로 저장합니다
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_printLog(target, type, size) {
  playLog.value.unshift({
    target,
    type,
    size
  })
}

/*----------------------------------------------------------------
  title : getRandomValue
  param : min - 최소값,  max - 최대값
  description : 랜덤한 값을 가져옵니다
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

/*----------------------------------------------------------------
  title : fn_checkHealth
  param : none
  description : 체력 수치를 제어하고 경우에 따라 게임 종료 메시지를 출력합니다.
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_checkHealth() {
  let resultMsg = ''
  if (playerHealth.value > 100) {
    playerHealth.value = 100
  }
  if (monsterHealth.value > 100) {
    monsterHealth.value = 100
  }

  if (playerHealth.value <= 0 && monsterHealth.value <= 0) {
    // draw
    playerHealth.value = 0
    monsterHealth.value = 0
    resultMsg = '드로우'
  } else if (playerHealth.value <= 0) {
    playerHealth.value = 0
    // lose
    resultMsg = 'PLAYER 패배'
  } else if (monsterHealth.value <= 0) {
    monsterHealth.value = 0
    // win
    resultMsg = 'PLAYER 승리'
  } else {
    return
  }

  fn_endGame(resultMsg)
}

/*----------------------------------------------------------------
  title : fn_endGame
  param : none
  description : 게임 종료
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_endGame(message) {
  resultMessage.value = message
  attackPoint.value = 0
  modalRef.value.onModalOpen()
}

/*----------------------------------------------------------------
  title : fn_round
  param : type - 행동 패턴 종류
  description : 게임 종료
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_round(type) {
  switch (type) {
    case 'attack':
      fn_attack()
      break
    case 'special':
      fn_sp_attack()
      break
    case 'fatal':
      fn_ft_attack()
      break
    case 'heal':
      fn_heal()
      break
    case 'surrender':
      fn_surrender()
      break
  }
  fn_monsterAttack()

  fn_checkHealth()
  emits('logtr')
}

/*----------------------------------------------------------------
  title : fn_attack
  param : none
  description : player의 일반 공격
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_attack() {
  attackPoint.value++
  let damage = getRandomValue(8, 15)
  monsterHealth.value -= damage
  fn_printLog('player', 'attack', damage)
}

/*----------------------------------------------------------------
  title : fn_sp_attack
  param : none
  description : player의 특수 공격
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_sp_attack() {
  if (attackPoint.value < 4) {
    return
  }
  let damage = getRandomValue(18, 25)
  monsterHealth.value -= damage
  attackPoint.value -= 4
  fn_printLog('player', 'sp-attack', damage)
}

/*----------------------------------------------------------------
  title : fn_ft_attack
  param : none
  description : player의 치명적 공격
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_ft_attack() {
  if (attackPoint.value < 10) {
    return
  }
  let damage = getRandomValue(60, 75)
  monsterHealth.value -= damage
  attackPoint.value -= 10
  fn_printLog('player', 'fatal-attack', damage)
}

/*----------------------------------------------------------------
  title : fn_heal
  param : none
  description : player의 치명적 공격
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_heal() {
  if (attackPoint.value < 2) {
    return
  }
  let heal = getRandomValue(22, 35)
  playerHealth.value += heal
  attackPoint.value -= 2
  fn_printLog('player', 'heal', heal)
}

/*----------------------------------------------------------------
  title : fn_surrender
  param : none
  description : player 항복
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_surrender() {
  playerHealth.value = 0
  fn_printLog('player', 'surrender', 0)
}

/*----------------------------------------------------------------
  title : fn_monsterAttack
  param : none
  description : monster의 공격
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_monsterAttack() {
  let damage = getRandomValue(12, 23)
  playerHealth.value -= damage
  fn_printLog('monster', 'attack', damage)
}

/*----------------------------------------------------------------
  title : fn_reset
  param : none
  description : 게임 초기화
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function fn_reset() {
  resultMessage.value = ''
  playerHealth.value = 100
  monsterHealth.value = 100
  attackPoint.value = 0
  playLog.value = []
  emits('logtr')
}

defineExpose({
  playLogFn: function () {
    return playLog.value
  },
  playLog
})

/*----------------------------------------------------------------
  title : onCloseHandler
  param : none
  description : 닫기
  author : B102030
  date : 2024-01-10
----------------------------------------------------------------*/
function onCloseHandler() {
  console.log('closed!')
}
</script>

<template>
  <div>
    <div id="game">
      <PlayerSection type="monster" :value="monsterHealth"></PlayerSection>
      <PlayerSection type="player" :value="playerHealth"></PlayerSection>
      <section id="controls">
        <template v-if="resultMessage.length == 0">
          <v-btn id="attack" @click="onClickAtttackHandler">ATTACK</v-btn>
          <v-btn id="special" :disabled="fn_specialAttackDisabled" @click="onClickSpAtttackHandler"
            >SPECIAL ATTACK</v-btn
          >
          <v-btn id="fatal" :disabled="fn_fatalAttackDisabled" @click="onClickFtAtttackHandler"
            >Fatal ATTACK</v-btn
          >
          <v-btn id="heal" :disabled="fn_healDisabled" @click="onClickHealHandler">HEAL</v-btn>
          <v-btn id="surrender" @click="onClickSurrenderHandler">SURRENDER</v-btn>
        </template>
        <template v-else>
          <br />
          <v-btn @click="fn_reset"> reset</v-btn>
        </template>
      </section>
    </div>
    <BasicModal
      ref="modalRef"
      title="알림"
      btn-txt="닫기"
      :card-text="resultMessage"
      @on-close="onCloseHandler"
      ><template #contents>
        <p style="text-align: center">{{ resultMessage }}</p>
      </template>
    </BasicModal>
  </div>
</template>

<style scoped>
#game {
  width: 100%;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
  text-align: center;
}

h1 {
  width: 100%;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

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
