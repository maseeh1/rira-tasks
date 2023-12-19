<template>
  <div class="w-full block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-md">
    <div class="pt-5 pb-2 mx-8 border-solid border-brand-gray-2">
      <h2 class="mb-2 text-2xl">
        {{ job.title }}
      </h2>
      <div class="flex flex-row align-middle">
        <div class="mr-5 font-bold">
          <span>{{ job.organization }}</span>
        </div>
        <div>
          <li v-for="location in job.locations" :key="location" class="inline-block mr-5">
            {{ location }}
          </li>
        </div>
      </div>
    </div>
    <div class="px-8 py-4">
      <div>
        <h3 class="mt-1 mb-2">Qualifications:</h3>
        <div>
          <ul class="pl-8 list-disc">
            <li v-for="qualification in job.minimumQualifications" :key="qualification">
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-2 text-center">
        <router-link :to="{ name: 'JobsList' }" class="text-blue-500">Expand</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["job"]);

</script>

<style lang="scss" scoped></style>
