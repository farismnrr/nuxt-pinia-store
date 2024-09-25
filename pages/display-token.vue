<template>
    <div>
        <h2>Access Token from Pinia (Session Storage)</h2>
        <p v-if="accessToken">Access Token: {{ accessToken }}</p>
        <p v-else>No Access Token Found</p>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { computed } from "vue";

const authStore = useAuthStore();
const accessToken = computed(() => authStore.accessToken);
</script>
