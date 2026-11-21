<script setup lang="ts">
const props = defineProps<{
    name: string,
}>()
</script>

<template>
    <div class="flex flex-col items-center justify-center m-4">
        <RouterLink :to="$route.path + '/' + name">
            <div class="h-30 w-20 md:h-60 md:w-35 flex items-center justify-center text-8xl bg-accent rounded-lg">
                {{ name[0] }}
            </div>
        </RouterLink>
        <h4 class="text-xl text-nowrap m-1">{{ name }}</h4>
    </div>
</template>