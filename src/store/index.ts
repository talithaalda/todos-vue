/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import task from "./modules/task";
import user from "./modules/user";

const store = createStore({
  modules: {
    task,
    user,
  },
});

export default store;
