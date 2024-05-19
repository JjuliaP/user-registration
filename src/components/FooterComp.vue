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
@media screen and (min-width: 700px) {
  footer {
    padding-left: 50px;
    padding-right: 50px;
  }

  .contacts-section {
    flex-direction: row;
    gap: 20px;
  }
}

@media screen and (max-width: 699px) {
  footer {
    padding-left: 10px;
    padding-right: 10px;
  }

  .contacts-section {
    flex-direction: column;
    gap: 0px;
  }
}

footer {
  color: var(--black);
  overflow: hidden;
  background-color: var(--white);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;

  .logo {
    height: 100px;
  }
}

.contacts-section {
  display: flex;
  align-items: center;

  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
}

.navigation-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  h4 {
    font-weight: 600;
  }

  a {
    color: var(--black);
    font-size: 12px;
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
