<script setup lang="ts" scoped>

defineSlots<{
  default?: () => any; // For the default slot
  footer?: () => any;  // For the footer slot
}>();

defineProps<{
  title?: string
  description?: string
  padded?: boolean
  shadow?: boolean
  bordered?: boolean
  customClass?: any
}>()
</script>

<template>
  <div
    :class="[
      'relative rounded-2xl overflow-hidden transition duration-200',
      shadow ? 'shadow-md' : '',
      bordered ? 'border border-gray-200 dark:border-gray-800' : '',
      customClass
    ]"
  >
    <div v-if="title || description" class="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 v-if="title" class="text-lg font-semibold">{{ title }}</h3>
      <p v-if="description" class="text-sm text-gray-500 dark:text-gray-400">{{ description }}</p>
    </div>

    <div :class="padded !== false ? 'p-4' : ''">
      <slot />
    </div>

    <div v-if="$slots.footer" class="border-t border-gray-200 dark:border-gray-700 p-4">
      <slot name="footer" />
    </div>
  </div>
</template>
