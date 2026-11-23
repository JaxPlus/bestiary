<script setup lang="ts">

const props = defineProps<{
    letter: string
}>()
</script>

<template>
    <div class="h-30 w-20 md:h-60 md:w-35 flex items-center justify-center text-6xl md:text-8xl bg-accent rounded-lg select-none">
        {{ letter }}
    </div>
</template>
