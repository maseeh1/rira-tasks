<template>
  <button
    class="p-3 bg-blue-100 rounded-md border"
    :class="[props.boldText ? 'font-bold' : '']"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(["boldText"]);
</script>

<style lang="scss" scoped></style>
