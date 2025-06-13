<script setup lang="ts" scoped>
import { ref, computed } from 'vue'



const emit = defineEmits(['click'])

const props = defineProps<{
  label?: string
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  square?: boolean
  block?: boolean
  loading?: boolean
  loadingAuto?: boolean
  disabled?: boolean
  to?: string
  external?: boolean
  customClass?: any
  onClick?: ((e: MouseEvent) => void | Promise<void>) | Array<(e: MouseEvent) => void | Promise<void>>
}>();

const loadingState = ref(false)

const handleClick = async (e: MouseEvent) => {
  if (props.disabled || props.loading) return

  const actions = Array.isArray(props.onClick) ? props.onClick : [props.onClick].filter(Boolean)

  if (props.loadingAuto) loadingState.value = true
  for (const fn of actions) {
    try {
      await fn?.(e)
    } catch (err) {
      console.error(err)
    }
  }
  if (props.loadingAuto) loadingState.value = false
}

const sizeMap: Record<string, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3'
}

const buttonClass = computed(() => {
  const color = props.color || 'primary'
  const variant = props.variant || 'solid'

    const baseClass = 'inline-flex items-center justify-center font-medium transition duration-200 rounded-lg focus:outline-none cursor-pointer'

  const solidColorMap: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    accent: 'bg-accent text-white hover:bg-accent/90',
    info: 'bg-blue-500 text-white hover:bg-blue-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    error: 'bg-red-500 text-white hover:bg-red-600',
    neutral: 'bg-slate-500 text-white hover:bg-slate-600'
  }

  const outlineColorMap: Record<string, string> = {
    primary: 'text-primary border-primary hover:bg-primary hover:text-white',
    secondary: 'text-secondary border-secondary hover:bg-secondary hover:text-white',
    accent: 'text-accent border-accent hover:bg-accent hover:text-white',
    info: 'text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white',
    success: 'text-green-500 border-green-500 hover:bg-green-500 hover:text-white',
    warning: 'text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white',
    error: 'text-red-500 border-red-500 hover:bg-red-500 hover:text-white',
    neutral: 'text-slate-500 border-slate-500 hover:bg-slate-500 hover:text-white'
  }

  let variantClass = ''
  switch (variant) {
    case 'solid':
      variantClass = solidColorMap[color]
      break
    case 'outline':
      variantClass = `bg-transparent border ${outlineColorMap[color]}`
      break
    case 'ghost':
      variantClass = 'bg-transparent text-current hover:bg-gray-100'
      break
    case 'link':
      variantClass = 'bg-transparent text-primary underline hover:no-underline'
      break
  }

  return [
    baseClass,
    sizeMap[props.size || 'md'],
    variantClass,
    {
      'w-full': props.block,
      'aspect-square': props.square,
      'opacity-50 pointer-events-none': props.disabled || props.loading || loadingState.value
    },
    props.customClass
  ].join(' ')
})
</script>

<template>
  <component
    :is="to && !external ? 'NuxtLink' : to && external ? 'a' : 'button'"
    :to="to && !external ? to : undefined"
    :href="to && external ? to : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :disabled="disabled || loading"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot name="leading" />
    <slot>{{ label }}</slot>
    <slot name="trailing" />
  </component>
</template>
