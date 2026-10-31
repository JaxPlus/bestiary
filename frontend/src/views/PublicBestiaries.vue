<script setup lang="ts">

import Bestiary from "../components/Bestiary.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">Public Bestiaries</h1>
            <div class="w-full flex flex-col items-center">
                <form class="flex justify-between w-4/5 bg-surface p-4 rounded-lg">
                    <input class="w-full" type="text" placeholder="Search..." />
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                </form>
            </div>
            <div class="w-4/5 mt-8 grid grid-cols-3 md:grid-cols-4">
                <Bestiary v-for="_ in 10" title="Aqua Mundi" author="Jan Greń" />
            </div>
        </div>
    </div>
</template>