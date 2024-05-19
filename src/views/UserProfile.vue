<template>
  <section class="container">
    <section v-if="userData.firstName">
      <img v-if="userData.avatar" :src="userData?.avatar" alt="avatar" class="user-avatar" />
      <h1 class="user-name">{{ userData.firstName }} {{ userData.lastName }}</h1>
      <section class="user-data-container">
        <div class="user-data-row">
          <span class="label">Email:</span>
          <span class="user-data">{{ userData.email }}</span>
        </div>
        <div class="user-data-row">
          <span class="label">Phone:</span>
          <span class="user-data">{{ userData.phoneNumber }}</span>
        </div>
        <div class="user-data-row">
          <span class="label">Birthday:</span>
          <span class="user-data">{{ moment(userData.birthday).format('MMM Do YYYY') }}</span>
        </div>
        <div class="user-data-row">
          <span class="label">About:</span>
          <span class="user-data">{{ userData.about }}</span>
        </div>
      </section>
    </section>

    <dialog class="dialog" v-else>
      <p>User data is missiong or corrupt. Please, register.</p>
      <form method="dialog">
        <button @click="router.push('/')">Register</button>
      </form>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import type { UserData } from '@/interfaces/user-data.interface'
import type { Ref } from 'vue'
import { ref } from 'vue'
import moment from 'moment'
import router from '@/router'

const userData: Ref<UserData> = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  birthday: null,
  about: '',
  avatar: '',
})

let savedUserData
try {
  savedUserData = JSON.parse(sessionStorage.getItem('userData') || '')
} catch (e) {
  savedUserData = {}
}
userData.value = savedUserData
</script>

<style lang="scss" scoped>
@import '../assets/styles/grid-variables.scss';
.user-avatar {
  display: block;
  height: pxToRem(100px);
  width: pxToRem(100px);
  border-radius: 50%;
  margin: auto;
}
.user-name {
  text-align: center;
  font-weight: bold;
}
.user-data-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
  gap: pxToRem(10px);

  .user-data-row {
    display: flex;
    flex-direction: row;
    gap: pxToRem(10px);

    .label {
      font-weight: bold;
    }
  }
}

.dialog {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  border-radius: 30px;

  button {
    margin-top: pxToRem(15px);
    background: var(--primary-color);
    padding: pxToRem(10px) pxToRem(20px);
    width: pxToRem(100px);
    border-radius: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: pxToRem($base-font);
  }
}
</style>
