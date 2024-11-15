<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode: ComputedRef<boolean> = computed(() => colorMode.value === 'dark');

const icon: ComputedRef<string> = computed(() => isDarkMode.value ? 'prime:moon' : 'prime:sun');

function toggleColorMode() {
  colorMode.preference = isDarkMode.value ?  'light' : 'dark';
}
</script>

<template>
  <HeaderButton @click="toggleColorMode">
    <HeaderButtonIcon :name="icon"/>
  </HeaderButton>
</template>