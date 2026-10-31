<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
    <nav class="bg-surface w-full p-4 flex justify-between top-0 left-0">
        <RouterLink to="/">IKONA</RouterLink>
        <div>
            <RouterLink v-if="router.currentRoute.value.path != '/public-bestiaries'" class="mr-2" to="/public-bestiaries">
                Public bestiaries
            </RouterLink>
            <RouterLink v-if="router.currentRoute.value.path != '/'" to="/">
                Main page
            </RouterLink>
        </div>
    </nav>
</template>