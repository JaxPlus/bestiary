<script setup lang="ts">
const props = defineProps<{
    name: string,
}>()
console.log()
</script>

<template>
    <div class="flex flex-col items-center justify-center m-4">
        <RouterLink :to="$route.path + '/' + name">
            <div class="h-60 w-40 bg-accent rounded-lg">
            </div>
        </RouterLink>
        <h4 class="text-xl m-1">{{ name }}</h4>
    </div>
</template>