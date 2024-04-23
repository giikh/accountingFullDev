import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import TsalinHuls from "./pages/1-TsalinHuls.vue";
import BaraaMaterial from "./pages/2-BaraaMaterial.vue";
import undsenHurungu from "./pages/3-undsenHurungu.vue";
import SheetA from "./pages/4-SheetA.vue";
import JournalA from "./pages/5-JournalA.vue";
import GuilbalA from "./pages/6-GuilbalA.vue";
import Hynalt from "./pages/7-HynaltHu.vue";
import Ct_1 from "./pages/8-Ct_1.vue";
import Ct_2 from "./pages/9-Ct_2.vue";
import Ct_3 from "./pages/10-Ct_3.vue";
import Ct_4 from "./pages/11-Ct_4.vue";
import DansHutlult from "./pages/12-DansHutlult.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // name: "Home",
      component: HomePage,
      // meta: { title: "Нүүр" },
    },
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
