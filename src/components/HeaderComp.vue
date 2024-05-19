<template>
  <header>
    <RouterLink to="/">
      <img src="@/assets/images/logo-blue.svg" class="logo" alt="logo" />
    </RouterLink>

    <nav :class="{ hidden: windowWidth < 640 && !isMenuOpen }">
      <RouterLink to="/" activeClass="active" @click="isMenuOpen = false">Registration</RouterLink>
      <RouterLink to="/profile" activeClass="active" @click="isMenuOpen = false">Profile</RouterLink>
    </nav>

    <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
      <img :src="getImageUrl" alt="menu" />
    </button>

    <div class="overlay" :class="{ hidden: windowWidth > 640 || !isMenuOpen }" @click="isMenuOpen = !isMenuOpen"></div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const windowWidth: Ref<number> = useWindowSize().width
const isMenuOpen: Ref<boolean> = ref(false)

const getImageUrl = computed(() => {
  return isMenuOpen.value
    ? new URL('../assets/images/close-icon.svg', import.meta.url).href
    : new URL('../assets/images/menu-icon.svg', import.meta.url).href
})

watch(windowWidth, (newWindowWidth) => {
  if (newWindowWidth > 640) {
    isMenuOpen.value = false;
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/grid-variables.scss';

@media screen and (min-width: map-get($grid-breakpoints, 'xs-tablet')) {
  header {
    padding-left: pxToRem(50px);
    padding-right: pxToRem(50px);
  }
}
@media screen and (max-width: map-get($grid-breakpoints, 'xs-tablet')) {
  header {
    padding-left: pxToRem(10px);
    padding-right: pxToRem(10px);
  }
}
header {
  overflow: hidden;
  background-color: var(--white);
  padding-top: pxToRem(10px);
  padding-bottom: pxToRem(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--black);
    opacity: 40%;
    z-index: 2;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: pxToRem(20px);
    align-items: center;

    a {
      color: var(--black);
      text-align: center;
      text-decoration: none;
      font-size: pxToRem(18px);
      line-height: 25px;
      border-radius: 4px;
      padding: pxToRem(10px) pxToRem(20px);

      &:hover {
        background-color: grey;
      }
    }

    @media screen and (max-width: map-get($grid-breakpoints, 'xs-tablet')) {
      & {
        position: fixed;
        right: 0;
        top: 0;
        flex-direction: column;
        background-color: var(--white);
        width: 40vw;
        height: 100%;
        padding: pxToRem(80px) 0 0 0;
        z-index: 3;
        animation: slide-right 0.5s ease-out;
        display: flex;

        a {
          width: 100%;
          border-radius: 0;
        }
      }
    }

    @media screen and (max-width: map-get($grid-breakpoints, 'xs-phone')) {
      & {
        width: 100vw;
      }
    }
  }
  .logo {
    height: pxToRem(100px);
  }

  .active {
    background: var(--primary-color);
  }

  .mobile-menu-btn {
    display: none;
    border: 0;
    width: pxToRem(50px);
    height: pxToRem(50px);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    z-index: 3;

    img {
      height: pxToRem(30px);
      width: pxToRem(30px);
    }

    @media screen and (max-width: map-get($grid-breakpoints, 'xs-tablet')) {
      & {
        display: block;
        position: absolute;
        right: pxToRem(20px);
        top: pxToRem(20px);
      }
    }
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
