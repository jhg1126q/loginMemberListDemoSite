<script setup>
import PlayerSection from './Player/PlayerSection.vue'
import GameLog from './Log/GameLog.vue'
import { computed, ref } from 'vue'
import BottomSheet from '../UI/BottomSheet.vue'

const playerHealth = ref(100)
const monsterHealth = ref(100)
const playLog = ref([])
const attackPoint = ref(0)
const resultMessage = ref('')

function fn_printLog(target, type, size) {
  playLog.value.unshift({
    target,
    type,
    size
  })
}

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function fn_checkHealth() {
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
    fn_endGame('draw')
  } else if (playerHealth.value <= 0) {
    playerHealth.value = 0
    // lose
    fn_endGame('lose')
  } else if (monsterHealth.value <= 0) {
    monsterHealth.value = 0
    // win
    fn_endGame('win')
  }
}

function fn_endGame(message) {
  resultMessage.value = message
  attackPoint.value = 0
}

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
}

function fn_attack() {
  attackPoint.value++
  let damage = getRandomValue(8, 15)
  monsterHealth.value -= damage
  fn_printLog('player', 'attack', damage)
}

function fn_sp_attack() {
  if (attackPoint.value < 4) {
    return
  }
  let damage = getRandomValue(18, 25)
  monsterHealth.value -= damage
  attackPoint.value -= 4
  fn_printLog('player', 'sp-attack', damage)
}

function fn_ft_attack() {
  if (attackPoint.value < 10) {
    return
  }
  let damage = getRandomValue(60, 75)
  monsterHealth.value -= damage
  attackPoint.value -= 10
  fn_printLog('player', 'fatal-attack', damage)
}

function fn_heal() {
  if (attackPoint.value < 2) {
    return
  }
  let heal = getRandomValue(22, 35)
  playerHealth.value += heal
  attackPoint.value -= 2
  fn_printLog('player', 'heal', heal)
}

function fn_surrender() {
  playerHealth.value = 0
  fn_printLog('player', 'surrender', 0)
}

function fn_monsterAttack() {
  let damage = getRandomValue(12, 23)
  playerHealth.value -= damage
  fn_printLog('monster', 'attack', damage)
}

function fn_reset() {
  resultMessage.value = ''
  playerHealth.value = 100
  monsterHealth.value = 100
  attackPoint.value = 0
  playLog.value = []
}

const fn_specialAttackDisabled = computed(() => {
  return attackPoint.value > 3 ? false : true
})

const fn_fatalAttackDisabled = computed(() => {
  return attackPoint.value > 9 ? false : true
})

const fn_healDisabled = computed(() => {
  return attackPoint.value > 1 ? false : true
})

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
</script>

<template>
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
        <h1>{{ resultMessage }}</h1>
        <br />
        <v-btn @click="fn_reset"> reset</v-btn>
      </template>
    </section>
    <BottomSheet btnTxt="BattleLog">
      <GameLog :log="playLog"></GameLog>
    </BottomSheet>
  </div>
</template>

<style scoped>
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
