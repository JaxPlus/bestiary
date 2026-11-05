import {defineStore} from "pinia";
import {MonsterI} from "../types/Monster";
import {ref} from "vue";

export const useMonsterStore = defineStore('monsterShop', () => {
    const bestiaryList = ref(["Aqua Mundi", "Horror story", "Future story", "D&D Campaign"]);
    const currentBestiary = ref<string>()

    const monster1 = ref<MonsterI>({
        name: "Noctia",
        firstAppearance: 6,
        description: "",
        physicalDescription: "",
    });

    const monster2 = ref<MonsterI>({
        name: "Umbra Saeva",
        firstAppearance: 7,
        description: "",
        physicalDescription: "",
    });

    return { bestiaryList, currentBestiary, monster1, monster2 };
})