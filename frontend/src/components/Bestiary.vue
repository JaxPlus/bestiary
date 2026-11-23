<script setup lang="ts">
import Cover from "./Cover.vue";

const props = defineProps<{
    title: string,
    author: string,
}>()
</script>

<template>
    <div class="flex flex-col items-center justify-center m-4">
        <RouterLink :to="'/my-bestiaries/' + title">
            <Cover :letter="title[0]" />
        </RouterLink>
        <h4 class="text-xl m-1 text-nowrap">{{ title }}</h4>
    </div>
</template>