<template>
    <div class="w-full">
        <h1 class="font-bold text-2xl text-gray-700 mb-2">Kirish</h1>
        <p class="text-sm text-gray-500 mb-4 ">Tizimga kirish uchun ariza raqami va sanasini kiriting</p>
        <el-form :model="form" :rules="formRules" ref="form_ref">
            <el-form-item prop="doc_num"  :class="error?'is-error':''">
                <p class="text-sm mb-2 font-bold text-gray-600">No <span class="text-red-500">*</span></p>
                <el-input class="form-input" @change="error=false" v-model="form.doc_num"  placeholder="No*" size="large" :disabled="loading" type="number" />
            </el-form-item>
            <el-form-item prop="doc_date" :class="error?'is-error':''">
                <p class="text-sm mb-2 font-bold text-gray-600">Sana<span class="text-red-500">*</span></p>
                <el-date-picker class="w-full" @change="error=false"  v-model="form.doc_date" format="DD.MM.YYYY" value-format="YYYY-MM-DD"
                    type="date" placeholder="Pick a day" size="large" :disabled="loading" />
            </el-form-item>
        </el-form>
        <p v-if="error" class="mb-3 text-red-500 text-xs text-center">Arizaraqami yoki sanasi xato!</p>
        <div class="w-full">
            <button class="button  w-full" @click="Login()" :disabled="loading">Kirish</button>
        </div>
    </div>
</template>
<script setup>
import Button from '../ui/Button.vue'
// STORE
import { useDictionaryStore } from '~/stores/dictionary'
const dictStore = useDictionaryStore() 
const { set_modal, set_token } = dictStore
// DATA
const form = reactive({
    doc_num: '',
    doc_date: ''
})

const formRules={
    doc_num:{ required: true, message: "Iltimos ma'lumot kiriting", trigger: 'change' },
    doc_date:{ required: true, message: "Iltimos ma'lumot kiriting", trigger: 'change' },
}
const loading = ref(false)
const error = ref(false)
const form_ref=ref(null)
// METHODS
function Login() {
    if(!form_ref) return false
    form_ref.value.validate(valid=>{
        if(valid){
            loading.value = true
            useApi('/api/v1/auth/login', { method: 'POST', body: { ...form } })
                .then((res) => {
                    let token = useCookie('auth_token')
                    token.value = res.data.token
                    set_token(res.data.token)
                    set_modal(false)
                    loading.value = false
                })
                .catch(() => {
                    loading.value = false
                    error.value=true
                })
        }
    })
   
}





</script>