<script setup lang="ts">

import UIButton from "../components/UIButton.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <h2 class="text-4xl">Create your own</h2>
        <h1 class="text-8xl mb-6">Bestiary</h1>
        <div>
            <UIButton class="mr-4" variant="secondary">Check public bestiaries</UIButton>
            <UIButton variant="primary">Create your own</UIButton>
        </div>
    </div>
</template>