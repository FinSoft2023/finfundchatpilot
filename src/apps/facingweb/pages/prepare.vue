<template>
    <div class="flex flex-col min-h-screen">
        <div class="p-4 grid grid-cols-3 items-center">
            <UIcon @click="links"
                name="i-mdi-arrow-left"
                class="w-[8mm] h-[8mm]"></UIcon>
            <p class="text-lg font-semibold">เตรียมข้อมูล</p>
        </div>

        <!-- Scrollable content container -->
        <div class="p-4 space-y-4 flex-1 overflow-y-auto">
            <UCard v-for="(module, index) in state.transaction"
                :key="index"
                class="relative">
                <!-- Trash can icon at the top right corner -->
                <UIcon name="i-mdi-trash-can"
                    class="absolute top-0 right-0 m-2 w-6 h-6 text-gray-500 cursor-pointer"
                    @click="removeModule(index)" />

                <div class="flex items-center space-x-4">
                    <!-- Icon for the module -->
                    <UIcon :name="module.icon"
                        class="w-14 h-14 text-primary" />

                    <!-- Module information and button -->
                    <div class="flex-1">
                        <h1 class="text-xl font-bold">{{ module.title }}</h1>

                        <div class="flex justify-between items-center mt-2">
                            <!-- Status icon and text -->
                            <!-- <p class="font-bold"
                                :class="state.preparestate === 0 ? 'text-red-500' : 'text-primary'">{{
                                    state.preparestate
                                        === 0 ? 'ยังไม่ได้เตรียมข้อมูล' : 'เตรียมข้อมูลเเล้ว' }}</p> -->
                            <p class="font-bold"
                                :class="state.preparestate === 0 ? 'text-primary' : 'text-primary'">{{
                                    state.preparestate
                                        === 0 ? 'เตรียมข้อมูลเเล้ว' : 'เตรียมข้อมูลเเล้ว' }}</p>
                            <!-- Action button -->
                            <UButton icon="i-mdi-square-edit-outline"
                                :color="buttonColor"
                                :to="state.preparestate === 0 ? 'subscription' : '/subscription'">
                                {{ state.preparestate === 0 ? 'กรอกข้อมูล' : 'กรอกข้อมูล' }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </UCard>
        </div>

        <!-- Sticky footer card -->
        <UCard class="sticky bottom-0 bg-white shadow-md">
            <div class="flex justify-between">
                <h1 class="text-sm font-normal">ธุรกรรมทั้งหมด</h1>
                <h1 class="text-sm font-normal">{{ state.transaction.length }}</h1>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="text-ms font-bold">เตรียมข้อมูลเเล้ว</h1>
                <h1 class="text-xl text-orange-400 font-bold">
                    <!-- {{ state.preparestate === 0 ? '0' : state.transaction.length }} -->
                    {{ state.transaction.length }}
                </h1>
            </div>
            <h1 class="mb-2 text-sm text-orange-400 font-normal">
                สามารถกดรับคิวได้โดยไม่ต้องกรอกข้อมูลทั้งหมด
            </h1>
            <UButton color="primary"
                size="xl"
                to="queue"
                block>รับคิว</UButton>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);

const links = () => {
    navigateTo('/transaction');
};

const buttonColor = computed(() => {
    return state.value.preparestate === 0 ? 'primary' : 'primary';
});

// Function to remove a module from the transaction list
const removeModule = (index: number) => {
    state.transaction.splice(index, 1);
};
</script>
