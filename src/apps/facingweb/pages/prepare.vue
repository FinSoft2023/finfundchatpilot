<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">Line OA</h1>
        <p class="text-base mb-4 font-semibold">เตรียมข้อมูล</p>
        <UCard v-for="(module, index) in state.transaction">
            <UIcon :name="module.icon"
                class="w-10 h-10 text-primary" />
            <h1 class="text-lg font-bold">{{ module.title }}</h1>
            <div class="flex space-x-2 items-center">
                <UIcon name="i-mdi-check-circle"
                    class="w-5 h-5"></UIcon>
                <p v-if="state.preparestate === 0">ยังไม่ได้เตรียมข้อมูล</p>
                <p v-if="state.preparestate === 1">ตรียมข้อมูลเเล้ว</p>
            </div>

            <UButton :color="buttonColor"
                :to="state.preparestate === 0 ? '/subscription' : '/queue'"
                block>{{ state.preparestate === 0 ? 'กรอกข้อมูล' : 'รับคิว' }}</UButton>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);

const links = () => {
    navigateTo('/menuline');
}

const buttonColor = computed(() => {
    return state.value.preparestate === 0 ? 'red' : 'primary';
});
</script>