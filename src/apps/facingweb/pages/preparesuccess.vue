<template>
    <div class="p-4">
        <h1 @click="links"
            class="text-xl font-bold">Line OA</h1>
        <p class="text-base mb-4 font-semibold">เตรียมข้อมูล</p>
        <UCard v-for="(module, index) in modules">
            <UIcon :name="module.icon"
                class="w-10 h-10 text-primary" />
            <h1 class="text-lg font-bold">{{ module.title }}</h1>
            <div class="flex space-x-2 items-center">
                <UIcon :name="module.check"
                    class="w-5 h-5 text-primary"></UIcon>
                <p>เตรียมข้อมูลแล้ว</p>
            </div>
            <UButton :to="module.to"
                block>รับคิว</UButton>
        </UCard>
    </div>
</template>

<script setup lang="ts">
const links = () => {
    navigateTo('/menuline');
}

const modules = [
    {
        title: 'สมัครสมาชิก',
        to: '/queue',
        icon: 'i-mdi-user-add',
        check: 'i-mdi-check-circle',
    },
];
</script>