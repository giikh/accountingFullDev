<template>
  <br />
  <div class="flex flex-col items-center text-red-500" v-if="!data">
    <h1>Мэдээлэл олдсонгүй!!!</h1>
  </div>
  <div>
    <hot-table
      :settings="hotSettingsInsertData"
      ref="hotRef"
      class="bg-black text-gray-900"
    ></hot-table>
  </div>
  <div>
    <table class="w-full text-sm my-8 text-gray-600">
      <thead>
        <tr>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            <button @click="addRow">+</button>
          </th>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            Засварын ажлын код
          </th>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            Материалын код
          </th>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            Гэмтэл арилгасан код
          </th>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            Тоо хэмжээ
          </th>
          <th class="border border-gray-300 px-2 py-1 bg-slate-200">
            Засварласан ажилтны ID дугаар
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <th class="border border-gray-300 px-2 py-1">
            {{ index + 1 }}
          </th>
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="border border-gray-300 px-2 py-1 font-normal"
          >
            <input
              type="text"
              class="border p-0.5 w-full"
              v-model="rows[index][cellIndex]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-col items-center" v-if="data">
    <h1>5. Ерөнхий журнал</h1>
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
  name: "JournalA",
  components: {
    HotTable,
  },
  setup() {
    const store = useStore();
    const data = ref();
    const hotRef = ref(null);
    // async
    const insertUpdateDeleteTasks = (data) => {
      try {
        // const res = await store.dispatch("tasks/insertUpdateDeleteTasks", data);
        console.log("ANKHAAR", data);
        // if (res.status == 200) window.location.reload();
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      try {
        await store.dispatch("fetchP5");
        data.value = store.getters.getP5;
        console.log("data", data.value.length);
      } catch (error) {
        return error;
      }
    });

    const hotSettings = {
      licenseKey: "non-commercial-and-evaluation",
    };

    const rows = ref([["", "", "", "", ""]]);

    const addRow = () => {
      rows.value.push(["", "", "", "", ""]);
    };

    const hotSettingsInsertData = {
      licenseKey: "non-commercial-and-evaluation",
      colHeader: true,
      colWidths: [215, 310, 215, 215, 215],
      minRows: 1,
      maxRows: 1,
      columns: [
        {
          title: "Категор",
          data: "0",
          // type: "dropdown",
          // source: [],
          // renderer: [],
          renderer: (instance, td, row, col, prop, value) => {
            td.innerHTML = value;
            td.style.background = "#FCFCF7";
            td.style.color = "black";
          },
        },
        {
          title: "Ажил",
          data: "1",
          renderer: (instance, td, row, col, prop, value) => {
            td.innerHTML = value;
            td.style.background = "#FCFCF7";
            td.style.color = "black";
          },
        },
        {
          title: "Захиалагч",
          data: "2",
          // type: "dropdown",
          // source: [],
          // renderer: [],
          renderer: (instance, td, row, col, prop, value) => {
            td.innerHTML = value;
            td.style.background = "#FCFCF7";
            td.style.color = "black";
          },
        },
        {
          title: "Хариуцагч",
          data: "3",
          // type: "dropdown",
          // source: [],
          // renderer: [],
          renderer: (instance, td, row, col, prop, value) => {
            td.innerHTML = value;
            td.style.background = "#FCFCF7";
            td.style.color = "black";
          },
        },
        {
          title: " ",
          data: "4",
          readOnly: true,
          renderer: async (instance, td) => {
            td.classList.add("htCenter", "htMiddle");
            td.style.background = "#FCFCF7";
            td.innerHTML =
              '<button class="save-btn text-[#e7e7e7] bg-[#008cba] hover:bg-sky-800 font-bold rounded-md px-20">Нэмэх</button>';
            const saveButton = td.querySelector(".save-btn");
            if (saveButton) {
              saveButton.addEventListener("click", async () => {
                const test = JSON.parse(
                  JSON.stringify(hotRef.value.hotInstance.getDataAtRow(0))
                );
                await insertUpdateDeleteTasks({
                  category: test[0],
                  name: test[1],
                  customer: test[2],
                  responder: test[3],
                });
              });
            }
          },
        },
      ],
    };

    return {
      data,
      hotSettingsInsertData,
      hotSettings,
      addRow,
      insertUpdateDeleteTasks,
      rows,
    };
  },
};
</script>
