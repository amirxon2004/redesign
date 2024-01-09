<template lang="">
   <div class="flex gap-1">
      <div @click="showTab(1)" :class="{ 'active': activeTab === 1 }" class="cursor-pointer text-sm py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Договора
      </div>
      <div @click="showTab(2)" :class="{ 'active': activeTab === 2 }" class=" cursor-pointer text-sm text-slate-500 py-3 px-6 border border-2 border-slate-200 text-nowrap rounded-t-xl">
        Счет фактуры
      </div>
    </div>
  <div class="border rounded-tr-xl">

    <div class="" v-show="activeTab === 1">
      <div class="my-4">
        <h1 class="font-medium text-xl">Дополнительные документы</h1> 
      </div>
      <div class=" flex gap-5 w-2/4 p-4">
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn"/>
        
      </div>
      <div class=" p-4">
  <table class="table-auto border-collapse border border-gray-400">
    <thead>
      <tr>
        <th class="px-4 py-2 border border-gray-400">№</th>
        <th class="px-4 py-2 border border-gray-400">Поставщик</th>
        <th class="px-4 py-2 border border-gray-400">Номер</th>
        <th class="px-4 py-2 border border-gray-400">Дата</th>
        <th class="px-4 py-2 border border-gray-400">Сумма ₽</th>
        <th class="px-4 py-2 border border-gray-400">Продавец</th>
        <th class="px-4 py-2 border border-gray-400">Покупатель</th>
        <th class="px-4 py-2 border border-gray-400">Способ оплаты</th>
        <th class="px-4 py-2 border border-gray-400">Статус</th>
        <th class="px-4 py-2 border border-gray-400">Доверенность</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 border border-gray-400">1</td>
        <td class="px-4 py-2 border border-gray-400">SMART MARKETPLACE MCHJ</td>
        <td class="px-4 py-2 border border-gray-400">1998778</td>
        <td class="px-4 py-2 border border-gray-400">2023-12-05</td>
        <td class="px-4 py-2 border border-gray-400">20 000</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">Перевести деньги</td>
        <td class="px-4 py-2 border border-gray-400 text-green-500">Полностью подписана</td>
        <td class="px-4 py-2 border border-gray-400"><a href="#">Изменить</a></td>
      </tr>
      <tr>
        <td class="px-4 py-2 border border-gray-400">2</td>
        <td class="px-4 py-2 border border-gray-400">SMART MARKETPLACE MCHJ</td>
        <td class="px-4 py-2 border border-gray-400">1998778</td>
        <td class="px-4 py-2 border border-gray-400">2023-12-05</td>
        <td class="px-4 py-2 border border-gray-400">20 000</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">Перевести деньги</td>
        <td class="px-4 py-2 border border-gray-400 text-red-500">Отменен</td>
        <td class="px-4 py-2 border border-gray-400"><a href="#">Изменить</a></td>
      </tr>
      <tr>
        <td class="px-4 py-2 border border-gray-400">3</td>
        <td class="px-4 py-2 border border-gray-400">SMART MARKETPLACE MCHJ</td>
        <td class="px-4 py-2 border border-gray-400">1998778</td>
        <td class="px-4 py-2 border border-gray-400">2023-12-05</td>
        <td class="px-4 py-2 border border-gray-400">20 000</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">05.12.2023</td>
        <td class="px-4 py-2 border border-gray-400">Перевести деньги</td>
        <td class="px-4 py-2 border border-gray-400 text-yellow-500">Ожидание</td>
        <td class="px-4 py-2 border border-gray-400"><a href="#">Изменить</a></td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref(1);

const showTab = (tabNumber) => {
  activeTab.value = tabNumber;
};
definePageMeta({
  layout: 'profile'
})
</script>
<style lang="">
    
</style>