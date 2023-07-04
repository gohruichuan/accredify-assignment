<template lang="pug">
VApp
  Login(v-if="!isLoggedIn")
  Sidebar
  VMain
    Header
    router-view

</template>

<script lang="ts" setup>
import { computed } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/header/Header.vue";
import Login from "@/views/Login.vue";

import { useProfileStore } from "@/store/profile";

const profileStore = useProfileStore();
const isLoggedIn = computed(() => profileStore.isLoggedIn);
</script>

<style lang="scss">
.v-application {
  background: $primary-n-80;

  .v-main {
    width: calc(100vw - $sidebar-width);
    left: $sidebar-width;
    position: inherit;
    border-radius: 15px 0px 0px 15px;
    background: $white;
    z-index: 1;
  }

  .meta {
    color: $primary-n-80;
    /* Meta (14px) */
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  p {
    color: $neutral-n-60;
    /* Paragraph (16 px) */
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  h2 {
    /* Heading 2 (28px) */
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
  }
  h4 {
    /* Heading 4 (20px) */
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }

  h6 {
    color: $neutral-n-60;
    /* Heading 6 (14px) */
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
  }
}

* {
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
    background-color: $neutral-n-30;
  }
}
</style>
