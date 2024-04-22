<template>
  <div class="flex flex-col float-left p-10 bg-stone-700 text-orange-300">
    <router-link class="p-2" to="/salary">1. Цалингийн хүснэгт</router-link>
    <router-link class="p-2" to="/goods">2. Бараа материал</router-link>
    <router-link class="p-2" to="/undsenHurungu">3. Үндсэн хөрөнгө</router-link>
    <router-link class="p-2" to="/sheet">4. Sheet1</router-link>
    <router-link class="p-2" to="/journal">5. Ерөнхий журнал</router-link>
    <router-link class="p-2" to="/guilbal">6. Гүйлгээ баланс</router-link>
    <router-link class="p-2" to="/hynalt">7. Хяналт</router-link>
    <router-link class="p-2" to="/ct_1">8. Ct_1</router-link>
    <router-link class="p-2" to="/ct_2">9. Ct_2</router-link>
    <router-link class="p-2" to="/ct_3">10. Ct_3</router-link>
    <router-link class="p-2" to="/ct_4">11. Ct_4</router-link>
    <router-link class="p-2" to="/dans_tuluvluguu"
      >12. Дансны төлөвлөгөө</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: ["text"],
};
</script>

<style>
body {
  background-color: #999;
}
</style>
