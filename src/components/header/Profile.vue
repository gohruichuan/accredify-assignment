<template lang="pug">
div.text-center
  VMenu(:close-on-content-click="true" location="bottom")
    template(v-slot:activator="{ props }")
      VBtn.profileBtn(
        v-bind="props"
        variant="flat"
        append-icon="mdi-chevron-down")
        div.profileImg
          p GG
        p.username.ml-2 {{profileStore.name}}
    VCard.profileCard
      VList.profileList
        div.profileImg.large
          p GG
        VListItem(
          :title="profileStore.name"
          :subtitle="profileStore.name")
      VDivider.mt-2.mb-2
      VList
        VListItem.d-flex
          VBtn(
            prepend-icon="mdi-logout"
            @click="logout"
          ) Log out
</template>

<script lang="ts" setup>
import { useProfileStore } from "@/store/profile";

const profileStore = useProfileStore();

const logout = () => {
  profileStore.logout();
};
</script>

<style lang="scss">
.profileCard {
  min-width: 272px;
  padding: 12px;

  .profileList {
    padding: 12px;
    display: flex;
    align-items: center;
  }
}

.profileImg {
  background-color: $primary-p-50;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: $white;
  text-align: center;
  line-height: 25px;
  &.large {
    width: 48px !important;
    height: 48px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.profileBtn {
  height: 40px !important;

  .username {
    text-transform: capitalize !important;
  }
}
</style>
