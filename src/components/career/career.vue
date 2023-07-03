<template lang="pug">
.career
  h1.mb-2 Career Goal
  div.container
    p Your Progress
    VProgressCircular(:rotate="360"
      :size="100"
      :width="15"
      :model-value="progress"
      color="teal")
      p {{ progress }}
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useCareerGoal } from "@/store/career";

const careerGoalStore: any = useCareerGoal();
let progress = ref("");

watchEffect(() => {
  if (careerGoalStore.careerGoalData.length) {
    progress.value = careerGoalStore.careerGoalData[0].progress + "%";
  }
});

// const progress = computed(() => {
//   return useCareerGoal.careerGoalData && useCareerGoal.careerGoalData[0].progress;
// });
</script>

<style lang="scss">
.career {
  .container {
    display: flex;
    padding: 32px 40px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;

    .v-progress-circular {
      width: 180px !important;
      height: 180px !important;
      .v-progress-circular__underlay,
      .v-progress-circular__overlay {
        stroke-width: 3px;
      }
      .v-progress-circular__overlay {
        stroke-linecap: round;
        stroke: $purple-p-50;
      }

      .v-progress-circular__content {
        color: $purple-p-70;
        font-size: 28px;
        font-weight: 700;
        line-height: 44px;
      }
    }
  }
}
</style>
