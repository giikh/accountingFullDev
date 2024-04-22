import { createRouter, createWebHistory } from "vue-router";
// import Cookies from "js-cookie";
// import jwt_decode from "jwt-decode";

// import HomePage from "./pages/HomePage.vue";
import TsalinHuls from "./pages/TsalinHuls.vue";
import BaraaMaterial from "./pages/BaraaMaterial.vue";
import undsenHurungu from "./pages/undsenHurungu.vue";
import SheetA from "./pages/SheetA.vue";
import JournalA from "./pages/JournalA.vue";
import GuilbalA from "./pages/GuilbalA.vue";
import Hynalt from "./pages/HynaltHu.vue";
import Ct_1 from "./pages/Ct_1.vue";
import Ct_2 from "./pages/Ct_2.vue";
import Ct_3 from "./pages/Ct_3.vue";
import Ct_4 from "./pages/Ct_4.vue";
import DansHutlult from "./pages/DansHutlult.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   // name: "Home",
    //   component: HomePage,
    //   // meta: { title: "Нүүр" },
    // },
    {
      path: "/salary",
      name: "Salary",
      component: TsalinHuls,
      meta: { title: "Цалин" },
    },
    {
      path: "/goods",
      name: "Goods",
      component: BaraaMaterial,
      meta: { title: "Бараа материал" },
    },
    {
      path: "/undsenHurungu",
      name: "undsenHurungu",
      component: undsenHurungu,
      meta: { title: "Үндсэн хөрөнгө" },
    },
    {
      path: "/hynalt",
      name: "Hynalt",
      component: Hynalt,
      meta: { title: "hynalt" },
    },
    {
      path: "/sheet",
      name: "SheetA",
      component: SheetA,
      meta: { title: "Sheet1" },
    },
    {
      path: "/journal",
      name: "Yrunhiijurnal",
      component: JournalA,
      meta: { title: "jurnal" },
    },
    {
      path: "/guilbal",
      name: "Guilbal",
      component: GuilbalA,
      meta: { title: "guilbal" },
    },
    {
      path: "/ct_1",
      name: "Ct_1",
      component: Ct_1,
      meta: { title: "ct_1" },
    },
    {
      path: "/hynalt",
      name: "Hynalt",
      component: Hynalt,
      meta: { title: "hynalt" },
    },

    {
      path: "/ct_2",
      name: "Ct_2",
      component: Ct_2,
      meta: { title: "ct_2" },
    },
    {
      path: "/dans_tuluvluguu",
      name: "dans_tuluvluguu",
      component: DansHutlult,
      meta: { title: "dans_tuluvluguu" },
    },
    {
      path: "/Ct_3",
      name: "Ct_3",
      component: Ct_3,
      meta: { title: "Ct_3" },
    },
    {
      path: "/ct_4",
      name: "Ct_4",
      component: Ct_4,
      meta: { title: "ct_4" },
    },
  ],
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //     };
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;
