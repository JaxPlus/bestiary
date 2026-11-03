import {defineStore} from "pinia";
import {MonsterI} from "../types/Monster";
import {ref} from "vue";

export const useMonsterShop = defineStore('monsterShop', () => {
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

    return { monster1, monster2 };
})