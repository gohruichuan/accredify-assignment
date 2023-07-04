<template lang="pug">
div.docItem(v-for="doc in props.documents")
  VImg.mr-4(
    :width="24"
    :height="24"
    :src="docIcon"
  )
  h6.title {{doc.document_name}}
  p.meta.mr-4 {{ formatDate(doc.updated_at)}}
  VBtn(
    :width="24"
    :height="24"
    variant="flat"
    icon="mdi-dots-vertical"
  )
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  documents: { type: Array, default: () => [] },
});

const docIcon = new URL("@/assets/icons/doc-purple.png", import.meta.url).href;

const formatDate = (updated_at: string) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const date = new Date(updated_at);
  const day = date.getUTCDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
</script>

<style lang="scss">
.docItem {
  display: flex;
  align-items: center;
  padding: 20px 16px;
  border-top: 1px solid #d0d2d6;
  box-shadow: 0px 1px 0px 0px #d0d2d6;
  .title {
    width: 540px;
  }
  .v-btn__overlay,
  .v-btn__underlay,
  .v-ripple__container {
    border-radius: 50px;
  }
  .v-img__img {
    height: 24px;
    width: 24px;
  }
}
</style>
