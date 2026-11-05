<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import {useMonsterShop} from "../stores/MonsterShop";
import {useRoute} from "vue-router";
import {MonsterI} from "../types/Monster";

const store = useMonsterShop()
let monster: MonsterI

switch (useRoute().params.monsterId) {
    case "Noctia":
        monster = store.monster1
        break;
    case "Umbra Saeva":
        monster = store.monster2
        break;
}
</script>

<template>
    <div>
        <Navbar :bestiary="useRoute().params.bestiaryId as string" />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">{{ monster.name }}</h1>
            <div class="w-full p-8 grid grid-cols-2">
                <div class="w-fit p-4 flex bg-surface rounded-lg">
                    <div class="w-40 h-60 bg-primary rounded-lg"/>
                    <div class="mx-4">
                        <p>First appearance: Chapter {{ monster.firstAppearance }}</p>
                        <p>Name meaning: None</p>
                    </div>
                </div>
                <div class="p-4 ml-4">
                    <p>Description: {{ monster.description }}</p>
                    <p>Physical appearance: {{ monster.physicalDescription }}</p>
                    <p>Behavior: lorem ipsum</p>
                </div>
            </div>
        </div>
    </div>
</template>