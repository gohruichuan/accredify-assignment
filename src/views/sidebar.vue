<script lang="ts" setup>
import { reactive } from "vue";
import { ref } from "vue";

interface Button {
  name: string;
  icon?: string;
  img?: string;
  path: string;
  selected: boolean;
}

const logo: string = new URL("../assets/logo.jpg", import.meta.url).href;

const buttons: Button[] = reactive([
  {
    name: "Home",
    img: new URL("../assets/icons/home.png", import.meta.url).href,
    path: "/",
    selected: true,
  },
  {
    name: "Documents",
    img: new URL("../assets/icons/documents.png", import.meta.url).href,
    path: "/",
    selected: false,
  },
  {
    name: "Ideas",
    img: new URL("../assets/icons/bulb.png", import.meta.url).href,
    path: "/",
    selected: false,
  },
  {
    name: "Protect",
    img: new URL("../assets/icons/shield.png", import.meta.url).href,
    path: "/",
    selected: false,
  },
  {
    name: "Settings",
    img: new URL("../assets/icons/settings.png", import.meta.url).href,
    path: "/",
    selected: false,
  },
]);

const selectedPage = (selectedBtn: Button) => {
  selectedBtn.selected = true;

  buttons.map((btn) => {
    if (btn !== selectedBtn) btn.selected = false;
  });
};
</script>

<template lang="pug">
.sidebar.d-inline.block
  a(href="/")
    VImg.logo(
      :src="logo"
    )

  div(v-for="btn in buttons")
    VBtn.nav-btn(
      :class=`{"selected" : btn.selected}`
      variant="flat"
      :title="btn.name"
      :to="btn.path"
      @click="selectedPage(btn)"
    )
      VImg(
        width="24"
        height="24"
        :src="btn.img"
      )
  </template>

<style lang="scss">
.sidebar {
  background: $primary-n-80;
  width: 60px;
  height: 100%;
  position: absolute;
  padding-top: 8px;
  text-align: center;

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 10px 24px 10px;
  }
  .nav-btn {
    background-color: $primary-n-80;
    color: $neutral-n-30;
    border-radius: 0;
    width: 100%;
    height: 60px;
    margin: 4px 0;

    &.selected {
      background: rgba(255, 255, 255, 0.3) !important;
    }
  }

  .v-btn__overlay {
    opacity: 0;
  }

  .v-btn--size-default {
    min-width: 60px;
  }
}
</style>
