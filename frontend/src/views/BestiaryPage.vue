<script setup lang="ts">

import Navbar from "../components/Navbar.vue";
</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">{{ $route.params.id }}</h1>
        </div>
    </div>
</template>