

// const layoutTypes = {
//     overlay: {
//         mainContainer: 'ml-0 pl-8',
//         main: '',
//         sidebar: '-translate-x-full left-0 top-0 h-full rounded-l-none rounded-r-sm transition shadow-md',
//     },
//     overlayActive: {
//         mainContainer: 'ml-0 pl-8',
//         sidebar: 'translate-x-0 left-0 top-0 h-full rounded-l-none rounded-r-sm transition shadow-md',
//     },
//     static: {
//         mainContainer: 'ml-[22rem]',
//         sidebar: '',
//     },
//     staticInactive: {
//         mainContainer: 'ml-0 pl-8',
//         sidebar: '-translate-x-full left-0',
//     },
//     mobileActive: {
//         mainContainer: '',
//         sidebar: '',
//     },
// };

export const useAdminSiteLayoutStore = defineStore('adminSiteLayoutStore', () => {
    //sidebar
    const isSidebarActive: Ref<boolean> = ref<boolean>(true);

    function toggleSidebar() {
        isSidebarActive.value = !isSidebarActive.value;
    }

    //layout config
    // const currentLayoutType: Ref<'overlay' | 'static'> = ref('static')
    // const mainContainerClass: ComputedRef<string> = computed( () => layoutTypes[currentLayoutType.value].mainContainer);
    // const sidebarClass: ComputedRef<string> = computed( () => layoutTypes[currentLayoutType.value].sidebar);

    return { isSidebarActive, toggleSidebar}
})