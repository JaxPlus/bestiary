import {defineStore} from "pinia";
import {MonsterI} from "../types/Monster";
import {Ref, ref} from "vue";
import {BestiaryI} from "../types/Bestiary";

export const useMonsterStore = defineStore('monsterShop', () => {
    const monster1 = ref<MonsterI>({
        bestiary: "Aqua Mundi",
        name: "Noctia",
        firstAppearance: 6,
        description: "",
        physicalDescription: "",
    });

    const monster2 = ref<MonsterI>({
        bestiary: "Aqua Mundi",
        name: "Umbra Saeva",
        firstAppearance: 7,
        description: "",
        physicalDescription: "",
    });

    const bestiary1 = ref<BestiaryI>({
        name: "Aqua Mundi",
        description: "In a world full of water beasts will you survive.",
        tags: ["Fantasy", "Not magical", "Adventure"],
        monsters: [monster1.value, monster2.value],
    });

    const bestiary2 = ref<BestiaryI>({
        name: "Horror story",
        description: "House on a hill in village named Devar has some secrets.",
        tags: ["Fantasy", "Not magical", "Horror"],
        monsters: [],
    });

    const bestiary3 = ref<BestiaryI>({
        name: "Future story",
        description: "TBA",
        tags: [],
        monsters: [],
    });

    const bestiary4 = ref<BestiaryI>({
        name: "D&D Campaign",
        description: "TBA",
        tags: ["Fantasy", "Not magical", "Adventure"],
        monsters: [],
    });

    const currentBestiary = ref<BestiaryI | undefined>();
    const monsterList = [monster1, monster2];
    const bestiaryList = ref<Ref<BestiaryI>[]>([bestiary1, bestiary2, bestiary3, bestiary4]);

    return { monster1, monster2, monsterList, bestiary1, bestiaryList, currentBestiary };
})