<template>
    <div class="w-full">
        <div class="flex flex-col justify-start items-start ">
            <h1 class="text-black text-lg font-semibold p-[1.5rem] pb-0">Персональные данные</h1>
            <div class="flex items-center relative max-md:flex-col ">
                <div class="w-24 relative bg-slate-100 flex items-center justify-center p-8 rounded-full m-4 col-span-1">
                    <Icon name="icon-gallery" class="m-0" width="28px" height="28px" />
                    <div class="absolute cursor-pointer bottom-0 right-0 p-2 border border-slate-200 bg-white rounded-full">
                        <label for="upload-foto" class="cursor-pointer">
                            <Icon name="icon-edit-green" class="!m-0" width="12px" height="12px" />
                        </label>
                        <input type="file" class="hidden" id="upload-foto" />
                    </div>
                </div>
                <div class="flex col-span-1">
                    <h1 class="font-bold text-2xl text-nowrap">{{ sizeForm.full_name }}</h1>
                </div>
            </div>
            <div class="w-full mt-2 ">
                <el-form ref="form" class="flex gap-4 justify-start items-end flex-wrap " :model="sizeForm"
                    label-width="auto" label-position="top" size="large">

                    <div class="grid grid-cols-3 gap-4 p-[1.5rem]">
                        <div class="flex flex-col gap-2">
                            <el-form-item label="Номер телефона" class="mb-0">
                                <el-input v-model="sizeForm.mobile_phone" placeholder="+998" />
                            </el-form-item>
                            <el-form-item label="Электронная почта" class="mb-0">
                                <el-input v-model="sizeForm.email" placeholder="example@mail.com" />
                            </el-form-item>
                        </div>
                        <div class="flex flex-col gap-2">
                            <el-form-item label="Дата рождения" class="mb-0">
                                <el-date-picker v-model="sizeForm.date1" type="date" label="Дата Рождения"
                                    placeholder="Дата от" style="width: 100%" />
                            </el-form-item>
                            <el-form-item label="Регион" class="mb-0">
                                <el-select v-model="sizeForm.RegionDetails" placeholder="Выберите регион">
                                    <el-option v-for="(region,j) in regions" :key="j" :label="region.name"
                                    :value="region.id" />
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="flex flex-col gap-2 ">
                            <div class="grid grid-cols-3 gap-3">
                                <el-form-item label="Серия пасспорта" class="mb-0 col-span-1 label-size">
                                    <el-input v-model="sizeForm.email" placeholder="AB" />
                                </el-form-item>
                                <el-form-item label="Номер пасспорта" class="mb-0 col-span-2 label-size">
                                    <el-input v-model="sizeForm.email" placeholder="1234" />
                                </el-form-item>
                            </div>
                            <el-form-item label="Район" class="mb-0">
                                <el-select v-model="sizeForm.RayonDetails" placeholder="Выберите район">
                                    <el-option v-for="(rayon,l) in regions.find(f => f.id === sizeForm.RegionDetails)?.districts" :key="l" :label="rayon.name"
                                    :value="rayon.id" />
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="border-t-2 p-[1.5rem] w-full">
                        <h1 class="text-black text-lg font-semibold ">Введите регион доставки</h1>

                        <div class="grid grid-cols-3 gap-4 ">
                            <el-form-item label="Регион" class="mb-0 w-full">
                                
                                <el-select v-model="sizeForm.RegionDelivery" placeholder="Выберите регион">
                                    <el-option v-for="(region,j) in regions" :key="j" :label="region.name"
                                    :value="region.id" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Район" class="mb-0 w-full">
                                <el-select v-model="sizeForm.RayonDelivery" placeholder="Выберите район">
                                    <el-option v-for="(rayon,l) in regions.find(f => f.id === sizeForm.RegionDelivery)?.districts" :key="l" :label="rayon.name"
                                    :value="rayon.id" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Укажите адрес" class="mb-0">
                                <el-input v-model="sizeForm.num" placeholder="-" />
                            </el-form-item>
                        </div>
                        <div class="flex">
                            <button
                                class="border border-[#2CB26D] text-[#2CB26D] text-base my-[1.5rem] py-2 px-5 rounded-md">Добавить
                                новый адрес</button></div>
                                <div class="grid grid-cols-3 gap-4 " v-for="(adres, i) in sizeForm.addresses" :key="i">
                            <el-form-item label="Регион" class="mb-0 w-full">
                                <el-select v-model="sizeForm.addresses[i].region_id"  placeholder="Viloyat">
                                    <el-option v-for="(region,j) in regions" :key="j" :label="region.name"
                                    :value="region.id" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Район" class="mb-0 w-full">
                                <el-select v-model="sizeForm.addresses[i].district_id" :value="adres.district_id" placeholder="Rayon">
                                  
                                        <el-option v-for="(rayon,l) in regions.find(f => f.id === sizeForm.addresses[i].region_id)?.districts" :key="l" :label="rayon.name"
                                    :value="rayon.id" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Укажите адрес" class="mb-0">
                                <el-input v-model="sizeForm.num" :value="adres.address" :placeholder="adres.address" />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="flex flex-col w-full border-t-2 ">
                        <div class="py-[1.5rem] flex flex-col p-[1.5rem]">
                            <h1 class="font-medium text-xl">Активные сеансы</h1>
                            <BaseCardsSeans :actives="actives" />
                        </div>
                        <div class="py-[1.5rem] flex flex-col border-t-2 p-[1.5rem]">
                            <h1 class="font-medium text-xl">Способ получения уведомления</h1>
                            <div class="my-5 flex gap-5 max-md:flex-col">
                                <BaseCheck :notifs="notifs" :message_type="sizeForm.message_type" />
                            </div>
                        </div>
                    </div>
                    <div class="flex p-4 justify-end w-full"><button
                            class="border border-[#2CB26D] text-[#2CB26D] text-base my-[1.5rem] py-2 px-5 rounded-md">Сохранить</button></div>

                </el-form>
            </div>
        </div>
    </div>
    <pre class="text-black"> {{ sizeForm }}</pre>
    
</template>
  
<script setup>

// const props = defineProps(['sizeForm.type_activity']);
import { ref, reactive, computed } from 'vue'
import { useDictionaryStore } from '~/stores/dictionary'
import { useApi } from '@/composables/useApi'
//   import { useUserStore } from '~/stores/user';

// const UserDetailStore = useUserStore();
// const UserDetails = UserDetailStore.me; // не вызывайте как функцию, так как me - это свойство

// console.log('User details:', UserDetails);

const dictionaryStore = useDictionaryStore()
const regions = dictionaryStore.regions


const sizeForm = reactive({
    RegionDetails: null,
    RegionDelivery: null, 
    RayonDelivery: null,
    RayonDetails: null,
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

const actives = [
    {
        title: 'Chrome',
        device: 'Mac Os X',
        icon: 'closered',
        status: 'now',
        seans: 'Текущий сеанс'
    },
    {
        title: 'Chrome',
        device: 'Windows 11',
        icon: 'closered',
        status: '1 hrs',
        seans: '1 час назад'
    },
]



const getUserDetails = async () => {
  await useApi('/api/v1/user', {}).then((res)=>{
    // sizeForm.num = res.data.mobile_phone;
    let obj = {}
    if(res.data){
        for(let i in res.data){
            sizeForm[i] = res.data[i]
        }
        console.log(obj)
    }
   console.log(res.data);
  })
}
onMounted(()=>{
    getUserDetails()
})

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
}
</style>