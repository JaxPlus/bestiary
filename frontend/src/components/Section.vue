<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
    title: string
}>()

const showMore = ref(true)
</script>

<template>
    <div class="w-full my-4 border border-border rounded-lg">
        <h3 @click="showMore = !showMore" :class="showMore ? 'border-b-border' : 'border-0 rounded-b-lg'" class="flex items-center justify-between p-2 text-lg font-bold bg-linear-to-r from-surface-raised from-10% via-surface via-15% to-background to-70% border rounded-t-lg border-x-0 border-t-0 cursor-pointer">
            <span class="select-none">{{ title }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" fill-rule="evenodd" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z" />
            </svg>
        </h3>
        <p v-if="showMore" class="p-4"><slot /></p>
    </div>
</template>