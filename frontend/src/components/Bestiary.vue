<script setup lang="ts">
const props = defineProps<{
    title: string,
    author: string,
}>()
</script>

<template>
    <div class="flex flex-col items-center justify-center m-4">
        <RouterLink :to="'/my-bestiaries/' + title">
            <div class="h-60 w-40 bg-accent rounded-lg">
            </div>
        </RouterLink>
        <h4 class="text-xl m-1">{{ title }}</h4>
    </div>
</template>