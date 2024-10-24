import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useModuleStore = defineStore('store', () => {
    const state = ref(
        {
            accountstate: 0,
            scanstate: 0,
            preparestate: 0,
            transaction:{}
        });


    return { state }
})