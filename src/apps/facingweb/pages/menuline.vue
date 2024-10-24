<template>
    <div class="p-4">
        <h1 @click="links" class="text-xl mb-4 font-bold">Line OA</h1>
        <div class="grid grid-cols-2 gap-4">
            <UPageCard 
                v-for="(module, index) in modules"
                :key="index"
                class="text-red-500"
                v-bind="module"
                @click="handleClick(module)">
            </UPageCard>
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

// Initialize modules array
const modules = [
    {
        title: 'สแกน',
        to: state.value.accountstate === 0 ? '/bindaccount' : 'transaction',
        icon: 'i-mdi-scan-helper',
    }
];

if (state.value.accountstate === 0) {
    modules.push({
        title: 'ผูกบัญชี Line',
        to: '/bindaccount',
        icon: 'i-mdi-connection',
    });
} else if (state.value.accountstate === 1) {
    modules.push({
        title: 'สมัครสมาชิกใหม่',
        to: '/subscription',
        icon: 'i-mdi-user',
    });
} else if (state.value.accountstate === 2) {
    modules.push(
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
    );
}

// Handle click event for "สแกน" and set state.scanstate to 1
const handleClick = (module: { title: string }) => {
    if (module.title === 'สแกน') {
        const setData = { scanstate: 1 };
        state.value.scanstate = setData.scanstate;
    }
};

</script>
