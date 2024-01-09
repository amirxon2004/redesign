
<template>
          <div v-for="notif in notifs" :key="notif.id" class="custom-checkbox flex items-center">
        <input type="checkbox" id="myCheckbox" class="peer/draft">
        <label for="myCheckbox" class="custom-checkbox-label font-medium "><span class="flex gap-2 text-slate-500 items-center"><Icon :name="notif.icon" w="20px" /> {{ notif.title }}</span></label>
    
  </div>
</template>
<script setup>
const props = defineProps(['notifs']);
</script>
<style>
      /* Общий стиль для скрытия стандартного чекбокса */
      .custom-checkbox input {
      display: none;
    }

    /* Стилизация контейнера для кастомного чекбокса */
    .custom-checkbox-label {
      position: relative;
      padding-left: 30px; /* Расстояние от края до галочки */
      cursor: pointer;
      line-height: 24px;
      display: inline-block;
    }

    /* Стилизация самой галочки (псевдоэлемент) */
    .custom-checkbox-label::before {
      content: '';
      position: absolute;
      left: 0;
      border-radius: 0.2rem;
      top: 0;
      width: 20px; /* Ширина галочки */
      height: 20px; /* Высота галочки */
      border: 1px solid #d1d1d1; /* Цвет рамки галочки */
      background-color: #fff; /* Фон галочки */
    }

    /* Стилизация галочки при активации (чекбокс отмечен) */
    .custom-checkbox input:checked + .custom-checkbox-label::before {
      background-image: url(@/assets/svg/check.svg); /* Изменение цвета фона галочки при отметке */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #2CB26D; /* Фон галочки */
      
      border-color: #2CB26D; /* Изменение цвета рамки галочки при отметке */
    }
</style>