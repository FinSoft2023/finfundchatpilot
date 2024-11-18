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
  title: 'Menu Line',
  description: 'test menu line',
  to: '/menuline',
  icon: 'i-mdi-numeric-1'
}, {
  title: 'Prepare2',
  description: 'simple prepare',
  to: '/prepare2',
  icon: 'i-mdi-numeric-2'
}, {
  title: 'Document',
  description: 'print document', 
  to: '/printdoc',
  icon: 'i-mdi-numeric-3'
}]
</script>