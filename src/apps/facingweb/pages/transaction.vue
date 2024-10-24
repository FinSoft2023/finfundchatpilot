<template>
    <div class="p-4">
         <h1 @click="links" class="text-xl mb-4 font-bold">Line OA</h1>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <UPageCard v-for="(module, index) in modules"
                :key="index"
                :class="['cursor-pointer', { 'bg-primary-200 text-white': isSelected(index) }]"
                v-bind="module"
                @click="toggleCard(index)">
            </UPageCard>
        </div>
        <UButton to="/prepare"
            block>ยืนยัน</UButton>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// สร้างตัวแปรเพื่อเก็บดัชนีการ์ดที่ถูกเลือกหลายใบ
const selectedCards = ref<number[]>([]);

// ฟังก์ชันตรวจสอบว่าการ์ดถูกเลือกหรือไม่
const isSelected = (index: number) => {
    return selectedCards.value.includes(index);
};

// ฟังก์ชันสำหรับเพิ่มหรือลบการ์ดจากการเลือก
const toggleCard = (index: number) => {
    if (selectedCards.value.includes(index)) {
        // ถ้าการ์ดถูกเลือกแล้ว ให้ลบออกจากอาร์เรย์
        selectedCards.value = selectedCards.value.filter(i => i !== index);
    } else {
        // ถ้ายังไม่ถูกเลือก ให้เพิ่มเข้าไปในอาร์เรย์
        selectedCards.value.push(index);
    }
};

// สร้าง computed เพื่อเก็บชื่อการ์ดที่ถูกเลือก
const selectedModules = computed(() =>
    selectedCards.value.map(index => modules[index].title)
);
const links = () => {
    navigateTo('/menuline');
}
const modules = [
    {
        title: 'ฝากเงิน',
        to: '',
        icon: 'i-heroicons-wallet',
    },
    {
        title: 'ถอนเงิน',
        to: '',
        icon: 'i-heroicons-wallet',
    },
    {
        title: 'กู้สามัญ',
        to: '',
        icon: 'i-mdi-cash-fast',
    },
    {
        title: 'กู้ฉุกเฉิน',
        to: '',
        icon: 'i-mdi-cash-fast',
    },
    {
        title: 'สมัครฌาปนกิจ',
        to: '',
        icon: 'i-mdi-account-child',
    },
    {
        title: 'สมัครสมาชิก',
        to: '',
        icon: 'i-mdi-user-add',
    },
    {
        title: 'สอบถามข้อมูล และอื่นๆ',
        to: '',
        icon: 'i-mdi-document',
    },
];
</script>