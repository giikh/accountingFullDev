<template>

  <div id="example">
    <hot-table
      ref="hotTableComponent"
      :data="data"
      :settings="hotSettings"
      class="custom-hot-table" 
    ></hot-table>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";

registerAllModules();

export default defineComponent({
  data() {
    return {
      data: [
        ["Д/д", "Дүн", "Дебит / Кредит", ""],
        [1, 10000, 10000, "-"],
        [2, 5000, 5000, "-"],
        [3, 50, 50, "-"],
        [4, 35958996, 35958996, "-"],
        [5, 10082811, 10082811, "-"],
        [6, 27386692, 27386692, "-"],
        [7, 3423336, 3423336, "-"],
        ["COST IMPORT1", 136000, 136000, "-"],
        ["COST IMPORT2", 710769, 710769, "-"],
        ["COST IMPORT3", 17769, 17769, "-"],
        ["COST IMPORT4", 14215, 14215, "-"],
        ["COST IMPORT5", 10662, 10662, "-"],
        ["COST IMPORT6", 108218, 108218, "-"],
        ["FA1", 222465600, 222465600, "-"],
        ["FA2", 12261201, 12261201, "-"],
        ["SALES1", 204000, 204000, "-"],
        ["SALES2", 1066154, 1066154, "-"],
        ["SALES3", 26654, 26654, "-"],
        ["SALES4", 21323, 21323, "-"],
        ["SALES5", 15992, 15992, "-"],
      ],
    };
  },
  components: {
    HotTable,
  },
});
</script>


<style>
.custom-hot-table .htCore td,
.custom-hot-table .htCore th {
  border: 1; /* Remove borders from cells */
}

.custom-hot-table .htCore {
  border: 1px solid black; /* Add border to the table */
}
</style>