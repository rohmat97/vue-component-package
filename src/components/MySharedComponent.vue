<template>
  <UCard>
    <template #header>
      <h4>My Shared Nuxt UI Component</h4>
    </template>

    <p>This is a shared component from the 'vue-component-package' library, using Nuxt UI!</p>
    <p>Here's a Nuxt UI button:</p>
    <UButton label="Click me!" color="primary" variant="solid" @click="handleClick" />

    <template #footer>
      <p class="text-sm text-gray-500">Shared component footer</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const handleClick = () => {
  alert('Nuxt UI Button clicked in shared component!');
};
</script>

