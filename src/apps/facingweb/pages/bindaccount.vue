<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">Line OA</h1>
        <p class="text-base mb-4 font-semibold">ผูกบัญชี Line OA</p>
        <div v-if="steps === 0"
            class="space-y-4">
            <p>กรอกเลขสมาชิก</p>
            <UInput></UInput>
            <UButton @click="steps = 1"
                block>ถัดไป</UButton>
            <UButton color="white"
                @click="steps = 1"
                block>สมัครสามชิกใหม่</UButton>
        </div>
        <div v-if="steps === 1"
            class="space-y-4">
            <p>เลขบัตรประจำตัวประชาชน 13 หลัก</p>
            <UInput></UInput>
            <UButton @click="steps = 2"
                block>ถัดไป</UButton>
        </div>
        <div v-if="steps === 2"
            class="space-y-4">
            <p>เบอร์โทรศัพท์</p>
            <UInput></UInput>
            <UButton @click="steps = 3"
                block>ถัดไป</UButton>
        </div>
        <div v-if="steps === 3"
            class="space-y-4">
            <p>กรอก OTP</p>
            <UInput></UInput>
            <UButton @click="steps = 4"
                block>ยืนยัน</UButton>
        </div>
        <div v-if="steps === 4"
            class="space-y-4">
            <div class="text-center">
                <h1 class="text-4xl font-bold">ตั้งค่าความปลอดภัย</h1>
            </div>
            <UButton @click="newData"
                block>ยืนยัน</UButton>
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
const steps = ref(0);

const newData = () => {
    const setData = {
        accountstate: 1,
    };
    state.value.accountstate = setData.accountstate;
    console.log('data updated', newData);
    if (state.value.scanstate === 1) {
        navigateTo('/transaction');
    }else{
        navigateTo('/menuline');
    }
};
</script>