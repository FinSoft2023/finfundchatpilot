<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">Line OA</h1>
        <p class="text-base mb-4 font-semibold">เตรียมข้อมูล</p>
        <div class="space-y-4">
            <UCard v-for="(module, index) in modules">
                <div class="flex mb-2 space-x-2 items-center">
                    <UIcon :name="module.icon"
                        class="w-10 h-10 text-primary" />
                    <h1 class="text-lg font-bold">{{ module.title }}</h1>
                </div>
                <div class="grid grid-cols-2 ">
                    <div class="flex mb-4 space-x-2  items-center">
                        <UIcon name="i-mdi-check-circle"
                            class="w-5 h-5 text-primary"></UIcon>
                        <p>เตรียมข้อมูลเเล้ว</p>
                    </div>
                    <div class="flex justify-end mb-4 space-x-2  items-center">
                        <UButton color="primary"
                            to="queue">พร้อมรับคิว</UButton>
                    </div>
                </div>
            </UCard>
        </div>
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

const modules = ([
    {
        title: 'ยืนยันตัวตน',
        to: '',
        icon: 'i-mdi-account-lock-outline',
    },
    {
        title: 'ข้อมูลสมาชิก',
        to: '',
        icon: 'i-mdi-user-card-details-outline',
    },
    {
        title: 'เงินฝาก',
        to: '',
        icon: 'i-heroicons-wallet',
    },
    {
        title: 'กู้ฉุกเฉิน',
        to: '',
        icon: 'i-mdi-cash-fast',
    },
    {
        title: 'สัญญากู้',
        to: '',
        icon: 'i-mdi-file-document',
    },
    {
        title: 'ฌาปนกิจ',
        to: '',
        icon: 'i-mdi-account-child',
    },
    {
        title: 'รายการหักเดือนล่าสุด',
        to: '',
        icon: 'i-mdi-report-box-outline',
    },
    {
        title: 'เงินปันผลและเฉลี่ยคืน',
        to: '',
        icon: 'i-mdi-dollar',
    },
    {
        title: 'ตั้งค่าความปลอดภัย',
        to: '',
        icon: 'i-mdi-password',
    },
]);
</script>