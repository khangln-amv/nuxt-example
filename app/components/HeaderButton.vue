<script setup lang="ts">
const props = defineProps<{
  class?: string
}>();

const baseClass: string = "relative inline-flex w-10 h-10 cursor-pointer select-none items-center justify-center overflow-hidden transition-colors rounded-full " +
    "bg-surface-0 dark:bg-surface-900 enabled:hover:bg-surface-50 dark:enabled:hover:bg-surface-850 enabled:active:bg-surface-50 dark:enabled:active:bg-surface-850 " +
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-surface-0 " +
    "disabled:cursor-default";

const mergedClass: ComputedRef<string> = computed(() => twMerge(baseClass, props.class ?? ''));
</script>

<template>
  <PrimeButton unstyled :class="mergedClass">
    <slot/>
  </PrimeButton>
</template>