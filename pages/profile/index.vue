<template>
    <div class="w-full">
        <div class="flex flex-col items-start justify-start">
            <div class="w-full">
                <div class="w-full" style="border-bottom: 1px solid #DFE2E9;">
                    <div class="flex items-center justify-start gap-[0.3rem] -mb-[1px]">
                        <div v-for="item in tabs" @click="activeIndex = item.id"
                            class="card-tab cursor-pointer transition-all px-[1.5rem] py-[1rem] border-[1px] text-md border-[#DFE2E9] border-b-[1px] rounded-t-[0.75rem] rounded-r-0 rounded-b-0 rounded-l-0 bg-[#F9F9F9]"
                            :class="{ '!border-b-[1px] !border-b-[transparent] text-[#2CB26D] font-[500] !bg-white': activeIndex == item.id }">
                            {{ item.tabName }}
                        </div>
                    </div>
                </div>
                <div class="active-tab w-full">
                        <FormsProfileDetails v-if="activeIndex == 1" />
                        <FormsProfileCompany v-if="activeIndex == 2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'profile'
})
const activeIndex = ref(1)
const tabs = reactive([
    {
        tabName: 'Персональные данные',
        id: 1
    },
    {
        tabName: 'Информация о компании',
        id: 2
    }
])
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>