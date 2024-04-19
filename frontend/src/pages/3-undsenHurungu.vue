<template>
  <br />
  <div class="flex flex-col items-center" v-if="data">
    <h1>3. Үндсэн хөрөнгө</h1>
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
  name: "undsenHurungu",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        await store.dispatch("fetchP3");
        data.value = store.getters.getP3;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
      mergeCells: [{ row: 0, col: 8, rowspan: 1, colspan: 3 }],
      cell: [{ row: 0, col: 8, className: "htCenter" }],
    };

    return {
      data,
      hotSettings,
    };
  },
};
</script>
y
