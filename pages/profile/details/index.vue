<template >
   <div class="">
    <div class="flex gap-1">
      <div @click="showTab(1)" :class="{ 'active': activeTab === 1 }" class="cursor-pointer text-sm py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Персональные данные
      </div>
      <div @click="showTab(2)" :class="{ 'active': activeTab === 2 }" class=" cursor-pointer text-sm text-slate-500 py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Информация о компании
      </div>
    </div>
 <div class="border rounded-tr-xl">
  <div class="" v-show="activeTab === 1">
    <div class="p-4 flex flex-col">
      <h1 class="font-medium text-xl">Персональные данные</h1>
      <div class="flex items-center relative">
        <div class=" w-24 relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4 col-span-1">
          <img :src="gallery" class="w-8 h-8 " alt="">
          <a href="#" class="absolute bottom-0 right-0 p-3 border border-slate-200 bg-white rounded-full"><Icon name="mode" /></a>
        </div>
        <div class="flex col-span-1"><h1 class="font-bold text-2xl text-nowrap ">KANS BARAKA MCHJ</h1></div>
      </div>
      <div class="flex grid grid-cols-3 gap-5 mt-5">
        <div class="flex  flex-col col-span-1">
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

         
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />
          <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

        </div>
        <div class="flex  flex-col col-span-1">
          <div class="flex-col flex">
            <label for="num" class="text-xs font-medium">Дата рождения</label>
        <input type="date" name="num" class="border border-slate-300 px-4 py-1.5 w-full rounded-lg my-2" placeholder="date">
          </div>
          <BaseMenuSelect title="Регион" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

          <BaseMenuSelect title="Дом" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

        </div>
        <div class="flex  flex-col col-span-1">
     
          <div class="grid grid-cols-3 gap-2 items-center">
            <div class="flex flex-col col-span-1">
              <BaseInput label="Серия пасспорта" placeholder="-" name="num" class="" value="" type="text" />

            </div>
            <div class="flex flex-col col-span-2">
              <BaseInput label="Номер пасспорта" placeholder="-" name="num" class="" value="" type="text" />

            </div>
          </div>
          <BaseMenuSelect title="Район" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

        </div>
      </div>
    </div>
    <div class="p-4 flex flex-col border">
      <h1 class="font-medium text-xl">Введите регион доставки</h1>
      <div class="grid grid-cols-3 gap-5 my-5">
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

          <BaseMenuSelect title="Район" :selects="selects" ShowId="rayon" ClickId="rayonbtn"/>
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

      </div>
      <div class="flex"><button class="border border-[#2CB26D] text-[#2CB26D] text-base py-2 px-5 rounded-md">Добавить новый адрес</button></div>
    </div>
    <div class="p-4 flex flex-col border">
      <h1 class="font-medium text-xl">Активные сеансы</h1>
      <BaseCardsSeans :actives="actives" />
      </div>
      <div class="p-4 flex flex-col border">
      <h1 class="font-medium text-xl">Способ получения уводемления</h1>
      <div class="my-5 flex gap-5">
        <BaseCheck :notifs="notifs" />
        <!-- message-text -->
      </div>
      </div>
     
  </div>
  <div class="" v-show="activeTab === 2">
    <div class="p-4 flex flex-col">
      <h1 class="font-medium text-xl">Персональные данные</h1>
      <div class="flex items-center relative">
        <div class=" w-24 relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4 ">
          <img :src="gallery" class="w-8 h-8 " alt="">
          <a href="#" class="absolute bottom-0 right-0 p-3 border border-slate-200 bg-white rounded-full"><Icon name="mode" /></a>
        </div>
        <div class="flex col-span-1  flex-col gap-1">
          <h1 class="font-bold text-2xl text-nowrap ">KANS BARAKA MCHJ</h1>
          <a href="#" class="text-[#2CB26D]">Добавить лого</a>
        </div>
      </div>
      <div class="flex grid grid-cols-2 gap-5 mt-5">
        <div class="flex  flex-col col-span-1">
         <div class="flex grid grid-cols-2 gap-3">
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

         </div>
          <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>
          <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>



        </div>
        <div class="flex  flex-col col-span-1">
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

          <div class="flex grid grid-cols-2 gap-3">
            <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

            <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

         </div>
         <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>

        </div>
     
      </div>
      <div class="flex-col flex">
            <label for="num" class="text-xs font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-1.5 w-full rounded-lg my-2" placeholder="+998">
          </div>
    </div>
    <div class="p-4 flex flex-col">
      <h1 class="font-medium text-xl">Руководитель предприятия</h1>
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1">
          <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

          <div class="grid grid-cols-3 gap-2 items-center">
            <div class="flex flex-col col-span-1">
              <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

            </div>
            <div class="flex flex-col col-span-2">
              <BaseInput label="Электронная почта" placeholder="-" name="num" class="" value="" type="text" />

            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex-col flex">
            <label for="num" class="text-xs font-medium">Дата рождения</label>
        <input type="date" name="num" class="border border-slate-300 px-4 py-1.5 w-full rounded-lg my-2" placeholder="date">
          </div>
        <div class="flex flex-col">
          <div class="flex-col flex ">
            <label for="num" class="text-xs font-medium">Номер телефона</label>
        <div class="grid grid-cols-3 gap-5 items-center">
          <input type="text" name="num" class="border border-slate-300 px-4 py-1.5 w-full rounded-lg my-2 col-span-2" placeholder="+998">
        <button class="text-[#2CB26D] font-medium border border-[#2CB26D] px-3 col-span-1 py-2 rounded-md gap-3 flex items-center"><Icon name="refresh" w="18px" /> <span>Проверить</span></button>
        </div>
          </div>
         
        </div>
        </div>
      </div>
    </div>
    <div class="p-4 flex flex-col">
      <h1 class="font-medium text-xl">Дополнительные документы</h1> 
      <div class="grid grid-cols-2 gap-5 py-5">
        <div class="p-4 border border-slate-200 rounded-lg flex flex-col gap-5">
          <div class="flex gap-3 items-center">
            <Icon name="document-text" w="20px" />
            <h1 class="text-lg font-medium text-slate-500">Предложение Hujjat.uz</h1>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-[#2CB26D] text-white px-3 text-xs py-1 rounded-md flex gap-3 items-center"><Icon name="edit-2" w="16px" /> <span>Подписание</span></button>
            <Icon name="Hujjat-smalllogo" w="20px" />
          </div>
        </div>
        <div class="p-4 border border-slate-200 rounded-lg flex flex-col gap-5">
          <div class="flex gap-3 items-center">
            <Icon name="document-text" w="20px" />
            <h1 class="text-lg font-medium text-slate-500">Предложение Hujjat.uz</h1>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-[#2CB26D] text-white px-3 text-xs py-1 rounded-md flex gap-3 items-center"><Icon name="edit-2" w="16px" /> <span>Подписание</span></button>
            <Icon name="Hujjat-smalllogo" w="20px" />
          </div>
        </div>
      </div>
      </div>
  </div>
 </div>
  <div class="p-4 pt-10 pb-6 flex justify-end border border-t-0 rounded-b-xl">
        <button type="submit" class="bg-[#2CB26D] text-white px-3 py-2 rounded-lg">Сохранить изменение</button>
      </div>
   </div>
</template>
<script setup>
import gallery from "@/assets/img/gallery.png"; 
import { ref } from 'vue';

const activeTab = ref(1);

const showTab = (tabNumber) => {
  activeTab.value = tabNumber;
};
const selects = [
  {
    id:1,
    title:'Olmazor'
  },
  {
    id:1,
    title:'Chorsu'
  },
]
const maxalla = [
  {
    id:1,
    title:'Olmazor'
  },
  {
    id:1,
    title:'Chorsu'
  },
]

const actives = [
  {
    title:'Chrome',
    device:'Mac Os X',
    icon:'closered',
    status:'now',
    seans:'Текущий сеанс'
  },
  {
    title:'Chrome',
    device:'Windows 11',
    icon:'closered',
    status:'1 hrs',
    seans:'1 час назад'
  },
]

const notifs = [
{
  id:1,
  icon:'message-text',
  title:'СМС',
},
{
  id:2,
  icon:'telegram-plane',
  title:'Телеграм бот',
},
{
  id:3,
  icon:'sms',
  title:'Электронная почта',
},
]

definePageMeta({
  layout: 'profile'
})
</script>
<style >
    .active {
      background-color: #f9f9f9f9;
      color: #2CB26D;
    }
</style>