<template>
  <footer class="footer">
    <div class="container">
      <div class="">
        <NuxtLink to="/">
          <img src="@/assets/images/icons/logo.svg" alt="" />
        </NuxtLink>
        <div class="">
          <div class="">
            <div class="">Мы в соцсетях:</div>
            <div class="">
              <NuxtLink class="circle" :to="store.contacts.socs.wa">
                <IconsWa />
              </NuxtLink>
              <NuxtLink class="circle" :to="store.contacts.socs.tg">
                <IconsTg />
              </NuxtLink>
            </div>
          </div>
          <NuxtLink to="">Политика конфиденциальности</NuxtLink>
        </div>
      </div>
      <div class="">
        <ul>
          <li
            v-for="s in services"
            :key="s"
            class="font-medium text-20px mb-24px"
          >
            {{ s }}
          </li>
          <li class="text-14px">imsengineering.az</li>
          <li class="text-14px">{{ store.contacts.phone }}</li>
          <li class="text-14px">{{ store.contacts.address }}</li>
          <li class="text-14px">{{ store.contacts.schedules }}</li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const store = useDataStore();

const services = ["Каталог", "Автоматика", "Электрика"];
</script>

<style scoped>
.footer {
  @apply text-white;
}
</style>
    