<script setup lang="ts">
type ActionMenuItem = {
  order: number,
  iconName: string,
  displayName: string,
}

const actionMenuItems: ActionMenuItem[] = [
  {order:1, iconName: 'prime:calendar', displayName:'Calendar'},
  {order:2, iconName: 'prime:inbox', displayName:'Messages'},
  {order:3, iconName: 'prime:user', displayName:'Profile'},
];

</script>

<template>
  <div class="flex gap-4 ml-auto">
    <div class="flex gap-4">
      <ColorModePicker/>
      <ThemeConfiguratorButton/>
    </div>

    <HeaderButton class="lg:hidden" v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }">
      <HeaderButtonIcon name="prime:ellipsis-v"/>
    </HeaderButton>

    <div class="absolute p-4 right-8 top-16 min-w-60 hidden bg-surface-0 dark:bg-surface-900 box-shadow rounded-lg border-2 border-surface-100
            lg:static lg:block lg:min-w-0 lg:p-0 lg:border-none"
    >
      <div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <HeaderButton class="justify-start px-2 w-auto lg:w-10 h-10 gap-2" v-for="actionMenuItem in actionMenuItems" :key="actionMenuItem.order">
          <HeaderButtonIcon :name="actionMenuItem.iconName"/>
          <span class="font-medium block lg:hidden">{{ actionMenuItem.displayName }}</span>
        </HeaderButton>
      </div>
    </div>
  </div>
</template>