<template>
    <div class="w-full">
        <div class="flex flex-col justify-start items-start gap-[1rem]">
            <h1 class="text-black text-lg font-semibold">История платежей</h1>
            <div class="w-full mt-2">
                <!-- <div class=""> -->
                    <!-- <div>
                            <el-radio-group v-model="size" label="size control">
                                <el-radio-button label="large">large</el-radio-button>
                                <el-radio-button label="default">default</el-radio-button>
                                <el-radio-button label="small">small</el-radio-button>
                            </el-radio-group>
                            <el-radio-group v-model="labelPosition" label="position control">
                                <el-radio-button label="left">Left</el-radio-button>
                                <el-radio-button label="right">Right</el-radio-button>
                                <el-radio-button label="top">Top</el-radio-button>
                            </el-radio-group>
                        </div>
                        <br /> -->
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
                        <el-form-item label="Дата от">
                            <el-date-picker v-model="sizeForm.date1" type="date" label="Дата от"
                                placeholder="Дата от" style="width: 100%" />
                        </el-form-item>
                        <el-form-item label="Дата до">
                            <el-date-picker v-model="sizeForm.date2" type="date" label="Дата до"
                                placeholder="Дата до" style="width: 100%" />
                        </el-form-item>
                        <el-form-item>
                            <button @click="onSubmit"
                                class="rounded-[--el-border-radius-small] px-3 min-h-[--el-component-size-large] border-[1px] text-xs text-[#2CB26D] hover:bg-[#2CB26D] hover:text-white transition-all font-bold border-[#2CB26D]">Сбросить
                                фильтр</button>
                        </el-form-item>
                    </el-form>
                    <div class="w-full overflow-hidden rounded-lg border border-[#DFE2E9]">
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
                                        <p class="px-3 py-5 text-xs font-medium text-start">Дата</p>
                                    </th>
                                    <th rowspan="2">
                                        <p class="px-3 py-5 text-xs font-medium text-start">Сумма</p>
                                    </th>
                                    <th rowspan="2">
                                        <p class="px-3 py-5 text-xs font-medium text-start whitespace-nowrap">Тип оплаты</p>
                                    </th>
                                    <th rowspan="2">
                                        <p class="px-3 py-5 text-xs font-medium text-start">Подробнее</p>
                                    </th>
                                    <th rowspan="2">
                                        <p class="px-3 py-5 text-xs font-medium text-start whitespace-nowrap">Способ оплаты
                                        </p>
                                    </th>
                                    <th rowspan="2">
                                        <p class="px-3 py-5 text-xs font-medium text-start"> Статус</p>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in 2">
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium">{{ item }}</p>
                                    </td>
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium">07.12.2023 - 16:30</p>
                                    </td>
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium">{{ price(3000000,' ') }}</p>
                                    </td>

                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium"><span
                                                class="py-2 px-3 rounded-3xl text-[#FF4164]" style="background-color: rgba(255, 58, 94, 0.12);

;">Расход</span></p>
                                    </td>
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium max-w-[350px] text-start leading-5">№
                                            2006128 ракамли буюртмага асосан пул ечилди</p>
                                    </td>
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium"><Icon name="icon-realpay" width="72px" /></p>
                                    </td>
                                    <td>
                                        <p class="px-3 py-5 text-xs font-medium"><span
                                                class="py-2 px-3 rounded-3xl text-[#2CB081]"
                                                style="background-color:rgba(44, 176, 129, 0.12);">Оплачено</span></p>
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
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>

const size = ref('default')
const labelPosition = ref('right');
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

<style>
.el-radio-group {
    margin-right: 12px;
}

/* table{
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #212b36;
    text-align: center;
    vertical-align: middle;
    border: 0;
    border-collapse: collapse;
} */</style>