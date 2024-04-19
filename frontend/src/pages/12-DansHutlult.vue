<template>
  <br />

  <h1>12. Дансны төлөвлөгөө</h1>

  <div class="flex flex-col items-center" v-if="data">
    <h1>12. Дансны төлөвлөгөө</h1>
    <hot-table :settings="hotSettings" :data="data" class="custom-hot-table">
    </hot-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";

registerAllModules();

export default {
  name: "DansHutlult",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        console.log("p12-1 test");
        await store.dispatch("fetchP12");
        console.log("p12-2 test");
        data.value = store.getters.getP12;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
    };

    return {
      data,
      hotSettings,
    };
  },
};
</script>
