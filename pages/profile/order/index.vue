<template>
    <div class="w-full border border-[#DFE2E9] bg-white p-6 rounded-xl">
        <h1 class="text-black text-lg font-semibold">Заказы</h1>
        <div class="orders mt-6">
            <div class="progress-bar">
                <h1 class="text-black text-sm font-semibold">Процесс заказа № 2006128</h1>
                <div class="w-full mt-6">
                    <ol class="flex items-center w-full">
                        <div class="w-full" v-for="item in 4">
                            <div class="flex w-full flex-col" v-if="item != 4">
                                <li :class="{ 'after:border-green-300': item !== 4 && item != 3 }"
                                    class="flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block">
                                    <span v-if="item != 4 && item != 3"
                                        class="flex items-center bg-[#2CB26D] justify-center !w-6 !h-6  rounded-full lg:h-12 lg:w-12  shrink-0">
                                        <svg class="w-3.5 h-3.5 text-white lg:w-3 lg:h-3" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                    </span>
                                    <span v-else
                                        class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                            fill="none">
                                            <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                        </svg>
                                    </span>
                                </li>
                                <div class="flex flex-col items-start mt-4">
                                    <span class="text-xs font-medium">Сделать заказ</span>
                                    <span class="text-xs font-normal mt-1 text-[#7A889B]">20.12.2023 - 20:58</span>
                                </div>
                            </div>
                            <div class="flex flex-col" v-else>
                                <li class="flex items-center">
                                    <span
                                        class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                            fill="none">
                                            <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                        </svg>
                                    </span>
                                </li>
                                <div class="flex flex-col items-start mt-4">
                                    <span class="text-xs font-medium">Сделать заказ</span>
                                    <span class="text-xs font-normal mt-1 text-[#7A889B]">20.12.2023 - 20:58</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="flex flex-col items-center">
                            <li class="flex items-center">
                            <span
                                class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                </svg>
                            </span>
                        </li>
                        <div class="flex flex-col items-start">
                            <span class="">Сделать заказ</span>
                            <span>20.12.2023 - 20:58</span>
                        </div>
                        </div> -->
                        <!-- <li
                        :class="{'after:border-green-300':true}"
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span
                            :class="{'!bg-[#2CB26D]':true}"
                                class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg v-if="1==2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                </svg>
                                <svg v-else class="w-3.5 h-3.5 text-white lg:w-3 lg:h-3 dark:text-blue-300" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span
                                class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                </svg>
                            </span>
                        </li>
                        <li class="flex items-center">
                            <span
                                class="flex items-center justify-center !w-6 !h-6 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#BEBFC9" />
                                </svg>
                            </span>
                        </li> -->
                    </ol>

                </div>
            </div>
        </div>
        <div class="mt-9">
            <div>
                <h1 class="text-black text-base font-semibold">История заказов</h1>
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
                                    <p class="px-3 py-5 text-xs text-black font-semibold">200 000 сум</p>
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
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'profile'
});
const pagination = reactive({
    total: 1,
    page_size: 15,
    page: 1
})
</script>

<style lang="scss" scoped></style>