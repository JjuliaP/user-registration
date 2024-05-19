<template>
  <main class="user-registration-container">
    <h1 class="form-header">User Registration</h1>

    <form class="user-data-form" @submit.prevent="onCheckForm">
      <div>
        <div class="form-field first-name-field">
          <input
            type="text"
            name="firstName"
            id="first-name"
            class="input-field"
            maxlength="100"
            required
            v-model.lazy="userData.firstName"
            @blur="validateName(userData.firstName, 'firstName')"
          />

          <label for="firstName" :class="{ floated: userData.firstName.length }" class="floating-label">
            First Name
            <span class="required">*</span>
          </label>
        </div>
        <span class="error" v-if="errors.firstName">
          {{ errors.firstName }}
        </span>
      </div>
      <div>
        <div class="form-field last-name-field">
          <input
            type="text"
            name="lastName"
            id="last-name"
            class="input-field"
            maxlength="100"
            required
            v-model.lazy="userData.lastName"
            @blur="validateName(userData.lastName, 'lastName')"
          />

          <label for="lastName" :class="{ floated: userData.lastName.length }" class="floating-label">
            Last Name
            <span class="required">*</span>
          </label>
        </div>
        <span class="error" v-if="errors.lastName">
          {{ errors.lastName }}
        </span>
      </div>

      <div>
        <div class="form-field email-field">
          <input
            type="email"
            name="email"
            id="email"
            class="input-field"
            maxlength="100"
            required
            v-model.lazy="userData.email"
            @blur="validateEmail"
          />

          <label for="email" :class="{ floated: userData.email.length }" class="floating-label">
            Email Address
            <span class="required">*</span>
          </label>
        </div>
        <span class="error" v-if="errors.email">
          {{ errors.email }}
        </span>
      </div>

      <div>
        <div class="form-field phone-field">
          <input
            type="tel"
            name="phoneNumber"
            id="phone-number"
            class="input-field"
            maxlength="9"
            v-model.lazy="userData.phoneNumber"
            @blur="validatePhoneNumber"
            required
          />

          <label for="phoneNumber" :class="{ floated: userData.phoneNumber.length }" class="floating-label">
            Phone Number
            <span class="required">*</span>
          </label>
        </div>
        <span class="error" v-if="errors.phoneNumber">
          {{ errors.phoneNumber }}
        </span>
      </div>

      <div>
        <div class="form-field birthday-field">
          <VueDatePicker
            v-model.lazy="userData.birthday"
            :enable-time-picker="false"
            :clearable="false"
            :max-date="new Date()"
            min-date="1900-01-01"
            prevent-min-max-navigation
            name="birthday"
            id="birthday"
            calendar-cell-class-name="birthday-cell"
            input-class-name="input-field-birthday"
          ></VueDatePicker>

          <label for="birthday" :class="{ floated: userData.birthday }" class="floating-label">
            Birthday
            <span class="required">*</span>
          </label>
        </div>
        <span class="error" v-if="errors.birthday">
          {{ errors.birthday }}
        </span>
      </div>

      <div>
        <div class="form-field">
          <textarea
            name="about"
            id="about"
            class="input-field input-textarea"
            maxlength="500"
            v-model="userData.about"
            required
          >
          </textarea>

          <label for="about" :class="{ floated: userData.about.length }" class="floating-label textarea-label">
            Information About Yourself
            <span class="required">*</span>
          </label>

          <div class="textarea-symbols-counter">
            <span class="current">{{ userData.about.length }}</span>
            <span class="maximum">/ 500</span>
          </div>
        </div>
      </div>

      <div class="form-field avatar-field">
        <label for="avatar" class="button custom-file-upload">
          Avatar
          <span class="required">*</span>
        </label>

        <input
          required
          type="file"
          name="avatar"
          id="avatar"
          accept="image/png, image/jpeg"
          @change="onUserAvatarChange($event)"
        />

        <span v-if="fileName">{{ fileName }}</span>
      </div>

      <input type="submit" value="Submit" class="button submit-form" :disabled="!isSubmitButtonEnabled" />
    </form>
  </main>
</template>

<script setup lang="ts">
import type { UserData } from '@/interfaces/user-data.interface'
import type { Ref } from 'vue'
import router from '@/router'
import { computed, ref } from 'vue'

const userData: Ref<UserData> = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  birthday: null,
  about: '',
  avatar: '',
})
const fileName: Ref<string> = ref('')
const errors: Ref<{ [key: string]: any }> = ref({})

const nameRegexp = /^[a-z][a-z\-]*/i
const phoneRegexp = /^[1-9]{1}[0-9]{8}$/i
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
const nameMaxLength = 200
const nameMinLength = 2

const isSubmitButtonEnabled = computed(() => {
  return Object.values(userData.value).every((value) => !!value)
})

