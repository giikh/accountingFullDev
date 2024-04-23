<template>
  <br />
  <div class="flex flex-col items-center text-red-500" v-if="!data">
    <h1>Мэдээлэл олдсонгүй!!!</h1>
  </div>
  <div class="flex flex-col items-center" v-if="data1">
    <hot-table
      :settings="hotSettingsInsertData"
      :data="data1"
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
    const data1 = ref([[], []]);

    const hotRef = ref();
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
      colHeaders: [
        "Д/Д",
        "Огноо",
        "Дансны дугаар",
        "Дансны нэр",
        "Дебит / Кредит",
        "Харилцагч",
        "Гүйлгээний утга",
        "Дүн",
        "МГТ-ын мөр",
      ],
    };

    const rows = ref([["", "", "", "", ""]]);

    const addRow = () => {
      rows.value.push(["", "", "", "", ""]);
    };

    const hotSettingsInsertData = {
      licenseKey: "non-commercial-and-evaluation",
      colHeader: true,
      minRows: 2,
      columns: [
        {
          title: "Д/Д",
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
          title: "Огноо",
          data: "1",
          type: "date",
          dateFormat: "MM/DD/YYYY",
          correctFormat: true,
          defaultDate: "01/01/1900",
          // datePicker additional options
          // (see https://github.com/dbushell/Pikaday#configuration)
          datePickerConfig: {
            // First day of the week (0: Sunday, 1: Monday, etc)
            firstDay: 0,
            showWeekNumber: true,
            disableDayFn(date) {
              // Disable Sunday and Saturday
              return date.getDay() === 0 || date.getDay() === 6;
            },
          },
          // title: "Огноо",
          // data: "1",
          // // dateFormat: 'MM/DD/YYYY',
          // // correctFormat: true,
          // // defaultDate: '01/01/2024',
          // // datePickerConfig: {
          // // firstDay: 0,
          // // showWeekNumber: true,
          // // disableDayFn(date){
          // //   return date.getDay() === 0 || date.getDay() === 6;
          // // },
          // renderer: (instance, td, row, col, prop, value) => {
          //   td.innerHTML = value;
          //   td.style.background = "#FCFCF7";
          //   td.style.color = "black";
          // },
        },

        {
          title: "Дансны дугаар",
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
          title: "Дансны нэр",
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
          title: "Дебит / Кредит",
          data: "4",
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
          title: "Харилцагч",
          data: "5",
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
          title: "Гүйлгээний утга",
          data: "6",
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
          title: "Дүн",
          data: "7",
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
          title: "МГТ-ын мөр",
          data: "8",
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
          data: "9",
          readOnly: true,
          renderer: async (instance, td, row) => {
            td.classList.add("htCenter", "htMiddle");
            td.style.background = "#FCFCF7";
            td.innerHTML =
              row < hotRef.value.hotInstance.countRows() - 2
                ? ""
                : row == hotRef.value.hotInstance.countRows() - 2
                ? '<button class="plus-btn text-[#e7e7e7] bg-[#008cba] hover:bg-sky-800 font-bold rounded-md px-1">+</button>'
                : '<button class="save-btn text-[#e7e7e7] bg-[#008cba] hover:bg-sky-800 font-bold rounded-md px-1">SAVE</button>';

            const addButton = td.querySelector(".plus-btn");
            if (addButton) {
              addButton.addEventListener("click", () => {
                hotRef.value.hotInstance.alter("insert_row_below", 1, 1);
              });
            }

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
      data1,
      hotRef,
      hotSettingsInsertData,
      hotSettings,
      addRow,
      insertUpdateDeleteTasks,
      rows,
    };
  },
};
</script>
