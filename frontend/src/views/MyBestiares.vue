<script setup lang="ts">
import Bestiary from "../components/Bestiary.vue";
import Navbar from "../components/Navbar.vue";
import {computed, ref} from "vue";
import {useMonsterStore} from "../stores/MonsterStore";
import Fuse from "fuse.js";
import {BestiaryI} from "../types/Bestiary";

const query = ref("");
const store = useMonsterStore();
const fuse = computed(() => new Fuse(store.bestiaryList.map(bestiary => bestiary.value), {
    keys: ["name", "tags"],
    threshold: 0.4,
    ignoreLocation: true,
    ignoreDiacritics: true,
}));

const selectedTags = ref<string[]>([]);

const allTags = computed(() => {
    return [...new Set(store.bestiaryList.flatMap(bestiary => bestiary.value.tags))].sort();
});

function toggleTag(tag: string) {
    const i = selectedTags.value.indexOf(tag);
    if (i === -1)
        selectedTags.value.push(tag);

    else selectedTags.value.splice(i, 1);
}

const matchesTags = (item: BestiaryI) =>
    selectedTags.value.every(tag => item.tags.includes(tag));

const filteredItems = computed<BestiaryI[]>(() => {
    const q = query.value.trim()
    const base = q
        ? fuse.value.search(q).map(r => r.item)
        : store.bestiaryList.map(r => r.value)
    return base.filter(matchesTags)
});
</script>

<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center">
            <h1 class="m-16 text-6xl">My Bestiaries</h1>
            <div class="w-full flex flex-col items-center">
                <div class="flex justify-between w-4/5 bg-surface p-4 rounded-lg">
                    <input v-model="query" class="w-full" type="text" placeholder="Search..." />
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                </div>
                <div>
                    <div class="my-3 flex flex-wrap gap-2">
                        <button
                            v-for="tag in allTags" type="button"
                            class="rounded-full border px-3 py-1 text-sm transition-colors cursor-pointer"
                            :class="selectedTags.includes(tag) ? 'border-border bg-primary-foreground' : 'border-border-strong bg-accent hover:bg-accent-deep'"
                            @click="toggleTag(tag)"
                        >
                            {{ tag }}
                        </button>

                        <button
                            v-if="selectedTags.length"
                            type="button"
                            class="rounded-full px-3 py-1 text-sm text-muted underline hover:text-muted/40"
                            @click="selectedTags = []"
                        >
                            Clear tags
                        </button>
                    </div>

                    <p v-if="filteredItems.length === 0" class="mt-4 text-center text-muted">
                        No match
                    </p>
                </div>
            </div>
            <div class="w-4/5 mt-8 grid grid-cols-3 md:grid-cols-4">
            <Bestiary v-for="bestiaryObj in filteredItems" @click="store.currentBestiary = store.bestiaryList.find(value => value.value.name == bestiaryObj.name)?.value" :title="bestiaryObj.name" author="Jan Greń" />
            </div>
        </div>
    </div>
</template>