<template>
    <div class="p-4">
        <UCard @click="linkto">
            <div class="text-center">
                <h1 class="text-2xl font-bold">คิวที่</h1>
                <h1 class="text-4xl font-bold">A-1</h1>
                <h1 class="text-2xl text-primary-600 font-bold">สมัครสมาชิก</h1>
            </div>
        </UCard>
    </div>
</template>
<script lang="ts" setup>
const linkto = () => {
    navigateTo('/menuline')
}
    ;
</script>