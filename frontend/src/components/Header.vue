<template>
  <div class="nav">
    <router-link to="/salary">1. Цалингийн хүснэгт</router-link>
    <router-link to="/goods">2. Бараа материал</router-link>
    <router-link to="/undsenHurungu">3. Үндсэн хөрөнгө</router-link>
    <router-link to="/sheet">4. Sheet1</router-link>
    <router-link to="/journal">5. Ерөнхий журнал</router-link>
    <router-link to="/guilbal">6. Гүйлгээ баланс</router-link>
    <router-link to="/hynalt">7. Хяналт</router-link>
    <router-link to="/ct_1">8. Ct_1</router-link>
    <router-link to="/ct_2">9. Ct_2</router-link>
    <router-link to="/ct_3">10. Ct_3</router-link>
    <router-link to="/ct_4">11. Ct_4</router-link>
    <router-link to="/dans_tuluvluguu">12. Дансны төлөвлөгөө</router-link>
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
.nav {
  text-align: center;
  padding: 10px;
  height: 40px;
  background-color: #444;
  color: orange;
  overflow: hidden;
}
.nav a {
  /* float: left; */
  margin: 20px;
}

.nav a:hover {
  background: orange;
  color: #444;
}
</style>
