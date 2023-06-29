<script lang="ts" setup>
const logo = new URL("../assets/logo.jpg", import.meta.url).href;
</script>

<template lang="pug">
.sidebar.d-inline.block
  VImg.logo(
    :src="logo"
  )

  VBtn.nav-btn(
    variant="flat"
    icon="mdi-home"
    title="Click to open Menu"
  )
  </template>

<style lang="scss">
.sidebar {
  background: $primary-n-80;
  width: 60px;
  height: 100%;
  position: absolute;
  padding-top: 8px;
  text-align: center;

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 10px 28px 10px;
  }
  .nav-btn {
    background-color: transparent;
    color: $neutral-n-30;
    border-radius: 0;
    width: 100%;
    height: 60px;
  }
}
</style>
