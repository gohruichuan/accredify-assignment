<template lang="pug">
VProgressCircular.mb-6(
  :rotate="360"
  :width="15"
  :model-value="props.progress")
  p {{ props.progress }}
</template>

<script lang="ts" setup>
const props = defineProps({
  progress: { type: Number, default: 0 },
});
</script>

<style lang="scss">
.v-progress-circular {
  width: 180px !important;
  height: 180px !important;
  .v-progress-circular__underlay,
  .v-progress-circular__overlay {
    stroke-width: 3px;
  }
  .v-progress-circular__overlay {
    stroke-linecap: round;
    stroke: $primary-p-50;
  }

  .v-progress-circular__content {
    p {
      color: $purple-p-70;
      font-size: 28px !important;
      font-weight: 700 !important;
      line-height: 44px !important;
    }
  }
}
</style>
