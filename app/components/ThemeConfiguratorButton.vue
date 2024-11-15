<script setup lang="ts">

</script>

<template>
  <div class="relative">
    <HeaderButton
        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
        class="bg-primary dark:bg-primary"
    >
      <HeaderButtonIcon class="text-primary-contrast" name="prime:palette"/>
    </HeaderButton>
<!--    <AppConfigurator />-->
  </div>
</template>