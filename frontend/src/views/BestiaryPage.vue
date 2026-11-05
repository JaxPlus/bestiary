<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Monster from "../components/Monster.vue";
import {useMonsterStore} from "../stores/MonsterStore";

const store = useMonsterStore()
</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">{{ $route.params.bestiaryId }}</h1>
            <div>

            </div>
            <div class="grid grid-cols-4">
                <Monster v-if="store.currentBestiary == 'Aqua Mundi'" name="Noctia" />
                <Monster v-if="store.currentBestiary == 'Aqua Mundi'" name="Umbra Saeva" />
            </div>
        </div>
    </div>
</template>