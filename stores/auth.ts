// stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            accessToken: "",
        };
    },
    actions: {
        setAccessToken(token: string) {
            this.accessToken = token;
        },
    },
    persist: {
        storage: piniaPluginPersistedstate.sessionStorage(),
    },
});
