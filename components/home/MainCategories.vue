<template>
    <section class="w-full flex justify-center p-4">
        <div class="f-container flex justify-between">
            <div class="flex items-center gap-4 overflow-hidden">
                <nuxt-link to="/product" v-for="(item, i) in List" :key="i" class=" bg-white px-4 py-2 border rounded-lg  text-sm text-gray-600 font-bold min-w-[fit-content] flex items-center gap-2 cursor-pointer hover:text-green-500"> 
                    <Icon :name="item.icon" width="20px" height="20px" v-if="item.icon" />  
                    {{ item.name }}
                </nuxt-link>
            </div>
        </div>
        
    </section>
</template>
<script setup> 
const List=ref([
    {
        name:"Me'valar",
        icon:'icon-fruits'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    },
    {
        name:"Uy va bog'",
        icon:'icon-flowers-water'
    }
])

</script>