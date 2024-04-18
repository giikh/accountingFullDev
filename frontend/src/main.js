import router from "./router";
import store from "./store";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";

// import HomePage from "./pages/HomePage.vue";
// import TsalinHuls from "./pages/TsalinHuls.vue";
// import BaraaMaterial from "./pages/BaraaMaterial.vue";
// import undsenHurungu from "./pages/undsenHurungu.vue";
// import HynaltHu from "./pages/HynaltHu.vue";
// import SheetA from "./pages/SheetA.vue";
// import JournalA from "./pages/JournalA.vue";
// import GuilbalA from "./pages/GuilbalA.vue";
// import Ct_1 from "./pages/Ct_1.vue";
// import Ct_2 from "./pages/Ct_2";
// import Ct_3 from "./pages/Ct_3";
// import Ct_4 from "./pages/Ct_4";
// import DansHutlult from "./pages/DansHutlult";

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
