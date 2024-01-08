<template >
   <div class="">
    <div class="flex gap-1">
      <div class="text-[#2CB26D] py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Персональные данные
      </div>
      <div class="bg-[#F9F9F9] text-slate-500 py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Информация о компании
      </div>
    </div>
    <div class="p-4 flex flex-col">
      <h1 class="font-medium text-2xl">Персональные данные</h1>
      <div class="flex items-center relative grid col-span-2">
        <div class=" w-28 relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4">
          <img :src="gallery" class="w-12 h-12 " alt="">
          <a href="#" class="absolute bottom-0 right-0 p-3 border border-slate-200 bg-white rounded-full"><Icon name="mode" /></a>
        </div>
        <div class="flex "><h1 class="font-bold text-3xl text-nowrap ">KANS BARAKA MCHJ</h1></div>
      </div>
      <div class="flex grid grid-cols-3 gap-5 mt-5">
        <div class="flex  flex-col col-span-1">
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="+998">
          </div>
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="-">
          </div>
          <div class="flex-col flex">
            <span class="text-base font-medium" >Махаля</span>
            <button @click="toggleDropdown" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2 flex justify-between items-center">Выбрать <Icon name="arrow_down" /></button>
            <!-- Выпадающий список -->
    <ul v-show="isDropdownVisible">
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
    </ul>
          </div>
        </div>
        <div class="flex  flex-col col-span-1">
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="+998">
          </div>
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="-">
          </div>
          <div class="flex-col flex">
            <span class="text-base font-medium" >Махаля</span>
            <button @click="toggleDropdown" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2 flex justify-between items-center">Выбрать <Icon name="arrow_down" /></button>
            <!-- Выпадающий список -->
    <ul v-show="isDropdownVisible">
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
    </ul>
          </div>
        </div>
        <div class="flex  flex-col col-span-1">
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="+998">
          </div>
          <div class="flex-col flex">
            <label for="num" class="text-base font-medium">Номер телефона</label>
        <input type="text" name="num" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2" placeholder="-">
          </div>
          <div class="flex-col flex">
            <span class="text-base font-medium" >Махаля</span>
            <button @click="toggleDropdown" class="border border-slate-300 px-4 py-2 w-full rounded-lg my-2 flex justify-between items-center">Выбрать <Icon name="arrow_down" /></button>
            <!-- Выпадающий список -->
    <ul v-show="isDropdownVisible">
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
    </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
<script setup>
import gallery from "@/assets/img/gallery.png"; 
import { ref } from 'vue';

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
definePageMeta({
  layout: 'profile'
})
</script>
<style >
     
</style>