<template >
   <div>
      <div class="p-4">
        <h1 class="font-medium text-xl">Дополнительные документы</h1> 
      </div>
      <div class=" flex gap-5  p-4">
        <el-form ref="form" class="flex filters-card gap-4 justify-start items-end flex-wrap " :model="sizeForm"
                        label-width="auto" label-position="top" size="large">
                        <el-form-item label="Способ оплаты">
                            <el-select v-model="sizeForm.option1" placeholder="Выбрать">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Статус">
                            <el-select v-model="sizeForm.option2" placeholder="Выбрать">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <button @click="onSubmit"
                                class="rounded-[--el-border-radius-small] px-3 min-h-[--el-component-size-large] border-[1px] text-xs text-[#2CB26D] hover:bg-[#2CB26D] hover:text-white transition-all font-bold border-[#2CB26D]">Сбросить
                                фильтр</button>
                        </el-form-item>
                    </el-form>
        
      </div>
      <div class="p-4">
      <div class="border rounded-xl  overflow-hidden">
        <table class="w-full">
 
 <tbody class="">

  <tr class="   bg-[#FCFCFC]">
   <th class="  text-sm font-normal px-3 " rowspan="2">№</th>
   <th class=" border border-t-0 text-sm font-normal px-3 " rowspan="2">Поставщик</th>
   <th class=" border border-t-0 text-sm font-normal px-3 " colspan="3">Договор</th>
   <th class=" border border-t-0 text-sm font-normal px-3 " colspan="2">Дата подписания</th>
   <th class=" border border-t-0 text-sm font-normal px-3 " rowspan="2">Способ оплаты</th>
   <th class=" border border-t-0 text-sm font-normal px-3 " rowspan="2">Статус</th>
   <th class="  text-sm font-normal px-3 " rowspan="2">Доверенность</th>

 </tr>
 <tr class="border bg-[#FCFCFC]">
 <th class=" border  text-sm font-normal px-3">Номера</th>
   <th class=" border  text-sm font-normal px-3">Дата</th>
   <th class=" border  text-sm font-normal px-3">Сумма</th>
   <th class=" border  text-sm font-normal px-3">Продавец</th>
   <th class=" border  text-sm font-normal px-3">Покупатель</th>
 </tr>
 <tr class="border">
   <td class=" border text-center text-xs p-2">1</td>
   <td class=" border text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
   <td class=" border text-center text-xs p-2">1998778</td>
   <td class=" border text-center text-xs p-2">2023-12-05</td>
   <td class=" border text-center text-xs p-2">20 000</td>
   <td class=" border text-center text-xs p-2">05.12.2023</td>
   <td class=" border text-center text-xs p-2">05.12.2023</td>
   <td class=" border text-center text-xs p-2">Перевести деньги</td>
   <td class=" border text-center text-xs p-2 bg-[#f4fbf8] text-[#2CB26D]">Польностью подписан</td>
   <td class=" border text-center cursor-pointer text-xs p-2 text-[#2CB26D] underline">Изменить</td>
 </tr>
 <tr class="border">
   <td class=" border text-center text-xs p-2">1</td>
   <td class=" border text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
   <td class=" border text-center text-xs p-2">1998778</td>
   <td class=" border text-center text-xs p-2">2023-12-05</td>
   <td class=" border text-center text-xs p-2">20 000</td>
   <td class=" border text-center text-xs p-2">05.12.2023</td>
   <td class=" border text-center text-xs p-2">05.12.2023</td>
   <td class=" border text-center text-xs p-2">Перевести деньги</td>
   <td class=" border text-center text-xs p-2 bg-[#fffaf2] text-[#FF9900]">Ожидание</td>
   <td class=" border text-center text-xs p-2 text-[#2CB26D] underline">Изменить</td>
 </tr>
 <tr class="border">
   <td class=" border border-b-0  text-center text-xs p-2">1</td>
   <td class=" border border-b-0 text-center text-xs p-2">“SMART MARKETPLACE” MCHJ</td>
   <td class=" border border-b-0 text-center text-xs p-2">1998778</td>
   <td class=" border border-b-0 text-center text-xs p-2">2023-12-05</td>
   <td class=" border border-b-0 text-center text-xs p-2">20 000</td>
   <td class=" border border-b-0 text-center text-xs p-2">05.12.2023</td>
   <td class=" border border-b-0 text-center text-xs p-2">05.12.2023</td>
   <td class=" border border-b-0 text-center text-xs p-2">Перевести деньги</td>
   <td class=" border border-b-0 text-center text-xs p-2 bg-[#fff5f7] text-[#FF4164]">Отменен</td>
   <td class=" border border-b-0 text-center text-xs p-2 text-[#2CB26D] underline">Изменить</td>
 </tr>
 </tbody>
</table>
      </div>
<div class="w-full flex justify-center mt-6">
                        <el-pagination :hide-on-single-page="true" :page-size="pagination.page_size"
                            v-model:current-page="pagination.page" :total="pagination.total" background
                            layout="prev, pager, next" />
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
    option1:null,
    option2:null,
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
</script>
<style >
    .el-radio-group {
    margin-right: 12px;
}


</style>