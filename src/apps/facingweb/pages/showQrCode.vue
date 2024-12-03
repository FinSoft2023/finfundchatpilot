<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">ติดต่อสหกรณ์</h1>
        <p class="text-base mb-4 font-semibold">QR รับคิว</p>
        <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
            แสดง QR Code ที่กล้องเพื่อรับคิว
        </h1>

        <div class="flex justify-center">
            <NuxtLink to="/transaction">
                <img src="@/public/images/qr.png" alt="QR Code" class="w-48 h-48" />
            </NuxtLink>
        </div>
        <h1 class="mt-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
            กรุณาแสดง QR Code ที่กล้องของตู้คิว
        </h1>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);

const links = () => {
    navigateTo('/');
}
</script>