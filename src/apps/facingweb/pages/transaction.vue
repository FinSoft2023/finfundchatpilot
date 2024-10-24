<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl mb-4 font-bold">Line OA</h1>
        <div class="grid grid-cols-2 gap-4 mb-4">
            <UPageCard v-for="(module, index) in modules"
                :key="index"
                :class="['cursor-pointer', { 'bg-primary-200 text-white': isSelected(index) }]"
                v-bind="module"
                @click="toggleCard(index)">
            </UPageCard>
        </div>
        <UButton @click="newData"
            block>ยืนยัน</UButton>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);

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
    selectedCards.value.map(index => ({
        title: modules[index].title,
        icon: modules[index].icon
    }))
);

const newData = () => {
    state.value.transaction = selectedModules;
    console.log('data updated', newData);
    if (selectedModules.value.length > 0) {
        navigateTo('/prepare');
    }
};

const links = () => {
    navigateTo('/menuline');
}



const modules = [
    {
        title: 'สอบถามข้อมูล และอื่นๆ',
        icon: 'i-mdi-document',
    },


];
if (state.value.accountstate === 1) {
    modules.push({
        title: 'สมัครสมาชิกใหม่',
        icon: 'i-mdi-user',
    });
} else if (state.value.accountstate === 2) {
        modules.push(
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
            {
                title: 'กู้ฉุกเฉิน',
                icon: 'i-mdi-cash-fast',
            },
        );
    }
</script>