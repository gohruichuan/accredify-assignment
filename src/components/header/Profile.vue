<template lang="pug">
div.text-center
  VMenu(v-model="menu" :close-on-content-click="false" location="bottom")
    template(v-slot:activator="{ props }")
      VBtn.profileBtn(
        v-bind="props"
        variant="flat"
        append-icon="mdi-chevron-down")
        div.profileImg
          p GG
        p.ml-2 Gerald Goh
    VCard(min-width="300")
      VList
        VListItem(prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
          title="John Leider"
          subtitle="Founder of Vuetify")
          template(v-slot:append)
            VBtn(variant="text"
              :class="fav ? 'text-red' : ''"
              icon="mdi-heart"
              @click="fav = !fav")
      VDivider
      VList
        VListItem
          VSwitch(v-model="message"
            color="purple"
            label="Enable messages"
            hide-details)
        VListItem
          VSwitch(v-model="hints"
            color="purple"
            label="Enable hints"
            hide-details)
      VCardActions
        VSpacer
        VBtn(variant="text" @click="menu = false")
          p Cancel
        VBtn(color="primary" variant="text" @click="menu = false")
          p Save
</template>

<script lang="ts" setup>
import { ref } from "vue";
let fav = ref(true);
let menu = ref(false);
let message = ref(false);
let hints = ref(true);
</script>

<style lang="scss">
.profileBtn {
  height: 40px !important;

  .profileImg {
    background-color: $primary-p-50;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: $white;
    text-align: center;
    line-height: 25px;
  }
}
</style>
