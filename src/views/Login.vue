<template lang="pug">
.loginPage
  VContainer
    VImg.logo.mb-2(
      :src="logo"
    )
    div(v-for="data in usernames")
      p.mb-2 Login as {{data.username}}
      VBtn.loginBtn.mb-5(
        @click="login(data.username)")
        p Login {{data.isPersonal? "Personal User" : "Managed User"}}
</template>

<script lang="ts" setup>
import { useProfileStore } from "@/store/profile";
import { onMounted } from "vue";
import { getJWT } from "@/scripts/utils";

const profileStore = useProfileStore();

const usernames = [
  { isPersonal: true, username: "geraldgoh@gmail.com" },
  { isPersonal: false, username: "batmantan@gmail.com" },
];

const logo: string = new URL("@/assets/logo.jpg", import.meta.url).href;

const login = async (username: string) => {
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
