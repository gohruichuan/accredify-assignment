<template lang="pug">
div.header
  Profile.float-right(v-if="profileStore.isLoggedIn")
</template>

<script lang="ts" setup>
import { useProfileStore } from "@/store/profile";
import Profile from "@/components/header/Profile.vue";

const profileStore = useProfileStore();
</script>

<style lang="scss">
.header {
  height: 64px;
  padding: 12px 32px 12px 0;
}
</style>
