<template>
    <div class="w-full">
        <div class="flex flex-col justify-start items-start ">
            <h1 class="text-black text-lg font-semibold p-[1.5rem] pb-0">Информация о компании</h1>
            <div class="flex items-center relative max-md:flex-col ">
                <div class=" w-24 relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4 col-span-1">
                    <Icon name="icon-gallery" class="m-0" width="28px" height="28px" />
                     <div class="absolute cursor-pointer bottom-0 right-0 p-2 border border-slate-200 bg-white rounded-full">
                        <label for="upload-foto" class="cursor-pointer">
                             <Icon name="icon-edit-green" class="!m-0" width="12px" height="12px" />
                        </label>
                        <input type="file" class="hidden" id="upload-foto">
                    </div>
                </div>
                <div class="flex flex-col col-span-1"> 
                    <h1 class="font-bold text-2xl text-nowrap ">KANS BARAKA MCHJ</h1>
                    <label for="upload-foto" class="text-[#2CB26D] cursor-pointer">Добавить лого</label>
                </div>
            </div>
            <div class="w-full mt-2 ">
                <el-form ref="form" class="flex gap-4 justify-start items-end flex-wrap " :model="sizeForm1"
                    label-width="auto" label-position="top" size="large">

                    <div class="grid grid-cols-2 gap-4 p-[1.5rem] w-full">
                        <div class="flex flex-col gap-2">
                            <div class="gap-4 grid-cols-2 grid">
                                <el-form-item label="СТИР" class="mb-0 col-span-1">
                                    <el-input v-model="sizeForm1.num" placeholder="+998" />
                                </el-form-item>
                                <el-form-item label="ЖШШИР" class="mb-0 col-span-1">
                                    <el-input v-model="sizeForm1.num" placeholder="+998" />
                                </el-form-item>
                            </div>

                            <el-form-item label="МФО" class="mb-0">
                                <el-select v-model="sizeForm1.option1" placeholder="Выбрать">
                                    <el-option label="Zone one" value="shanghai" />
                                    <el-option label="Zone two" value="beijing" />
                                </el-select>
                            </el-form-item>

                            <el-form-item label="Регион" class="mb-0 w-full">
                                <el-select v-model="sizeForm1.selectedRegion2" placeholder="Выберите регион">
                                    <el-option v-for="region2 in sizeForm1.regions2" :key="region2.id" :label="region2.name"
                                        :value="region2.id" />
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="flex flex-col gap-2">
                            <el-form-item label="Имя (Сокращеное)" class="mb-0 col-span-1">
                                <el-input v-model="sizeForm1.num" placeholder="+998" />
                            </el-form-item>
                            <div class="grid grid-cols-2 gap-5">
                                <div class="col-span-1">
                                    <el-form-item label="Номер счета" class="mb-0 col-span-1">
                                        <el-input v-model="sizeForm1.num" placeholder="+998" />
                                    </el-form-item>
                                </div>
                                <div class="col-span-1">
                                    <el-form-item label="Уникальный" class="mb-0 col-span-1">
                                        <el-input v-model="sizeForm1.num" placeholder="+998" />
                                    </el-form-item>
                                </div>
                            </div>
                            <el-form-item label="Район" class="mb-0 w-full">
                                <el-select  v-model="sizeForm1.selectedDistrict2"
                                    placeholder="Выберите район">
                                    <el-option v-for="district in sizeForm1.selectedRegionDistricts2" :key="district.id"
                                        :label="district.name" :value="district.id" />
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>

                    <div class=" p-[1.5rem] w-full">
                        <el-form-item label="Адрес" class="mb-0 col-span-1">
                            <el-input v-model="sizeForm1.num" placeholder="+998" />
                        </el-form-item>
                    </div>

                    <div class=" p-[1.5rem] w-full boder-t-2">
                        <h1 class="text-black text-lg font-semibold pb-0">Информация о компании</h1>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-1">
                                <el-form-item label="Фио" class=" col-span-1">
                                    <el-input v-model="sizeForm1.num" placeholder="+998" />
                                </el-form-item>

                                <div class="grid grid-cols-3 gap-4">
                                    <el-form-item label="Серия пасспорта" class=" col-span-1">
                                        <el-input v-model="sizeForm1.num" placeholder="+998" />
                                    </el-form-item>
                                    <el-form-item label="Номер пасспорта" class=" col-span-2">
                                        <el-input v-model="sizeForm1.num" placeholder="+998" />
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <el-form-item label="Дата рождения" class="">
                                    <el-date-picker v-model="sizeForm1.date1" type="date" label="Дата от"
                                        placeholder="Дата от" style="width: 100%" />
                                </el-form-item>
                                <div class="grid grid-cols-3 gap-4 items-end">
                                    <div class="col-span-2">
                                        <el-form-item label="Номер телефона" class="mb-0 col-span-2">
                                            <el-input v-model="sizeForm1.num" placeholder="+998" />
                                        </el-form-item>
                                    </div>
                                    <div class="col-span-1">
                                        <el-button type="success" plain>Success</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-[1.5rem] w-full boder-t-2">
                        <div class="grid grid-cols-2 gap-4">
                            <el-card shadow="never" class="rounded-md flex flex-col ">
                                <h1 class="flex gap-2 font-medium">
                                    <Icon name="icon-document-text" /> Предложение Hujjat.uz
                                </h1>
                                <div class="flex justify-between mt-4">
                                    <Icon name="icon-document-text" />
                                    <el-button type="success" plain>Success</el-button>

                                </div>
                            </el-card>
                        </div>
                    </div>
                </el-form>
                <div class="flex p-4 justify-end w-full"><button
                        class="border border-[#2CB26D] text-[#2CB26D] text-base my-[1.5rem] py-2 px-5 rounded-md">Добавить
                        новый адрес</button></div>


            </div>

        </div>
    </div>
</template>
<script setup>
const dictionaryStore = useDictionaryStore()
const regions2 = dictionaryStore.regions

const size = ref('default')
const labelPosition = ref('right')
const pagination = reactive({
    total: 1,
    page_size: 15,
    page: 1
})
const sizeForm1 = reactive({
    selectedRegion2: null,
    selectedDistrict2: null,
    regions2: computed(() => regions2),
    // selectedStreet: null,
    // Добавляем вычисляемые свойства внутри sizeForm
    get selectedRegionDistricts2() {
        const region2 = regions2.find(b => b.id === this.selectedRegion2)
        return region2 ? region2.districts : []
    },

  
})
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]



const notifs = [
    {
        id: 1,
        icon: 'icon_message-text',
        title: 'СМС',
    },
    {
        id: 2,
        icon: 'icon_telegram-plane',
        title: 'Телеграм бот',
    },
    {
        id: 3,
        icon: 'icon_sms',
        title: 'Электронная почта',
    },
]

function onSubmit() {
    console.log('submit!')
}
</script>

<style>
.el-radio-group {
    margin-right: 12px;
}

.mb-0 {
    margin-bottom: 0 !important;
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
} */
.label-size label {
    font-size: 0.75rem !important;
    margin-bottom: 12px !important;
    line-height: 22px !important;
    text-wrap: nowrap;
}

.el-select {
    width: 100%;
}</style>
