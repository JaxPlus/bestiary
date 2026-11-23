<script setup lang="ts">
import Cover from "./Cover.vue";

const props = defineProps<{
    name: string,
}>()
</script>

<template>
    <div class="flex flex-col items-center justify-center m-4">
        <RouterLink :to="$route.path + '/' + name">
            <Cover :letter="name[0]" />
        </RouterLink>
        <h4 class="text-xl text-nowrap m-1">{{ name }}</h4>
    </div>
</template>