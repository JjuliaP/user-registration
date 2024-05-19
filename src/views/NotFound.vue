<template>
  <section class="container">
    <img src="@/assets/images/404.webp" alt="404" class="error-icon" />
    <div class="redirect-container">
      <button class="redirect-btn" @click="router.push('/')">
        Return to main page</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style lang="scss" scoped>
.error-icon {
  width: 100%;
  margin: 0 auto;
}
.redirect-container {
  display: flex;
}
.redirect-btn {
  margin: auto;
  background: var(--white);
  border: 1px solid var(--black);
  outline: none;
  cursor: pointer;
  padding: pxToRem(10px) pxToRem(20px);
  font-weight: bold;
  text-decoration: none;
  color: var(--black);
}
</style>
