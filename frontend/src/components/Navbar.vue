<script setup lang="ts">
import {useRouter} from "vue-router";
import Menu from "./Menu.vue";
import {ref} from "vue";

const props = defineProps<{
    bestiary?: string
}>()

const router = useRouter();
const hover = ref(false);
</script>
<template>
    <nav class="bg-surface w-full p-4 flex justify-between top-0 left-0">
        <RouterLink to="/">IKONA</RouterLink>
        <div>
            <RouterLink v-if="router.currentRoute.value.path != '/'" to="/">
                Main page
            </RouterLink>
            <RouterLink v-if="router.currentRoute.value.path != '/public-bestiaries'" to="/public-bestiaries">
                {{ router.currentRoute.value.path == '/' ? "" : "/" }} Public bestiaries
            </RouterLink>
            <RouterLink v-if="bestiary" class="mr-2" @mouseenter="hover = true" :to="'/public-bestiaries/' + bestiary">
                / {{ bestiary }}
            </RouterLink>
        </div>
    </nav>
</template>