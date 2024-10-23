<template>
    <div class="p-4">
         <h1 @click="links" class="text-xl mb-4 font-bold">Line OA</h1>
        <div class="grid grid-cols-2 gap-4">
            <UPageCard v-for="(module, index) in modules"
                :key="index"
                class="text-red-500"
                v-bind="module">
            </UPageCard>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = () => {
    navigateTo('/menuline');
}

const modules = [
    {
        title: 'สแกน',
        to: '/transaction',
        icon: 'i-mdi-scan-helper',
    },
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
];
</script>