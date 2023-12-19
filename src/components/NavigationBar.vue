<template>
    <div class="my-6 mx-auto">
        <div class="flex flex-row flex-nowrap items-center justify-center">
            <pagination-box :items="pages" class="justify-center" :id="currentPage" @next-item="nextPage"
                @previous-item="previousPage" @specific-item="specificItem"></pagination-box>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import PaginationBox from './PaginationBox.vue';
const props = defineProps(["currentPage", "previousPage", "nextPage", "routeName", "maxPage"])

const router = useRouter()

const pages = ref([])
watch(() => props.maxPage, (newValue) => {
    pages.value = []
    for (let i = 1; i <= Number(newValue); i++) {
        pages.value.push({ id: i })
    }
})

const nextPage = () => {
    router.push({ name: props.routeName, query: { page: props.nextPage } })
}

const previousPage = () => {
    router.push({ name: props.routeName, query: { page: props.previousPage } })
}

const specificItem = (pageId) => {
    router.push({ name: props.routeName, query: { page: pageId } })
}
</script>

<style lang="scss" scoped></style>