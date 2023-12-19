<template>
    <div class="flex justify-center w-full mt-20">
        <div class="max-w-4xl flex flex-col gap-3">
            <div class="flex items-center gap-3 mx-auto">
                <span>Number of items per page:</span>
                <Dropdown v-model="itemsInPage" :options="[5, 10, 20, 40]" class="h-10 border rounded-lg"
                    @change="router.push({ name: 'JobsList', query: { page: '1' } })" />
            </div>
            <job-card v-for="job of displayedJobs" :key="job.id" :job="job"></job-card>
            <navigation-bar :nextPage="nextPage" :previousPage="previousPage" :currentPage="currentPage"
                routeName="JobsList" :maxPage="maxPage"></navigation-bar>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Dropdown from 'primevue/dropdown';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import NavigationBar from "../components/NavigationBar.vue";

import JobCard from "../components/JobCard.vue";
import getJobs from "@/api/getJobs";

const router = useRouter()

const itemsInPage = ref(10)

const jobs = ref([]);

onMounted(() => {
    getJobs().then((res) => (jobs.value = res));
});

const currentPage = useCurrentPage();

const maxPage = computed(() => Math.ceil(jobs.value.length / itemsInPage.value));

const { previousPage, nextPage } = usePreviousAndNextPages(
    currentPage,
    maxPage
);

const displayedJobs = computed(() => {
    const pageNumber = currentPage.value;
    const firstJobIndex = (pageNumber - 1) * itemsInPage.value;
    const lastJobIndex = pageNumber * itemsInPage.value;
    return jobs.value.slice(firstJobIndex, lastJobIndex);
});
</script>

<style lang="scss" scoped></style>
