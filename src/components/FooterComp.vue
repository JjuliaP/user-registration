<template>
  <footer>
    <RouterLink to="/">
      <img src="@/assets/images/logo-black.svg" class="logo" alt="logo" />
    </RouterLink>

    <section class="navigation-section">
      <h4>Navigation</h4>
      <RouterLink to="/">Registration</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </section>

    <section class="contacts-section">
      <a href="https://www.linkedin.com/in/yulia-pavliv-86a927130/">
        <img src="@/assets/images/linkedin-icon-black.svg" alt="linkedIn" />
      </a>
      <a href="mailto:juli.pavliv@gmail.com">
        <img src="@/assets/images/mail-icon-black.svg" alt="mail" />
      </a>
      <a href="tel:+48737874655">
        <img src="@/assets/images/phone-circle-black.svg" alt="phone" />
      </a>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/styles/grid-variables.scss';

@media screen and (min-width: map-get($grid-breakpoints, 'xs-tablet')) {
  footer {
    padding-left: pxToRem(50px);
    padding-right: pxToRem(50px);
  }

  .contacts-section {
    flex-direction: row;
    gap: pxToRem(20px);
  }
}

@media screen and (max-width: map-get($grid-breakpoints, 'xs-tablet')) {
  footer {
    padding-left: pxToRem(10px);
    padding-right: pxToRem(10px);
  }

  .contacts-section {
    flex-direction: column;
    gap: 0;
  }
}

footer {
  color: var(--black);
  overflow: hidden;
  background-color: var(--white);
  padding-top: pxToRem(10px);
  padding-bottom: pxToRem(10px);
  display: flex;
  justify-content: space-between;

  .logo {
    height: pxToRem(100px);
  }
}

.contacts-section {
  display: flex;
  align-items: center;

  img {
    height: pxToRem(30px);
    width: pxToRem(30px);
    cursor: pointer;
  }
}

.navigation-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: pxToRem(10px);

  h4 {
    font-weight: 600;
  }

  a {
    color: var(--black);
    font-size: pxToRem(12px);
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
