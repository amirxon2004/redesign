<template lang="">
   <BaseBreadCrumb />
   <h1 class="text-3xl font-medium text-slate-700 my-5">Сравнение</h1>
  

    <div  v-if="compairitems.length > 0" >
      <SectionsCompairCards :swipes="swipes" class="" :items="compairitems" />
    </div>
    <div class="" v-else>

   <BaseCardsEmptyCard  :src="comparison" title="Список сравнения пуст" desc="Чтобы сравнить понравившиеся товары, добавьте их в список Добавить к сравнению." />
    
<SectionsShortItems  catlink="#" cattitle="Рекомендуемые товары" catdesc="Вам может быть интересно" :items="customitems" /> 
    </div>

</template>
<script setup> 
import comparison from "@/assets/svg/comparison.svg"; 
import lambo from "@/assets/img/lambo.jpg"; 
import close from "@/assets/svg/close.svg";  
// Short Posts
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
const compairitems = [
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
const swipes = [
    { 
        url:"#",
        title:"Лимон",
    },
    {
        url:"#",
        title:"Виноград",
    },
    {
        url:"#",
        title:"Семена",
    },
    {
        url:"#",
        title:"Пчеловодство",
    },
    {
        url:"#",
        title:"Птицеводство",
    },
    {
        url:"#",
        title:"Зайцеводство",
    },
    {
        url:"#",
        title:"Питание",
    },
]

</script>
<style lang="">
    
</style>