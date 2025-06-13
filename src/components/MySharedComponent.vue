<template>
  <div class="shadow-md rounded-lg p-6 border border-gray-200 bg-red-50">
    <div class="border-b border-gray-200 pb-4 mb-4">
      <h4 class="text-lg font-semibold">My Shared Component</h4>
    </div>

    <p>This is a shared component from the 'vue-component-package' library.</p>
    <p>Here's a local button:</p>
    <UButton
      label="Click me!"
      color="warning"
      variant="solid"
      size="md"
      @click="handleClick"
    />

    <div class="border-t border-gray-200 pt-4 mt-4">
      <p class="text-sm text-gray-500">Shared component footer</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import UButton from "./UButton.vue"; // Import local UButton
const handleClick = () => {
  alert("Local UButton clicked in shared component!");
};
</script>
