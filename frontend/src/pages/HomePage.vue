<template>
  <h1><a href="http://boyo.mn/HomePage/">HomePage</a></h1>
 <h2><a href="http://boyo.mn/salary/">Цалингийн хүснэгт</a></h2> 
 <h2><a href="http://boyo.mn/goods/">Бараа материал</a></h2> 
</template>

<style>
/* Add your CSS styles here */
h1, h2 {
  color: blue;
}
h2 {
  font-size: 1.2em;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

<script>
import { defineComponent } from "vue";
//import { HotTable } from "@handsontable/vue3";
//import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";

export default defineComponent({
  data() {
    return {};
  },
  components: {},
});
</script>
