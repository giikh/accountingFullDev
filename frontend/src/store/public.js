export default {
  state() {
    return {
      userLogin: [],
      userRegister: [],
      userByEmail: [],
      newsList: [],
      newsById: [],
      newsComment: [],
      hostPlan: [],
      hostUser: [],
      product: {},

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

    getUserLogin(state) {
      return state.userLogin;
    },

    getUserRegister(state) {
      return state.userRegister;
    },

    getUserByEmail(state) {
      return state.userByEmail;
    },

    getNewsList(state) {
      return state.newsList;
    },

    getNewsById(state) {
      return state.newsById;
    },

    getNewsComment(state) {
      return state.newsComment;
    },

    getHostPlan(state) {
      return state.hostPlan;
    },

    getHostUser(state) {
      return state.hostUser;
    },

    getProduct(state) {
      return state.router;
    },
  },

  mutations: {
    setP1(state, payload) {
      state.p1 = payload;
      console.log("Ankhaar", state.p1);
    },

    setUserLogin(state, payload) {
      state.userLogin = payload;
    },

    setUserRegister(state, payload) {
      state.userRegister = payload;
    },

    setUserByEmail(state, payload) {
      state.userByEmail = payload;
    },

    setNewsList(state, payload) {
      state.newsList = payload;
    },

    setNewsById(state, payload) {
      state.newsById = payload;
    },

    setNewsComment(state, payload) {
      state.newsComment = payload;
    },

    setHostPlan(state, payload) {
      state.hostPlan = payload;
    },

    setHostUser(state, payload) {
      state.hostUser = payload;
    },

    setProduct(state, payload) {
      state.router = payload;
    },
  },

  actions: {
    async fetchP1 ({ commit }) {
      try {
        const response = await fetch("/backend/p1");
        commit("setP1", response.data);
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
