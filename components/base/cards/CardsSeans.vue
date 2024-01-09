<template lang="">
    <ul class="flex flex-col my-2">
        <li v-for="(active,index) in actives" :key="index">
            <div class="flex justify-between py-2 border-b">
                <div class="flex items-center gap-3">
                    <Icon name="laptop" w="32px"  />
                    <div class="flex flex-col">
                        <h1 class="text-md font-medium leading-4">{{ active.title }}</h1>
                        <span class="text-slate-500 text-xs">{{ active.device }}</span>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <span class=" bg-slate-100 px-1 py-0.5 rounded text-xs" :class="{ 'text-[#32B98C]': nowstatus == active.status },{ 'bg-[#32B98C1F]': nowstatus == active.status }">{{ active.seans }}</span>
                    <button> <Icon :name="active.icon" w="24px"  /></button>
                </div>
            </div>
        </li>
    </ul>
</template>
<script setup>
const props = defineProps(['actives']);

const nowstatus = 'now'
</script>
<style lang="">
    
</style>