<template>
  <button class="my-button" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
function handleClick() {
console.log('Button clicked!');
}
</script>

<style scoped>
.my-button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
  border: none;
}
</style>
