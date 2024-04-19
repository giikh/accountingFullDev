<template>
  <div class="flex flex-col items-center" v-if="data">
    <hot-table :settings="hotSettings" :data="data" class="custom-hot-table">
    </hot-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";

Handsontable.renderers.registerRenderer(
  "customStylesRenderer",
  (hotInstance, TD, ...rest) => {
    Handsontable.renderers.TextRenderer(hotInstance, TD, ...rest);
    TD.style.fontWeight = "bold";
  }
);

registerAllModules();

export default {
  name: "Ct_3",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        await store.dispatch("fetchP10");
        data.value = store.getters.getP10;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
      mergeCells: [
        { row: 0, col: 0, rowspan: 1, colspan: 10 },
        { row: 1, col: 0, rowspan: 1, colspan: 2 },
      ],
      cell: [{ row: 0, col: 0, className: "htCenter" }],
    };

    return {
      data,
      hotSettings,
    };
  },
};
</script>
