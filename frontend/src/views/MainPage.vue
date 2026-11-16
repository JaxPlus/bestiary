<script setup lang="ts">

import UIButton from "../components/UIButton.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <Navbar class="absolute" />
        <h2 class="text-4xl">Create your own</h2>
        <h1 class="text-8xl mb-6">Bestiary</h1>
        <div>
            <UIButton class="mr-4" route="/my-bestiaries" variant="secondary">Check my bestiaries</UIButton>
            <UIButton route="/" variant="primary">Create new bestiary</UIButton>
        </div>
    </div>
</template>