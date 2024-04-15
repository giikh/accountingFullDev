import { createStore } from "vuex";
import user_side from "./public";

export default createStore({
  namespaced: true,
  modules: {
    user_side
  },
});