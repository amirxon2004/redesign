<template>
  <div class="">
    <div class="p-4">
      <h1 class="font-medium text-xl my-4">Безопасная оплата</h1>
      <div class=" flex gap-5 w-2/4 pb-4">
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn" />
        <BaseMenuSelect title="Махалля" :selects="maxalla" ShowId="maxalla" ClickId="maxallabtn" />

      </div>
      <div>
        <div class="border rounded-xl  overflow-hidden">
          <table class="w-full">

            <tbody class="border">

              <tr class=" border  bg-[#FCFCFC]">
                <th class=" border text-sm font-normal px-3 " rowspan="3">№</th>
                <!-- <th class=" border text-sm font-normal px-3 " rowspan="3">Поставщик</th> -->
                <th class=" border text-sm font-normal px-3 " rowspan="3">Дата</th>
                <th class=" border text-sm font-normal px-3 " rowspan="3">Номер</th>

                <th class=" border text-sm font-normal px-3 " colspan="2">Кому это надо</th>
                <th class=" border text-sm font-normal px-3 " colspan="4">Дата подписания</th>
                <th class=" border text-sm font-normal px-3 " rowspan="3">Статус</th>

              </tr>
              <tr class="border bg-[#FCFCFC]">
                <th class=" border  text-sm font-normal px-3" rowspan="2">Ф.И.О</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">ЖШШИР</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Клиент</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Агент</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Агент</th>
                <th class=" border  text-sm font-normal px-3" rowspan="2">Предприятие</th>
              </tr>
              <tr class="border bg-[#FCFCFC]">
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
                <td class=" border text-center text-xs p-2 text-[#2CB26D] underline">Изменить</td>
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
                <td class=" border text-center cursor-pointer text-xs p-2 text-[#2CB26D] underline">Изменить</td>
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
<style></style>