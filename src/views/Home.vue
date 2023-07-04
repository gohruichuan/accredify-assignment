<template lang="pug">
VContainer.home
  h2.mb-2 Hi, {{profileStore.name}} 👋
  p Manage your documents issued by SMU Academy or track your career goal.
  .userData
    Career
    Documents
</template>

<script lang="ts" setup>
import { useProfileStore } from "@/store/profile";
import Career from "@/components/career/CareerGoal.vue";
import Documents from "@/components/document/Documents.vue";

const profileStore = useProfileStore();
</script>

<style lang="scss">
.home {
  display: inline-grid;
  align-items: center;
  justify-content: center;
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
