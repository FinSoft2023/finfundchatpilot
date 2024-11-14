<template>
    <div class="p-4">
        <UCard @click="linkto">
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            คุณได้คิวที่
                        </p>
                        <h1
                            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                            A-002</h1>
                        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            กรุณาเปิดหน้านี้ไว้เเล้วรอเจ้าหน้าที่เรียก </p>
                    </div>
                </div>
            </section>
        </UCard>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);
const linkto = () => {
    const setData = {
        accountstate: 2,
    };
    state.value.accountstate = setData.accountstate;
    navigateTo('/menuline');
};
</script>