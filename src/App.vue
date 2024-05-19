<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <div class="main-container">
    <HeaderComp></HeaderComp>
    <main class="body-container">
      <RouterView />
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.body-container {
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  background: linear-gradient(-45deg, #ff00ff, #000dff, #19c7ee, #23d5ab);
  background-size: 300% 300%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
