<template>
  <div class="flex gap-4 justify-center bg-gray-100 h-20 items-center">
    <router-link :to="{ name: 'HomeView' }">
      <action-button :boldText="route.name === 'HomeView' ? true : false">Home</action-button>
    </router-link>
    <router-link :to="{ name: 'JobsList' }">
      <action-button :boldText="route.name === 'JobsList' ? true : false">Jobs List</action-button>
    </router-link>
    <router-link :to="{ name: 'VideoPlayer' }">
      <action-button :boldText="route.name === 'VideoPlayer' ? true : false">Video Player</action-button>
    </router-link>
  </div>
</template>

<script setup>
import ActionButton from "@/components/ActionButton.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
