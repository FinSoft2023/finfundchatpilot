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
        to: '/bindaccount',
        icon: 'i-mdi-scan-helper',
    },
    {
        title: 'สมัครสมาชิก',
        to: '/subscription',
        icon: 'i-mdi-user-add',
    }
];
</script>