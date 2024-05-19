<template>
  <header>
    <RouterLink to="/">
      <img src="@/assets/images/logo-blue.svg" class="logo" alt="logo" />
    </RouterLink>

    <nav class="header-right">
      <RouterLink to="/" activeClass="active">Registration</RouterLink>
      <RouterLink to="/profile" activeClass="active">Profile</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@media screen and (min-width: 700px) {
  header {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media screen and (max-width: 699px) {
  header {
    padding-left: 10px;
    padding-right: 10px;
  }
}
header {
  overflow: hidden;
  background-color: var(--white);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    a {
      color: var(--black);
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 25px;
      border-radius: 4px;
      padding: 10px 20px;

      &:hover {
        background-color: grey;
      }
    }
  }
  .logo {
    height: 100px;
  }

  .active {
    background: var(--primary-color);
  }
}
</style>
