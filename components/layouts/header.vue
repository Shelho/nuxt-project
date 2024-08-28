<template>
  <header class="header">
    <div class="container flex justify-between text-white">
      <div class="flex items-center gap-60px">
        <NuxtLink to="/">
          <img src="@/assets/images/icons/logo.svg" alt="" />
        </NuxtLink>
        <nav>
          <ul class="flex items-center gap-24px">
            <li
              class="hover:opacity-50"
              v-for="el in store.menu"
              :key="el.text"
            >
              <NuxtLink :to="el.link">{{ el.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex gap-28px items-center">
        <span>{{ store.contacts.schedules }}</span>
        <div class="flex gap-12px">
          <div
            @click="showLang = !showLang"
            class="relative"
            :class="{ header__langs_act: showLang }"
          >
            <div class="circle">{{ actLang }}</div>
            <div class="header__langs">
              <ul>
                <li
                  @click="actLang = lang"
                  v-for="lang in langs"
                  class="header__langs_el"
                  :key="lang"
                >
                  {{ lang }}
                </li>
              </ul>
            </div>
          </div>
          <NuxtLink class="circle" :to="store.contacts.socs.wa">
            <IconsWa />
          </NuxtLink>
          <NuxtLink class="circle" :to="store.contacts.socs.tg">
            <IconsTg />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const store = useDataStore();

const langs = ["RU", "EN", "KZ"];
const actLang = ref("EN");
const showLang = ref(false);
</script>
  
<style scoped>
.header {
  @apply bg-black py-44px uppercase;
}

.header .header__langs {
  @apply absolute -z-10 top-0 bg-white rounded-50px overflow-hidden transition-all opacity-0;
}

.header .header__langs_el {
  @apply py-5px px-15px cursor-pointer hover:(bg-regular-0 text-white) text-regular-0;
}

.header .header__langs_act .header__langs {
  @apply top-55px opacity-100 z-10;
}
</style>