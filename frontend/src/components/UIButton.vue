<script setup lang="ts">
const props = defineProps<{
    variant: "primary" | "secondary",
    route: string
}>()
</script>

<template>
    <button v-if="variant == 'primary'" class="p-3 rounded-lg bg-primary cursor-pointer">
        <RouterLink :to="route"><slot /></RouterLink>
    </button>
    <button v-else class="p-3 rounded-lg border-border border-2 cursor-pointer">
        <RouterLink :to="route"><slot /></RouterLink>
    </button>
</template>