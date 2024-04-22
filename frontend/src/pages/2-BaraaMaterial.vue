<template>
  <br />
  <div class="flex flex-col items-center text-red-500" v-if="!data">
    <h1>Мэдээлэл олдсонгүй!!!</h1>
  </div>

  <div class="flex flex-col items-center" v-if="data">
    <h1>2. Бараа материал</h1>
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
  name: "BaraaMaterial",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        await store.dispatch("fetchP2");
        data.value = store.getters.getP2;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
      mergeCells: [
        { row: 0, col: 0, rowspan: 1, colspan: 14 },
        { row: 1, col: 0, rowspan: 1, colspan: 14 },
        { row: 2, col: 8, rowspan: 1, colspan: 6 },
        { row: 3, col: 8, rowspan: 1, colspan: 6 },
        { row: 4, col: 5, rowspan: 1, colspan: 3 },
        { row: 4, col: 8, rowspan: 1, colspan: 3 },
        { row: 4, col: 11, rowspan: 1, colspan: 3 },
        { row: 1, col: 2, rowspan: 1, colspan: 1 },
        { row: 1, col: 4, rowspan: 1, colspan: 11 },
        { row: 1, col: 0, rowspan: 1, colspan: 3 },
        { row: 2, col: 7, rowspan: 1, colspan: 8 },
        { row: 2, col: 0, rowspan: 1, colspan: 2 },
        { row: 3, col: 0, rowspan: 1, colspan: 2 },
        { row: 3, col: 7, rowspan: 1, colspan: 8 },
        { row: 3, col: 7, rowspan: 1, colspan: 8 },
        { row: 2, col: 3, rowspan: 1, colspan: 4 },
        { row: 3, col: 3, rowspan: 1, colspan: 4 },
      ],
      cell: [
        { row: 0, col: 0, className: "htCenter" },
        { row: 1, col: 0, className: "htCenter" },
        {
          row: 0,
          col: 0,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 0,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 1,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 2,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 3,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 4,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 5,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 6,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 7,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 8,
          renderer: "customStylesRenderer",
        },
        {
          row: 4,
          col: 11,
          renderer: "customStylesRenderer",
        },
      ],
    };

    return {
      data,
      hotSettings,
    };
  },
};
</script>
