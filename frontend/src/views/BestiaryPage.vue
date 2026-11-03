<script setup lang="ts">

import Navbar from "../components/Navbar.vue";
import Monster from "../components/Monster.vue";

</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">{{ $route.params.bestiaryId }}</h1>
            <div>

            </div>
            <div class="grid grid-cols-4">
                <Monster name="Noctia" />
                <Monster name="Umbra Saeva" />
            </div>
        </div>
    </div>
</template>