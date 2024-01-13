<template>
    <div class="w-full min-h-[100vh] flex flex-col justify-between">
        <div class="w-full">
            <TopBar />
            <AppNav />
            <div class="w-full flex justify-center flex-col items-center p-8 align-top ">
                <div class="f-container mb-[1.5rem]">
                    <el-breadcrumb separator="/" class="breadcrumb-pro">
                    <el-breadcrumb-item><nuxt-link to="/" class="bread-link">Главная</nuxt-link></el-breadcrumb-item>
                    <el-breadcrumb-item><nuxt-link to="/profile" class="bread-link">Персональные
                            данные</nuxt-link></el-breadcrumb-item>
                </el-breadcrumb>
                </div>
                <div class="f-container flex gap-2 items-start justify-start">
                    <ProfileMenu />
                    <NuxtPage />
                </div>
            </div>
        </div>
        <AppFooter />
    </div>
</template>