<template>
  <!-- <p>Choose what part of this page you want to see:</p> -->
  <button @click="activeComp = 'TsalinHuls'">Цалингийн хүснэгт</button>
  <button @click="activeComp = 'BaraaMaterial'">Бараа материал</button>
  <button @click="activeComp = 'undsenHurungu'">Үндсэн хөрөнгө</button>
  <button @click="activeComp = 'HynaltHu'">Хяналт</button>
  <button @click="activeComp = 'SheetA'">Sheet1</button>
  <button @click="activeComp = 'JournalA'">Ерөнхий журнал</button>
  <button @click="activeComp = 'GuilbalA'">Гүйлгээ баланс</button>
  <button @click="activeComp = 'Ct_1'">CT-1</button>
  <button @click="activeComp = 'Ct_2'">CT-2</button>
  <button @click="activeComp = 'Ct_3'">CT-3</button>
  <button @click="activeComp = 'Ct_4'">CT-4</button>
  <button @click="activeComp = 'DansHutlult'">DansHutlult</button>

  <div>
    <component :is="activeComp"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: "",
    };
  },
};
</script>

<style scoped>
button {
  padding: 5px;
  margin: 10px;
}
/* div {
  border: dashed black 1px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
} */
</style>
