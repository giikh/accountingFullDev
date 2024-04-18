<template>
  <div v-if="data">
    <hot-table :settings="hotSettings" :data="data" class="custom-hot-table">
    </hot-table>
  </div>
</template>

<script>
// import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
// import Handsontable from 'handsontable';
import "handsontable/dist/handsontable.full.css";

// register Handsontable's modules
registerAllModules();

export default {
  name: "TsalinHuls",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();


    onMounted(async () => {
      try {
        // await store.dispatch("fetchNewsList");
        // newsList.value = store.getters.getNewsList;
        data.value = store.getters.getP1;
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
