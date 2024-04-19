<template>
  <br />
  <div class="flex flex-col items-center" v-if="data">
    <h1>11. Ct_4</h1>
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
  name: "Ct_4",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        await store.dispatch("fetchP11");
        data.value = store.getters.getP11;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
      mergeCells: [
        { row: 0, col: 0, rowspan: 1, colspan: 6 },
        { row: 2, col: 1, rowspan: 1, colspan: 3 },
        { row: 3, col: 1, rowspan: 1, colspan: 3 },
        { row: 4, col: 1, rowspan: 1, colspan: 3 },
        { row: 5, col: 1, rowspan: 1, colspan: 3 },
        { row: 6, col: 1, rowspan: 1, colspan: 3 },
        { row: 7, col: 1, rowspan: 1, colspan: 3 },
        { row: 8, col: 1, rowspan: 1, colspan: 3 },
        { row: 9, col: 1, rowspan: 1, colspan: 3 },
        { row: 10, col: 1, rowspan: 1, colspan: 3 },
        { row: 11, col: 1, rowspan: 1, colspan: 3 },
        { row: 12, col: 1, rowspan: 1, colspan: 3 },
        { row: 13, col: 1, rowspan: 1, colspan: 3 },
        { row: 14, col: 1, rowspan: 1, colspan: 3 },
        { row: 15, col: 1, rowspan: 1, colspan: 3 },
        { row: 16, col: 1, rowspan: 1, colspan: 3 },
        { row: 17, col: 1, rowspan: 1, colspan: 3 },
        { row: 18, col: 1, rowspan: 1, colspan: 3 },
        { row: 19, col: 1, rowspan: 1, colspan: 3 },
        { row: 20, col: 1, rowspan: 1, colspan: 3 },
        { row: 21, col: 1, rowspan: 1, colspan: 3 },
        { row: 22, col: 1, rowspan: 1, colspan: 3 },
        { row: 23, col: 1, rowspan: 1, colspan: 3 },
        { row: 24, col: 1, rowspan: 1, colspan: 3 },
        { row: 25, col: 1, rowspan: 1, colspan: 3 },
        { row: 26, col: 1, rowspan: 1, colspan: 3 },
        { row: 27, col: 0, rowspan: 2, colspan: 1 },
        { row: 27, col: 1, rowspan: 2, colspan: 3 },
        { row: 27, col: 4, rowspan: 2, colspan: 1 },
        { row: 27, col: 5, rowspan: 2, colspan: 1 },
        { row: 29, col: 1, rowspan: 1, colspan: 3 },
        { row: 30, col: 1, rowspan: 1, colspan: 3 },
        { row: 31, col: 1, rowspan: 1, colspan: 3 },
        { row: 32, col: 1, rowspan: 1, colspan: 3 },
        { row: 33, col: 1, rowspan: 1, colspan: 3 },
        { row: 34, col: 1, rowspan: 1, colspan: 3 },
        { row: 35, col: 1, rowspan: 1, colspan: 3 },
        { row: 36, col: 1, rowspan: 1, colspan: 3 },
        { row: 37, col: 1, rowspan: 1, colspan: 3 },
        { row: 38, col: 1, rowspan: 1, colspan: 3 },
        { row: 39, col: 1, rowspan: 1, colspan: 3 },
        { row: 40, col: 1, rowspan: 1, colspan: 3 },
        { row: 41, col: 1, rowspan: 1, colspan: 3 },
        { row: 42, col: 1, rowspan: 1, colspan: 3 },
        { row: 43, col: 1, rowspan: 1, colspan: 3 },
        { row: 44, col: 1, rowspan: 1, colspan: 3 },
        { row: 45, col: 1, rowspan: 1, colspan: 3 },
        { row: 46, col: 1, rowspan: 1, colspan: 3 },
        { row: 47, col: 1, rowspan: 1, colspan: 3 },
        { row: 48, col: 1, rowspan: 1, colspan: 3 },
        { row: 49, col: 1, rowspan: 1, colspan: 3 },
        { row: 50, col: 1, rowspan: 1, colspan: 3 },
        { row: 51, col: 1, rowspan: 1, colspan: 3 },
        { row: 52, col: 1, rowspan: 1, colspan: 3 },
        { row: 53, col: 1, rowspan: 1, colspan: 3 },
        { row: 54, col: 1, rowspan: 1, colspan: 3 },
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
