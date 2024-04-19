<template>
  <Header />
  <RouterView />
  <Footer />
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { defineComponent } from "vue";
import "handsontable/dist/handsontable.full.css";

export default defineComponent({
  data() {
    return {};
  },
  components: { Header, Footer },
});
</script>
