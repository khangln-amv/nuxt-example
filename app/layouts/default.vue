<script setup lang="ts">
// const { layoutConfig, layoutState, isSidebarActive, resetMenu } = useLayout();
//
//
// const containerClass = computed(() => {
//   return {
//     'layout-overlay': layoutConfig.menuMode === 'overlay',
//     'layout-static': layoutConfig.menuMode === 'static',
//     'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
//     'layout-overlay-active': layoutState.overlayMenuActive,
//     'layout-mobile-active': layoutState.staticMenuMobileActive
//   };
// });

const mainContainerBaseClasses = 'flex flex-col min-h-screen justify-between pt-24 pr-8 pb-0 pl-8 transition-[margin-right] duration-[var(--layout-section-transition-duration)]';
const mainBaseClasses = 'flex flex-auto pb-8';
const sidebarBaseClasses = 'fixed w-80 h-[calc(100vh-8rem)] z-[100] overflow-y-auto select-none top-24 left-8 transition';

</script>

<template>
  <div class="min-h-screen">
    <AppHeader></AppHeader>
<!--    <AppSidebar :class="sidebarBaseClasses"></AppSidebar>-->
    <div :class="mainContainerBaseClasses">
      <div :class="mainBaseClasses">
        <slot/>
      </div>
      <AppFooter></AppFooter>
    </div>
    <div class="layout-mask animate-fadein"></div>
  </div>
  <PrimeToast />
</template>