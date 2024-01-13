<template>
  <div class="w-full">
    <div class="flex flex-col items-start justify-start">
      <div class="w-full">
        <div class="w-full" style="border-bottom: 1px solid #dfe2e9">
          <div class="flex items-center justify-start gap-[0.3rem] -mb-[1px]">
            <div
              v-for="item in filteredTabs"
              @click="handleTabClick(item)"
              :key="item.id"
              class="card-tab cursor-pointer transition-all px-[1.5rem] py-[1rem] border-[1px] text-md border-[#DFE2E9] border-b-[1px] rounded-t-[0.75rem] rounded-r-0 rounded-b-0 rounded-l-0 bg-[#F9F9F9]"
              :class="{
                '!border-b-[1px] !border-b-[transparent] text-[#2CB26D] font-[500] !bg-white':
                  activeIndex == item.id,
              }"
            >
              {{ item.tabName }}
            </div>
          </div>
        </div>
        <div class="active-tab w-full">
          <FormsProfileDetails v-if="activeIndex == 1" />
          <FormsProfileCompany
            v-if="activeIndex == 2 && UserActive.type_activity === 'LEGAL'"
          />
          <!-- <FormsProfileCompany   /> -->

          <pre>{{ UserCompany }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, reactive, computed, onMounted } from "vue";
definePageMeta({
  layout: "profile",
});
import { useApi } from "@/composables/useApi";

const UserActive = reactive({});
const UserCompany = reactive({});
const activeIndex = ref(1);

const tabs = reactive([
  {
    tabName: "Персональные данные",
    id: 1,
    type: "",
  },
  {
    tabName: "Информация о компании",
    id: 2,
    type: "LEGAL",
  },
]);

const getUserDetails = async () => {
  try {
    const res = await useApi("/api/v1/user", {});

    if (res && res.data) {
      for (let i in res.data) {
        UserActive[i] = res.data[i];
      }
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

const getUserProfile = async () => {
  try {
    const res = await useApi("/api/v2/buyer/profile", {});

    if (res && res.data) {
      for (let i in res.data) {
        UserCompany[i] = res.data[i];
      }
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

onMounted(() => {
  getUserDetails();
  getUserProfile();
});

const filteredTabs = computed(() => {
  // Фильтрация массива tabs в зависимости от значения UserActive.type_activity
  if (UserActive.type_activity === "LEGAL") {
    return tabs;
  } else if (UserActive.type_activity === "PHYSICAL") {
    return [tabs[0]]; // Вернуть только первую вкладку
  } else {
    return [tabs[0]]; // Вернуть пустой массив, если UserActive.type_activity не определено
  }
});

const handleTabClick = (item) => {
  activeIndex.value = item.id;
};
</script>
  
  <style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
  