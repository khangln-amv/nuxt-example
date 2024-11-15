<script setup lang="ts">
const {toggleSidebar} = useAdminSiteLayoutStore();
</script>

<template>
  <Button class="layout-menu-button layout-topbar-action" @click="toggleSidebar">
    <i class="pi pi-bars"></i>
  </Button>
</template>

<style scoped>

</style>