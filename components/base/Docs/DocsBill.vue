<template>
  <div>
    <div class="p-4">
      <h1 class="font-medium text-xl my-4">Дополнительные документы</h1>

      <div>
        <div class="border rounded-xl  overflow-hidden">
          <table class="w-full">

            <tbody class="border">

              <tr class=" border  bg-[#FCFCFC]">
                <th class=" border text-sm font-normal px-3 " rowspan="3">№</th>
                <!-- <th class=" border text-sm font-normal px-3 " rowspan="3">Поставщик</th> -->
                <th class=" border text-sm font-normal px-3 " colspan="6">Договор</th>
                <th class=" border text-sm font-normal px-3 " colspan="2">Акт помощника хокима</th>
                <th class=" border text-sm font-normal px-3 " rowspan="3">Способ оплаты</th>

              </tr>
              <tr class="border bg-[#FCFCFC]">
                <th class=" border  text-sm font-normal px-3" rowspan="2">Дата</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Номера</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Сумма</th>
                <th class=" border  text-sm font-normal px-3" colspan="2">Дата подписания</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Статус</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Дата</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Результат</th>
              </tr>
              <tr class="border bg-[#FCFCFC]">
                <th class=" border  text-sm font-normal px-3">Продавец</th>
                <th class=" border  text-sm font-normal px-3">Покупатель</th>
              </tr>
              <tr class="border">
                <td class=" border text-center text-xs p-2">1</td>
                <td class=" border text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
                <td class=" border text-center text-xs p-2">1998778</td>
                <td class=" border text-center text-xs p-2">20 000</td>
                <td class=" border text-center text-xs p-2">2023-12-05</td>
                <td class=" border text-center text-xs p-2">05.12.2023</td>
                <td class=" border text-center text-xs p-2 bg-[#f4fbf8] text-[#2CB26D]">Польностью подписан</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center text-xs p-2 text-[#2CB26D] underline">Изменить</td>
              </tr>
              <tr class="border">
                <td class=" border text-center text-xs p-2">1</td>
                <td class=" border text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
                <td class=" border text-center text-xs p-2">1998778</td>
                <td class=" border text-center text-xs p-2">20 000</td>
                <td class=" border text-center text-xs p-2">2023-12-05</td>
                <td class=" border text-center text-xs p-2">05.12.2023</td>
                <td class=" border text-center text-xs p-2 bg-[#fffaf2] text-[#FF9900]">Ожидание</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center cursor-pointer text-xs p-2 text-[#2CB26D] underline">Изменить</td>
              </tr>
              <tr class="border">
                <td class=" border text-center text-xs p-2">1</td>
                <td class=" border text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
                <td class=" border text-center text-xs p-2">1998778</td>
                <td class=" border text-center text-xs p-2">20 000</td>
                <td class=" border text-center text-xs p-2">2023-12-05</td>
                <td class=" border text-center text-xs p-2">05.12.2023</td>
                <td class=" border text-center text-xs p-2 bg-[#fff5f7] text-[#FF4164]">Отменен</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center text-xs p-2">-</td>
                <td class=" border text-center text-xs p-2 text-[#2CB26D] underline">Изменить</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-full flex justify-center mt-6">
        <el-pagination :hide-on-single-page="true" :page-size="pagination.page_size"
          v-model:current-page="pagination.page" :total="pagination.total" background layout="prev, pager, next" />
      </div>
    </div>
  </div>
</template>
<script setup>
const size = ref('default')
const labelPosition = ref('right')
const pagination = reactive({
  total: 1,
  page_size: 15,
  page: 1
})
const sizeForm = reactive({
  option1: null,
  option2: null,
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>
<style lang="">
    
</style>