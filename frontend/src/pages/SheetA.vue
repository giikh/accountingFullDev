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

// register Handsontable's modules
registerAllModules();

export default defineComponent({
  data() {
    return {
      data: [
        [
          "Guilgeenii dugaar",
          "Debit dans",
          "Credit dans",
          "Ognoo",
          "Dun",
        ],
        [
          1,
          "Mungun hurungu",
          "Banknii zeel",
          "1/1/2021",
          1500000,
        ],
        [
        2,
          "Avlaga",
          "Bor.orlogo",
          "1/1/2021",
          500000,
        ],
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
