<template >
<SectionsSlider />
<SectionsSwipperCards /> 
<SectionsShortItems catlink="#" cattitle="Рекомендуемые товары" catdesc="Вам может быть интересно" :items="customitems" /> 
<SectionsShortBan catlink="#" cattitle="Популярные продукты" catdesc="Самые продаваемые продукты" :items="customban" :banitem="mybanitem"  />  
<SectionsShortItems catlink="#" cattitle="Новые продукты" catdesc="Недавно добавленные продукты" :items="customNew" /> 
<SectionsShortFullBan catlink="#" cattitle="Самые дешевые продукты" catdesc="По направлениям" :items="customfullban" /> 
<SectionsShortItems catlink="#" cattitle="Товары и услуги" catdesc="высоко оцененные потребителями" :items="customlow" /> 
<SectionsShortSmBan catlink="#" cattitle="Средняя цена" catdesc="Товаров и услуг" :items="customshort" :smban="smban"/>  
<Partners />

</template> 
<script setup>
import lambo from "@/assets/img/lambo.jpg"; 
import food from "@/assets/img/food.jpg"; 
import ban2 from "@/assets/img/ban2.jpg"; 
import mylemon from "@/assets/img/lemon.jpg"; 
import Partners from "~/components/sections/Partners.vue";
// Banners
const mybanitem = [
    {
        id:1,
        href:"#",
        src:food,
    }
]

const smban = [
    {
        id:1,
        href:"#",
        src:mylemon,
    }
]

// short posts
const customitems = [
    {
        id:1,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 4,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:2,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 5,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    },
    {
        id:3,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 3,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:4,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 1,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    }
]
const customban = [
    {
        id:1,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 4,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:2,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 5,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    },
    {
        id:3,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 3,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
]



const customNew = [
    {
        id:1,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 4,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:2,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 5,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    },
    {
        id:3,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 3,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:4,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 1,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    }
]
const customfullban = [
    {
        id:1,
        href:"#",
        src:ban2,
    },
    {
        id:2,
        href:"#",
        src:ban2,
    },
    {
        id:3,
        href:"#",
        src:ban2,
    },
    {
        id:4,
        href:"#",
        src:ban2,
    }
]

const customlow = [
    {
        id:1,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 4,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:2,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 5,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    },
    {
        id:3,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 3,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:4,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 1,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    }
]

const customshort = [
    {
        id:1,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 4,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:2,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 5,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    },
    {
        id:3,
        href:"#",
        title:'Lamborghini r8 270',
        price:'3 000 000 $',
        rate: 3,
        views:'1232',
        src:lambo,
        option:'Есть рассрочка'
    },
    {
        id:4,
        href:"#",
        title:'Lamborghini r8 270',
        price:'2 735 000 $',
        rate: 1,
        views:'1232',
        src:lambo,
        option:'-15 кэшбэк'
    }
]
</script>
<style >
    
</style>