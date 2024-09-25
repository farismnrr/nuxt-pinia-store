<template>
    <div>
        <h1>Nuxt 3 Pinia Session Storage Example</h1>
        <p>Access Token: {{ accessToken }}</p>
        <button
            @click="saveToken"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
            Save Dummy Token
        </button>
        <NuxtLink
            to="/display-token"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
            Go to Display Token Page
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { computed } from "vue";

const authStore = useAuthStore();
const accessToken = computed(() => authStore.accessToken);
const saveToken = () => {
    authStore.setAccessToken("dummyAccessToken123456");
};
</script>
