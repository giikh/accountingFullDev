<template>
  <br />
  <div class="flex flex-col items-center text-red-500" v-if="!data">
    <h1>Мэдээлэл олдсонгүй!!!</h1>
  </div>

  <div class="flex flex-col items-center" v-if="data">
    <h1>4. Sheet1</h1>
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
  name: "SheetA",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();

    onMounted(async () => {
      try {
        await store.dispatch("fetchP4");
        data.value = store.getters.getP4;
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
