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
        console.log("fetchP5: ", response.data.a5);
        commit("setP5", response.data.a5);
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
