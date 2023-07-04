<template lang="pug">
.career(v-if="isPersonal && careerName && progress")
  h4.mb-2 Career Goal
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
import { useProfileStore } from "@/store/profile";

const careerGoalStore: any = useCareerGoal();
const profileStore: any = useProfileStore();

let progress = ref("");
let careerName = ref("");
let isPersonal = ref(false);

watchEffect(() => {
  if (careerGoalStore.careerGoalData && careerGoalStore.careerGoalData.length) {
    const data = careerGoalStore.careerGoalData[0];
    progress.value = data.progress + "%";
    careerName.value = data.name;
  }
});

watchEffect(() => {
  if (profileStore.isPersonal) {
    isPersonal.value = profileStore.isPersonal;
  }
});
</script>

<style lang="scss">
.career {
  .container {
    min-height: 433px;

    display: flex;
    padding: 32px 40px;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;

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
