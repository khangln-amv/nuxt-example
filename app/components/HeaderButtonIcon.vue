<script setup lang="ts">
const { name: name, class: overrideClasses } = defineProps<{
  name: string,
  class?: string,
}>();

const baseClass = "text-3xl text-surface-900 hover:text-black dark:text-surface-0 dark:hover:text-surface-100";

const mergedClass: ComputedRef<string> = computed(() => twMerge(baseClass, overrideClasses ?? ''));
</script>

<template>
  <Icon :name="name" :class="mergedClass"/>
</template>