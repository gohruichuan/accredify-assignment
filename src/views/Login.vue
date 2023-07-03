<template lang="pug">
.loginPage
  VContainer
    VImg.logo.mb-2(
      :src="logo"
    )
    p.mb-2 Login as {{username}}
    VBtn.loginBtn(
      @click="login")
      p Login
</template>

<script lang="ts" setup>
import profileAPI from "@/apis/profile";
import { onMounted } from "vue";
const username = "geraldgoh@gmail.com";

const logo: string = new URL("@/assets/logo.jpg", import.meta.url).href;

const login = async () => {
  const loginParams = {
    username: username,
  };

  try {
    await profileAPI.login(loginParams);
  } catch (err) {
    console.error(err);
  }
};
</script>

<style lang="scss">
.loginPage {
  background: $white;
  height: 100vh;
  text-align: center;
  .loginBtn {
    background: $primary-n-80;
    color: $white;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: auto;
  }
}
</style>
