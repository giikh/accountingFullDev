import axios from "axios";

export default {
  state() {
    return {
      p1: [],
      p2: [],
      p3: [],
      p4: [],
      p5: [],
      p6: [],
      p7: [],
      p8: [],
      p9: [],
      p10: [],
      p11: [],
      p12: [],
      p13: [],
    };
  },

  getters: {
    getP1(state) {
      return state.p1;
    },
    getP2(state) {
      return state.p2;
    },
    getP3(state) {
      return state.p3;
    },
    getP4(state) {
      return state.p4;
    },
    getP5(state) {
      return state.p5;
    },
    getP6(state) {
      return state.p6;
    },
    getP7(state) {
      return state.p7;
    },
    getP8(state) {
      return state.p8;
    },
    getP9(state) {
      return state.p9;
    },
    getP10(state) {
      return state.p10;
    },
    getP11(state) {
      return state.p11;
    },
    getP12(state) {
      return state.p12;
    },
  },

  mutations: {
    setP1(state, payload) {
      state.p1 = payload;
      console.log("payload-1: ", payload);
    },
    setP2(state, payload) {
      state.p2 = payload;
      console.log("payload-2: ", payload);
    },
    setP3(state, payload) {
      state.p3 = payload;
      console.log("payload-3: ", payload);
    },
    setP4(state, payload) {
      state.p4 = payload;
      console.log("payload-4: ", payload);
    },
    setP5(state, payload) {
      state.p5 = payload;
      console.log("payload-5: ", payload);
    },
    setP6(state, payload) {
      state.p6 = payload;
      console.log("payload-6: ", payload);
    },
    setP7(state, payload) {
      state.p7 = payload;
      console.log("payload-7: ", payload);
    },
    setP8(state, payload) {
      state.p8 = payload;
      console.log("payload-8: ", payload);
    },
    setP9(state, payload) {
      state.p9 = payload;
      console.log("payload-9: ", payload);
    },
    setP10(state, payload) {
      state.p10 = payload;
      console.log("payload-10: ", payload);
    },
    setP11(state, payload) {
      state.p11 = payload;
      console.log("payload-11: ", payload);
    },
    setP12(state, payload) {
      state.p12 = payload;
      console.log("payload-12: ", payload);
    },
  },

  actions: {
    async fetchP1({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p1");
        console.log("fetchP1: ", response.data.a);
        commit("setP1", response.data.a);
      } catch (error) {
        return error;
      }
    },

    async fetchP2({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p2");
        console.log("fetchP2: ", response.data.a2);
        commit("setP2", response.data.a2);
      } catch (error) {
        return error;
      }
    },

    async fetchP3({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p3");
        console.log("fetchP3: ", response.data.a3);
        commit("setP3", response.data.a3);
      } catch (error) {
        return error;
      }
    },
    async fetchP4({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p4");
        console.log("fetchP4: ", response.data.a4);
        commit("setP4", response.data.a4);
      } catch (error) {
        return error;
      }
    },

    async fetchP5({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p5");
        console.log("fetch: ", response);
        commit("setP5", response.data.a5);
      } catch (error) {
        return error;
      }
    },

    async fetchP6({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p6");
        console.log("fetchP6: ", response.data.a6);
        commit("setP6", response.data.a6);
      } catch (error) {
        return error;
      }
    },

    async fetchP7({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p7");
        console.log("fetchP7: ", response.data.a7);
        commit("setP7", response.data.a7);
      } catch (error) {
        return error;
      }
    },

    async fetchP8({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p8");
        console.log("fetchP8: ", response.data.a8);
        commit("setP8", response.data.a8);
      } catch (error) {
        return error;
      }
    },

    async fetchP9({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p9");
        console.log("fetchP9: ", response.data.a9);
        commit("setP9", response.data.a9);
      } catch (error) {
        return error;
      }
    },

    async fetchP10({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p10");
        console.log("fetchP10: ", response.data.a10);
        commit("setP10", response.data.a10);
      } catch (error) {
        return error;
      }
    },

    async fetchP11({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p11");
        console.log("fetchP11: ", response.data.a11);
        commit("setP11", response.data.a11);
      } catch (error) {
        return error;
      }
    },

    async fetchP12({ commit }) {
      try {
        const response = await axios.get("https://boyo.mn/backend/p12");
        console.log("fetchP12: ", response.data.a12);
        commit("setP12", response.data.a12);
      } catch (error) {
        return error;
      }
    },

    //   const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => response.json());
    // this.commit('setPosts', posts)
    //   }

    //   async loginUser({ commit }, credentials) {
    //     try {
    //       const response = await instance.post("/account/login", credentials);
    //       commit("setUserLogin", response.data);
    //     } catch (error) {
    //       if (error.response && error.response.status === 400) {
    //         return Promise.reject(error);
    //       }
    //       return Promise.reject(error);
    //     }
    //   },

    //   async registerUser({ commit }, credentials) {
    //     try {
    //       const response = await instance.post("/account/signup", credentials);
    //       commit("setUserRegister", response.data);
    //     } catch (error) {
    //       return Promise.reject(error);
    //     }
    //   },

    //   async fetchUserByEmail({ commit }, payload) {
    //     try {
    //       const response = await instance.post("/account/get/userByEmail", {
    //         email: payload,
    //       });
    //       commit("setUserByEmail", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },

    //   async fetchNewsList({ commit }) {
    //     try {
    //       const response = await instance.get("/news/list");
    //       commit("setNewsList", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },

    //   async fetchNewsById({ commit }, news_id) {
    //     try {
    //       const response = await instance.post(`/news/detail/${news_id}`);
    //       commit("setNewsById", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },

    //   async fetchNewsComment({ commit }, news_id) {
    //     try {
    //       const response = await instance.post("/news/comments", { news_id });
    //       commit("setNewsComment", response.data.comments);
    //     } catch (error) {
    //       return error("Error fetching news comments:", error);
    //     }
    //   },

    //   async fetchHostPlan({ commit }) {
    //     try {
    //       const response = await instance.get("/host/plan");
    //       commit("setHostPlan", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },

    //   async searchHostUser({ commit }, payload) {
    //     try {
    //       const response = await instance.post("/host/search", payload);
    //       commit("setHostUser", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },

    //   async fetchProduct({ commit }) {
    //     try {
    //       const response = await instance.get("/products/1");
    //       commit("setProduct", response.data);
    //     } catch (error) {
    //       return error;
    //     }
    //   },
  },
};
