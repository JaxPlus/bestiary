<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Monster from "../components/Monster.vue";
import {useMonsterStore} from "../stores/MonsterStore";
import Tag from "../components/Tag.vue";

const store = useMonsterStore();
</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">{{ $route.params.bestiaryId }}</h1>
            <div class="w-full grid grid-cols-2">
                <div class="flex flex-col m-4 p-4 bg-surface rounded-lg">
                    <p class="mb-2">{{ store.currentBestiary?.description }}</p>
                    <div class="flex items-center">
                        <p class="pr-4">Tags:</p>
                        <Tag v-for="tag in store.currentBestiary?.tags">{{ tag }}</Tag>
                    </div>
                </div>
                <div>
                    <h2 class="text-4xl text-center">Monsters:</h2>
                    <div class="grid grid-cols-4">
                        <Monster v-for="monsterObj in store.currentBestiary?.monsters" :name="monsterObj.name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>