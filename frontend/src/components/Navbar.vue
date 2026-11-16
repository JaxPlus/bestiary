<script setup lang="ts">
import {useRouter} from "vue-router";

const props = defineProps<{
    bestiary?: string
}>()

const router = useRouter();
</script>
<template>
    <nav class="bg-surface w-full p-4 flex justify-between top-0 left-0">
        <RouterLink to="/">IKONA</RouterLink>
        <div>
            <RouterLink v-if="router.currentRoute.value.path != '/'" to="/">
                Main page
            </RouterLink>
            <RouterLink v-if="router.currentRoute.value.path != '/my-bestiaries'" to="/my-bestiaries">
                {{ router.currentRoute.value.path == '/' ? "" : "/" }} My bestiaries
            </RouterLink>
            <RouterLink v-if="bestiary" class="mr-2" :to="'/my-bestiaries/' + bestiary">
                / {{ bestiary }}
            </RouterLink>
        </div>
    </nav>
</template>