<script setup lang="ts">
import UButton from "./components/UButton.vue";
import MySharedComponent from "./components/MySharedComponent.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-primary">Nuxt UI - Vue Starter</h1>

    <UButton label="Test Button" />
    <MySharedComponent />

    <div class="flex items-center gap-2">
      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui.nuxt.com/getting-started/installation/vue"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons:github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />
    </div>
  </div>
</template>
