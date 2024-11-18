<template>
    <div class="flex flex-col min-h-screen">
        <div class="p-4">
            <h1 @click="links" class="text-xl font-bold">Line OA</h1>
            <p class="text-base font-semibold">เตรียมข้อมูล</p>
        </div>

        <!-- Scrollable content container -->
        <div class="p-4 space-y-4 flex-1 overflow-y-auto">
            <UCard v-for="(module, index) in modules" :key="index">
                <div class="grid grid-cols-2">
                    <div>
                        <div class="flex mb-2 space-x-2 items-center">
                            <UIcon :name="module.icon" class="w-10 h-10 text-primary" />
                            <h1 class="text-lg font-bold">{{ module.title }}</h1>
                        </div>
                        <div class="flex mb-4 space-x-2 items-center">
                            <UIcon name="i-mdi-check-circle" class="w-5 h-5 text-primary"></UIcon>
                            <p>เตรียมข้อมูลเเล้ว</p>
                        </div>
                    </div>
                    <div class="flex justify-end items-center">
                        <UButton size="lg" to="queue">กรอกข้อมูล</UButton>
                    </div>
                </div>
            </UCard>
            <UCard v-for="(module, index) in modules2" :key="index">
                <div class="grid grid-cols-2">
                    <div>
                        <div class="flex mb-2 space-x-2 items-center">
                            <UIcon :name="module.icon" class="w-10 h-10 text-primary" />
                            <h1 class="text-lg font-bold">{{ module.title }}</h1>
                        </div>
                        <div class="flex mb-4 space-x-2 items-center">
                            <UIcon name="i-mdi-close-circle" class="w-5 h-5 text-red-500"></UIcon>
                            <p>ยังไม่ได้เตรียมข้อมูล</p>
                        </div>
                    </div>
                    <div class="flex justify-end items-center">
                        <UButton color="red" size="lg" to="queue">กรอกข้อมูล</UButton>
                    </div>
                </div>
            </UCard>
        </div>

        <!-- Sticky footer card -->
        <UCard class="sticky bottom-0  bg-white shadow-md">
            <div class="flex justify-between">
                <h1 class="text-sm font-normal">ธุรกรรมทั้งหมด</h1>
                <h1 class="text-sm font-normal">4</h1>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="text-ms font-bold">เตรียมข้อมูลเเล้ว</h1>
                <h1 class="text-xl text-orange-400 font-bold">3</h1>
            </div>
            <h1 class="mb-2 text-sm text-orange-400 font-normal">
                สามารถกดรับคิวได้โดยไม่ต้องกรอกข้อมูลทั้งหมด
            </h1>
            <UButton color="primary" size="xl" to="queue" block>รับคิว</UButton>
        </UCard>
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

const buttonColor = computed(() => {
    return state.value.preparestate === 0 ? 'red' : 'primary';
});

const modules = ([
    {
        title: 'ฝากเงิน',
        icon: 'i-heroicons-wallet',
    },
    {
        title: 'ถอนเงิน',
        icon: 'i-heroicons-wallet',
    },
    {
        title: 'กู้สามัญ',
        icon: 'i-mdi-cash-fast',
    },
]);

const modules2 = ([
    {
        title: 'กู้ฉุกเฉิน',
        icon: 'i-mdi-cash-fast',
    },
]);
</script>