<template>
    <div class="p-4">
      <h1 @click="links" class="mb-4 text-xl font-bold">Line OA</h1>
  
      <UPageGrid>
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </div>
  </template>
  
  <script setup lang="ts">
  const links = () => {
      navigateTo('/');
  }
  const modules = [{
    title: 'Withdrawpaper',
    description: 'test print withdrawpaper',
    to: '/withdrawpaper',
    icon: 'i-mdi-numeric-1'
  }, {
    title: 'Chequepaper',
    description: 'test print chequepaper',
    to: '/chequepaper',
    icon: 'i-mdi-numeric-2'
  }, {
    title: 'Supscriptionpaper',
    description: 'test print supscriptionpaper', 
    to: '/',
    icon: 'i-mdi-numeric-3'
  }]
  </script>