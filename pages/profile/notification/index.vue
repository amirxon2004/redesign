<template>
    <div class="w-full border border-[#DFE2E9] bg-white p-6 rounded-xl min-h-[50dvh]">
        <h1 class="text-black text-lg font-semibold">Уведомление</h1>
        <div class="w-full mt-6">
            <el-form ref="form" class="flex filters-card gap-4 justify-start items-end flex-wrap " :model="sizeForm"
                        label-width="auto" label-position="top" size="large">
                        <el-form-item label="Статус">
                            <el-select v-model="sizeForm.option1" placeholder="Выбрать">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Способ оплаты">
                            <el-select v-model="sizeForm.option2" placeholder="Выбрать">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item>
                    </el-form>
        </div>
        <div class="mt-9">
            <div>
                <h1 class="text-black text-base font-semibold">История уведомление</h1>
                <div class="w-full overflow-hidden mt-6 rounded-lg border border-[#DFE2E9]">
                    <table class="scroll default text-center w-full align-middle">
                        <thead class="bg-[#FCFCFC] border-b">
                            <tr>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">№</p>
                                </th>
                                <!-- <th rowspan="2">
                                    <p>Тип</p>
                                </th> -->
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">Продавец</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">Товар</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start whitespace-nowrap">Дата</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">Цена</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start whitespace-nowrap">Количество</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">Способ оплаты</p>
                                </th>
                                <th rowspan="2">
                                    <p class="px-3 py-5 text-xs font-medium text-start">Статус</p>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 2">
                                <td>
                                    <p class="px-3 py-5 text-xs font-medium">{{ item }}</p>
                                </td>
                                <td>
                                    <p class="px-3 underline cursor-pointer py-5 max-w-[150px] text-xs text-start font-medium">MEHRIBONGINAM
MCHJ</p>
                                </td>
                                <td>
                                    <p class="px-3 cursor-pointer underline py-5 text-xs text-start font-medium max-w-[180px]">Артезан казиш хизмати
контракт №-2006128</p>
                                </td>

                                <td>
                                    <p class="px-3 py-5 text-xs font-medium">07.12.2023</p>
                                </td>
                                <td>
                                    <p class="px-3 py-5 text-xs text-black font-semibold">{{ price(200000) }} сум</p>
                                </td>
                                <td>
                                    <p class="px-3 py-5 text-xs text-black font-semibold">
                                        15
                                    </p>
                                </td>
                                <td>
                                    <p class="px-3 py-5 text-xs text-black font-semibold">
                                        Безопасная оплата
                                    </p>
                                </td>
                                <td>
                                    <p v-if="item == 2" class="px-3 py-5 text-xs font-medium"><span
                                            class="py-2 px-3 rounded-3xl text-[#7A889B] bg-gray-100"
                                            >В процессе</span></p>
                                    <p v-else class="px-3 py-5 text-xs font-medium"><span
                                            class="py-2 px-3 rounded-3xl text-[#2CB081] bg-green-100"
                                            >Доставлен</span></p>
                                </td>
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
                    <div class="w-full flex justify-center mt-6">
                        <el-pagination :hide-on-single-page="true" :page-size="pagination.page_size"
                            v-model:current-page="pagination.page" :total="pagination.total" background
                            layout="prev, pager, next" />
                    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'profile'
});
const { price } = useUtils();
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

<style lang="scss" scoped>

</style>