<template>
  <div class="w-full">
    <div class="flex flex-col justify-start items-start gap-[1.5rem]">
      <h1 class="text-black text-lg font-semibold">Карты</h1>
      <div class="grid grid-cols-3 w-full gap-[1.5rem]">
        <div class="credit-card h-full min-h-[180px] flex flex-col rounded-xl family-card w-full p-[1rem] relative">
          <div class="logo flex w-full items-center justify-between mb-[2rem] mt-2 relative">
            <div class="flex items-center justify-start gap-1">
              <Icon name="icon-oila" width="25px" height="40px" />
              <p class="text-white text-lg">Oilakredit</p>
            </div>
            <Icon name="icon-dots" class="cursor-pointer absolute top-1 right-3" width="20px" height="20px" />
          </div>
          <!-- <div class="flex items-center mb-[2rem] mt-auto justify-start gap-1">
                    <Icon name="icon-oila" width="25px" height="25px" />
                    <p class="text-white text-lg">Oilakredit</p>
                  </div> -->
          <p class="text-white text-lg mb-2 font-semibold">12 000 000 Сум</p>
          <p class="uppercase text-white text-sm">MARDON SHONAZAROV</p>
        </div>
        <div class="credit-card-default h-full min-h-[180px] flex flex-col rounded-xl  w-full p-[1rem] relative">
          <div class="logo flex w-full items-center justify-between mb-[2rem] mt-2 relative">
            <Icon name="icon-logo-outline" width="80px" height="40px" />
            <Icon name="icon-dots" class="cursor-pointer absolute top-1 right-3" width="20px" height="20px" />
          </div>
          <p class="text-white text-lg mb-2 font-semibold">12 000 000 Сум</p>
          <p class="uppercase text-white text-sm">MARDON SHONAZAROV</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.family-card {
  background-image: url('../../assets/images/cards/oilakredit.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.credit-card-default {
  background-image: url('../../assets/images/cards/card-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>