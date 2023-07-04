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
import { useProfileStore } from "@/store/profile";
import { onMounted } from "vue";
import { getJWT } from "@/scripts/utils";

const profileStore = useProfileStore();
const username = "geraldgoh@gmail.com";

const logo: string = new URL("@/assets/logo.jpg", import.meta.url).href;

const login = async () => {
  const loginParams = {
    username: username,
  };

  try {
    await profileStore.login(loginParams);
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  if (getJWT()) {
    return;
  }
  console.warn("entered login page");
});
</script>

<style lang="scss">
.loginPage {
  background: $white;
  height: 100vh;
  text-align: center;
  .loginBtn {
    background: $primary-n-80;
    p {
      color: $white !important;
    }
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: auto;
  }
}
</style>
