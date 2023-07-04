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
        p.username.meta.ml-2 {{profileStore.name}}
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

  .v-list-item-title {
    color: $primary-n-80;
    /* Heading Five (16) */
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .v-list-item-subtitle {
    color: $neutral-n-60;
    /* Meta (14) */
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .v-btn__content,
  .mdi-logout {
    color: $neutral-n-60;

    /* Meta (14) */
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
}

.profileImg {
  background-color: $primary-p-50;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    color: $white !important;
  }
  &.large {
    width: 48px !important;
    height: 48px !important;
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
