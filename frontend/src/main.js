// import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";

// import HomePage from "./pages/HomePage.vue";
import TsalinHuls from "./pages/TsalinHuls.vue";
import BaraaMaterial from "./pages/BaraaMaterial.vue";
import undsenHurungu from "./pages/undsenHurungu.vue";
import HynaltHu from "./pages/HynaltHu.vue";
import SheetA from "./pages/SheetA.vue";
import JournalA from "./pages/JournalA.vue";
import GuilbalA from "./pages/GuilbalA.vue";
import Ct_1 from "./pages/Ct_1.vue";
import Ct_2 from "./pages/Ct_2";
import Ct_3 from "./pages/Ct_3";
import Ct_4 from "./pages/Ct_4";
import DansHutlult from "./pages/DansHutlult";

const app = createApp(App);
// app.use(router);
app.component("TsalinHuls", TsalinHuls);
app.component("BaraaMaterial", BaraaMaterial);
app.component("undsenHurungu", undsenHurungu);
app.component("HynaltHu", HynaltHu);
app.component("SheetA", SheetA);
app.component("JournalA", JournalA);
app.component("GuilbalA", GuilbalA);
app.component("Ct_1", Ct_1);
app.component("Ct_2", Ct_2);
app.component("Ct_3", Ct_3);
app.component("Ct_4", Ct_4);
app.component("DansHutlult", DansHutlult);

app.mount("#app");
