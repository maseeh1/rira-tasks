<template>
    <nav class="">
        <ul class="flex items-center -space-x-px h-10 text-sm">
            <li>
                <div @click="prevItem" :class="[
                    id == 1
                        ? ['pointer-events-none', 'text-slate-200']
                        : 'text-gray-500 cursor-pointer',
                ]"
                    class="flex items-center justify-center px-3 h-10 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                </div>
            </li>
            <li v-for="item in displayedItems" :key="item.id ? item.id : Math.random(20)"
                :class="[item.id == id ? ['bg-slate-200', 'font-bold'] : 'bg-white']">
                <div @click="specificItem(item.id)"
                    class="min-w-[50px]  flex items-center justify-center px-3 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    :class="[!item.id ? 'pointer-events-none' : 'cursor-pointer']">
                    {{ item.id || item }}</div>
            </li>
            <li>
                <div :class="[
                    id == items.length
                        ? ['pointer-events-none', 'text-slate-200']
                        : 'text-gray-500 cursor-pointer',
                ]" @click="nextItem"
                    class="flex items-center justify-center px-3 h-10 leading-tight bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['items', 'id'])
const emits = defineEmits(['nextItem', 'previousItem', 'specificItem'])

const nextItem = () => {
    emits("nextItem");
};
const prevItem = () => {
    emits("previousItem");
};
const specificItem = (id) => {
    emits("specificItem", id)
}

const displayedItems = computed(() => {
    const itemsNum = props.items.length;
    const currentId = props.id;

    if (itemsNum <= 8) {
        return props.items;
    } else {
        let newItems = []
        if (currentId < 5) {
            newItems = [props.items[0], props.items[1], props.items[2], props.items[3], props.items[4], '...', props.items[itemsNum - 1]]
        } else if (currentId > itemsNum - 4) {
            newItems = [props.items[0], '...', props.items[itemsNum - 5], props.items[itemsNum - 4], props.items[itemsNum - 3], props.items[itemsNum - 2], props.items[itemsNum - 1]]
        } else {
            newItems = [props.items[0], '...', props.items[currentId - 2], props.items[currentId - 1], props.items[currentId], '...', props.items[itemsNum - 1]]
        }
        return newItems
    }
});

</script>

<style lang="scss" scoped></style>