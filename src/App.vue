<template lang="pug">
VApp
  Login(v-if="!isLoggedIn")
  Sidebar
  p {[ profileStore.id ]}
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
