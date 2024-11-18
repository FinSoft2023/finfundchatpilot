<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">Line OA</h1>
        <p class="text-base mb-4 font-semibold">กรอกข้อมูลสมัครสมาชิก</p>
        <div class="space-y-4 mb-8">
            <p>ชื่อ-กุล</p>
            <UInput></UInput>
            <p>เลขบัตรประจำตัวประชาชน</p>
            <UInput></UInput>
            <p>เบอร์โทร</p>
            <UInput></UInput>
            <p>อีเมล</p>
            <UInput></UInput>
            <p>ที่อยู่</p>
            <UInput></UInput>
        </div>
        <div class="space-y-4">
            <UButton @click="manualclick"
                block>ยืนยัน</UButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useModuleStore } from '@/stores/module-store';

const store = useModuleStore();
const { state } = storeToRefs(store);

const manualclick = () => {
    const setData = {
        preparestate: 1,
    };
    state.value.preparestate = setData.preparestate;
    if (state.value.scanstate === 0) {
        navigateTo('/menuline');
    } else if (state.value.scanstate === 1) {
        navigateTo('/prepare');
    }
}

const links = () => {
    navigateTo('/');
}
</script>