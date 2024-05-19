<template>
  <section class="user-registration-container">
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
        <span class="user-data">{{ 
            moment(userData.birthday).format('MMM Do YYYY') 
        }}</span>
      </div>
      <div class="user-data-row">
        <span class="label">About:</span>
        <span class="user-data">{{ userData.about }}</span>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import type { UserData } from '@/interfaces/user-data.interface'
import type { Ref } from 'vue'
import { ref } from 'vue'
import moment from 'moment'

const userData: Ref<UserData> = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  birthday: null,
  about: '',
  avatar: '',
})

try {
  const savedUserData = sessionStorage.getItem('userData')
  userData.value = savedUserData ? JSON.parse(savedUserData) : {}
} catch (e) {
  // if localStorage not support, fallback
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 700px) {
  .user-registration-container {
    width: pxToRem(600px);
  }
}
@media screen and (max-width: 699px) {
  .user-registration-container {
    width: pxToRem(400px);
  }
}
.user-registration-container {
  padding: pxToRem(30px) pxToRem(50px);
  border-radius: 30px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background: var(--white);
  gap: pxToRem(20px);
}
.user-avatar {
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
</style>
