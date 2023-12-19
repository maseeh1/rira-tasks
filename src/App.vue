<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <div class="h-20"></div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style lang="scss" scoped></style>