function onCheckForm(): void {
  sessionStorage.setItem('userData', JSON.stringify(userData.value))
  router.push('/profile')
}

function onUserAvatarChange($event: Event): void {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    const file = target.files[0]
    fileName.value = file.name
    const reader = new FileReader()
    reader.onloadend = () => {
      userData.value.avatar = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

function validateEmail(): void {
  if (!userData.value.email.length) {
    errors.value['email'] = ''
  } else if (!emailRegexp.test(userData.value.email)) {
    errors.value['email'] = 'Invalid email address'
  } else {
    errors.value['email'] = ''
  }
}

function validatePhoneNumber(): void {
  if (userData.value.phoneNumber.length === 0 || phoneRegexp.test(userData.value.phoneNumber.toString())) {
    errors.value['phoneNumber'] = ''
  } else {
    errors.value['phoneNumber'] = 'Invalid phone number'
  }
}

function validateName(name: string, propertyName: string): void {
  if (name.length === 0) {
    errors.value[propertyName] = ''
  } else if (!nameRegexp.test(name)) {
    errors.value[propertyName] = 'Invalid name'
  } else if (name.length > nameMaxLength) {
    errors.value[propertyName] = `The length must be ${nameMaxLength} characters or fewer`
  } else if (name.length < nameMinLength) {
    errors.value[propertyName] = `The length must be ${nameMinLength} characters or more`
  } else {
    errors.value[propertyName] = ''
  }
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
.form-field {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;

  &.first-name-field .input-field,
  &.last-name-field .input-field,
  &.email-field .input-field,
  &.phone-field .input-field {
    background-repeat: no-repeat;
    background-size: pxToRem(17px) pxToRem(17px);
    background-position-x: 10px;
    background-position-y: center;

    &:focus {
      background-position-x: pxToRem(9px);
      border: 1px solid var(--primary-color);
    }
  }

  &.first-name-field .input-field,
  &.last-name-field .input-field {
    background-image: url('../assets/images/user-icon-grey.svg');
  }

  &.email-field .input-field {
    background-image: url('../assets/images/email-icon-grey.svg');
  }

  &.phone-field .input-field {
    background-image: url('../assets/images/phone-icon-grey.svg');
  }
}
.required {
  color: var(--red);
}
.user-registration-container {
  padding: pxToRem(30px) pxToRem(50px);
  border-radius: 15px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background: var(--white);
}
.form-header {
  margin-bottom: pxToRem(30px);
}

.birthday-field:focus-within .floating-label,
.input-field:focus ~ .floating-label,
.input-field:not(:focus):valid ~ .floating-label,
.floated {
  opacity: 40%;
  position: absolute;
  top: pxToRem(4px);
  bottom: pxToRem(10px);
  left: pxToRem(35px);
  font-size: pxToRem(11px);
}

.birthday-field:focus-within .floating-label,
.birthday-field .floated {
  top: pxToRem(3px);
}

:deep(.birthday-cell) {
  border-radius: 50%;
}

:deep(.birthday-selected-cell) {
  background-color: var(--primary-color);
}

:deep(.input-field-birthday),
.input-field {
  font-size: pxToRem(14px);
  background: var(--light-blue);
  border: none;
  outline: none;
  height: pxToRem(45px);
  border-radius: 10px;
  padding: pxToRem(25px) pxToRem(10px) pxToRem(12px) pxToRem(35px);
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: pxToRem(35px);
  top: pxToRem(10px);
  transition: 0.2s ease all;
}

.user-data-form {
  gap: pxToRem(20px);
  display: flex;
  flex-direction: column;
}

.input-textarea {
  resize: none;
  height: pxToRem(230px);
  border-top: 21px solid transparent;
  padding-top: 0;
}

/* Remove input type date placeholder */
input[type='date']::before {
  content: attr(placeholder);
  position: absolute;
  color: var(--light-blue);
  opacity: 28%;
}

input[type='date']:focus,
input[type='date']:invalid,
input[type='date']:valid {
  color: var(--black);
}

input[type='date']:focus::before,
input[type='date']:invalid::before,
input[type='date']:valid::before {
  content: '';
}

input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

input[type='file'] {
  display: none;
}

.button {
  background: var(--primary-color);
  padding: pxToRem(10px) pxToRem(20px);
  width: pxToRem(100px);
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: pxToRem($base-font);
}

.submit-form {
  margin: 0 auto;

  &:disabled {
    background: var(--light-grey);
    cursor: default;
  }
}

.textarea-symbols-counter {
  margin-left: auto;
  font-size: pxToRem(12px);
  color: var(--light-grey);
}

.avatar-field {
  flex-direction: row;
  align-items: center;
  gap: pxToRem(20px);
}

.error {
  color: var(--red);
  font-size: pxToRem(12px);
  padding-left: pxToRem(20px);
}
</style>
