<template>
    <section class="w-full flex justify-center p-8">
        <div class="f-container">
            <ClientOnly>
                <div class="flex items-start gap-2">
                    <h1 class="text-2xl font-bold text-gray-700 mb-4">Savatcha</h1>
                </div>
                <div class="w-full flex flex-col gap-4" v-if="List && List.length">
                    <div class="w-full bg-gray-50 rounded-xl p-4" v-for="(item, i) in List" :key="i">
                        <div class="flex items-center gap-2 mb-4">
                            <!-- <el-checkbox v-model="List[i].select" size="large" /> -->
                            <h1 class="text-xl font-bold ">{{ item.seller.name }}</h1>
                        </div>

                        <div class="w-full flex flex-col gap-3 mb-6">
                            <div class="w-full flex p-3 bg-white rounded-xl gap-6" v-for="(product, j) in item.products" :key="j">
                                <div class="flex gap-3 items-start">  
                                        <el-checkbox v-model="List[i].products[j].select" size="large"  /> 
                                        <div class="w-[140px] h-[130px] bg-gray-100 rounded-xl overflow-hidden relative">
                                        <Photo class="w-full h-full object-cover z-0" :uid="product.main_photo" />
                                    </div>
                                </div>
                              
                                <div class="flex flex-col justify-between gap-2 flex-1">
                                    <p class="text-base font-medium text-gray-600">{{ product.name }}</p>
                                    <p class="text-xl font-bold text-gray-700">{{ price(product.price) }} so'm</p>
                                    <div class="w-full flex justify-between gap-4">
                                        <div class="max-w-[200px]">
                                            <Counter @change="set_count(List[i].products[j].id, List[i].products[j].count)" v-model="List[i].products[j].count" />
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button class="p-3  bg-gray-100 rounded-xl text-gray-700">
                                                <Icon name="icon-heart" width="16" height="16" />
                                            </button>
                                            <button
                                                class="p-3  bg-gray-100 rounded-xl text-red-500 flex items-center gap-2 text-sm font-normal"
                                                @click="set_cart(product)">
                                                <Icon name="icon-trash" width="16" height="16" />
                                                <span class="">O'chirish</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between gap-4 items-center">
                            <p class="text-base text-gray-600">Jami: <span class="text-gray-700 font-bold"> {{
                                price(item.total_price) }} so'm</span> </p>
                            <button class="button hover-scale">Rasmiylashtirish</button>
                        </div>
                    </div>
                </div>
                <Empity v-else />
            </ClientOnly> 
        </div>
    </section>
</template>
<script setup>
import Empity from '@/components/ui/Empty'
import Counter from '~/components/ui/Counter.vue';
const { price } = useUtils();
// STORE 
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore()
const { set_cart, set_count, get_count } = cartStore
const { products } = storeToRefs(cartStore)

// DATA
const List = ref([])


// METHODS
function SetList(){
    let data = []
    let arr = []
    products.value.forEach(element => {
        if (!arr.includes(element.seller.tin)) {
            data.push({
                products: [],
                seller: element.seller,
                total_count: 0,
                total_price: 0,
                select: false
            })
            arr.push(element.seller.tin)
        }
    })

    for (let i = 0; i < data.length; i++) {
        products.value.forEach(element => {
            if (data[i].seller.tin == element.seller.tin) {
                data[i].products.push({ ...element, select: false })
                data[i].total_count = data[i].total_count + 1
                data[i].total_price = data[i].total_price + (element.price * element.count)
            }
        })
        if (data[i].products && data[i].products.length == 1) {
            data[i].products[0].select = true 
        }
    }
    List.value=data
}

// ACTIONS
onMounted(()=>{
    SetList()
})



</script>