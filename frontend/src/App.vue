<template>
  <Header />
  <RouterView />
</template>
<script>
import Header from "./components/Header";
import { defineComponent } from "vue";
import "handsontable/dist/handsontable.full.css";

export default defineComponent({
  data() {
    return {};
  },
  components: { Header },
});
</script>
