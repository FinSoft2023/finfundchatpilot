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
            <UButton to="/preparesuccess"
                block>ยืนยัน</UButton>
        </div>
    </div>
</template>
<script setup lang="ts">
const links = () => {
    navigateTo('/menuline');
}
</script>