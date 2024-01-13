<template>
    <div class="flex w-full flex-col max-w-[260px] border border-[#DFE2E9] rounded-[10px] py-[10px]">
        <nuxt-link v-for="item in links"
            class="px-[1rem] py-[0.7rem] group mb-[2px] flex items-center border-[transparent] gap-[1.2rem] justify-start profile-link transition-all  hover:border-r-[#2CB26D] border-r-[2px]"
            :to="item.router">
            <Icon :name="item.iconName" class="profile-link-svg" width="20px" height="20px" />
            <p
                class="text-[#48545D]  profile-link-text  font-[400] group-hover:font-[500] group-hover:text-[#2CB26D] !text-xs">
                {{ item.title }}</p>
        </nuxt-link>
        <nuxt-link
            class="px-[1rem] py-[0.7rem] group mb-[2px] flex items-center border-[transparent] gap-[1.2rem] justify-start hover:bg-red-50 transition-all  hover:border-red-400 border-r-[2px]">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M7.41675 6.3002C7.67508 3.3002 9.21675 2.0752 12.5917 2.0752H12.7001C16.4251 2.0752 17.9167 3.56686 17.9167 7.29186V12.7252C17.9167 16.4502 16.4251 17.9419 12.7001 17.9419H12.5917C9.24175 17.9419 7.70008 16.7335 7.42508 13.7835"
                    stroke="#FB577C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.66675 10H12.4001" stroke="#FB577C" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M10.5417 7.20801L13.3334 9.99967L10.5417 12.7913" stroke="#FB577C" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
            <p
                class="text-[#FB577C]  profile-link-text  font-[400] group-hover:font-[500] group-hover:text-[#FB577C] !text-xs">
                Выйти</p>
        </nuxt-link>
    </div>
</template>

<script setup>
const route = useRoute();
const links = reactive([
    {
        iconName: 'icon-person',
        title: "Персональные данные",
        router: "/profile"
    },
    {
        iconName: 'icon-docs',
        title: "Документы",
        router: "/profile/docs"
    },
    {
        iconName: 'icon-bells',
        title: "Уведомление",
        router: "/profile/notification"
    },
    {
        iconName: 'icon-cards',
        title: "Карты",
        router: "/profile/card"
    },
    {
        iconName: 'icon-billing',
        title: "Биллинг",
        router: "/profile/billing"
    },
    {
        iconName: 'icon-box',
        title: "Заказы",
        router: "/profile/order"
    },
    // {
    //     iconName:'icon-likes',
    //     title:"Избранное",
    //     router:"/"
    // },
    // {
    //     iconName:'icon-baskets',
    //     title:"Корзина",
    //     router:"/"
    // }
]);

</script>

<style lang="scss" scoped></style>