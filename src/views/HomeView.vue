<template>
  <div class="text-3xl flex gap-3 flex-col justify-center py-32">
    <router-link :to="{ name: 'JobsList' }" class="flex justify-center gap-2">
      <div>Task 1: </div>
      <div>Pagination</div>
    </router-link>
    <router-link :to="{ name: 'VideoPlayer' }" class="flex justify-center gap-2">
      <div>Task 2: </div>
      <div>Video Player</div>
    </router-link>
  </div>
</template>

<script setup>
import ActionButton from "@/components/ActionButton.vue";
</script>

<style lang="scss" scoped></style>
