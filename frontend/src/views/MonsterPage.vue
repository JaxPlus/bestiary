<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import {useMonsterStore} from "../stores/MonsterStore";
import {useRoute} from "vue-router";
import {MonsterI} from "../types/Monster";
import Section from "../components/Section.vue";
import Cover from "../components/Cover.vue";

const store = useMonsterStore()
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
            <div class="w-full p-8">
                <div class="p-4 bg-surface rounded-lg">
                    <div class="flex">
                        <Cover :letter="monster.name[0]" />
                        <h1 class="self-center m-8 text-6xl">{{ monster.name }}</h1>
                    </div>
                    <div class="mt-4 flex">
                        <p class="mr-4">First appearance: Chapter {{ monster.firstAppearance }}</p>
                    </div>
                </div>
                <div>
                    <Section title="Description">{{ monster.description }}</Section>
                    <Section title="Physical appearance">{{ monster.physicalDescription }}</Section>
                    <Section title="Behavior">lorem ipsum</Section>
                    <Section title="Name meaning">None</Section>
                </div>
            </div>
        </div>
    </div>
</template>