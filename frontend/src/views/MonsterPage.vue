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
        <Navbar />
        <h1>{{ monster.name }}</h1>
        <div>
            <div>
                <p>First appearance: Chapter {{ monster.firstAppearance }}</p>
                <p>Name meaning: None</p>

            </div>
            <div>
                <p>Description: {{ monster.description }}</p>
                <p>Physical appearance: {{ monster.physicalDescription }}</p>
                <p>Behavior: lorem ipsum</p>
            </div>
        </div>
    </div>
</template>