<template lang="pug">
VContainer.home
  h2.mb-2 Hi, {{profileStore.name}} 👋
  p Manage your documents issued by SMU Academy or track your career goal.
  .userData
    Career
    Career
</template>

<script lang="ts" setup>
import { useProfileStore } from "@/store/profile";
import Career from "@/components/career/career.vue";

const profileStore = useProfileStore();
</script>

<style lang="scss">
.home {
  padding: 48px 144px 323px 144px;

  .userData {
    padding-top: 56px;
    display: flex;
    margin: 0;
    column-gap: 32px;

    .container {
      border-radius: 6px;
      border: 1px solid $neutral-n-30;
    }
  }
}
</style>
