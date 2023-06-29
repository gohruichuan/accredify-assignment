<template lang="pug">
VApp
  Sidebar
  Header
  VMain
    router-view
</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
</script>
