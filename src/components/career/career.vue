<template lang="pug">
.career
  h1.mb-2 Career Goal
  div.container
    h6.mb-6 Your Progress
    CircleProgress.mb-6(
      :progress="progress")
      p {{ progress }}
    p.meta I want to become a
    h4.mb-6 {{ careerName }}
    h6.insightsBtn View Insights
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import CircleProgress from "@/components/career/CircleProgress.vue";
import { useCareerGoal } from "@/store/career";

const careerGoalStore: any = useCareerGoal();
let progress = ref("");
let careerName = ref("");

watchEffect(() => {
  if (careerGoalStore.careerGoalData.length) {
    const data = careerGoalStore.careerGoalData[0];
    progress.value = data.progress + "%";
    careerName.value = data.name;
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
    flex: 1 0 0;
    align-self: stretch;

    // .v-progress-circular {
    //   width: 180px !important;
    //   height: 180px !important;
    //   .v-progress-circular__underlay,
    //   .v-progress-circular__overlay {
    //     stroke-width: 3px;
    //   }
    //   .v-progress-circular__overlay {
    //     stroke-linecap: round;
    //     stroke: $primary-p-50;
    //   }

    //   .v-progress-circular__content {
    //     p {
    //       color: $purple-p-70;
    //       font-size: 28px !important;
    //       font-weight: 700 !important;
    //       line-height: 44px !important;
    //     }
    //   }
    // }

    .insightsBtn {
      cursor: pointer;
      color: $primary-p-50 !important;
      padding-bottom: 13px;

      font-size: 14px;
      font-weight: 700;
      line-height: 24px;

      &:hover {
        transition: 0.5s;
        color: $purple-p-70 !important;
      }
    }
  }
}
</style>
