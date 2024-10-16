/* eslint-disable prettier/prettier */
interface User {
  username: string;
  password: string;
  name: string;
}
const state = {
  user: [] as User[],
};
const getters = {
  getUser(state: { user: User[] }) {
    return state.user;
  },

  isloggedIn(state: { user: User[] }) {
    //
  },
};
const mutations = {
  ADD_USER(state: { user: User[] }, user: User) {
    state.user.push(user);
    console.log(state.user);
  },
  UPDATE_USER(state: { user: User[] }, payload: { index: number; user: User }) {
    state.user[payload.index] = payload.user;
  },
  DELETE_USER(state: { user: User[] }, index: number) {
    state.user.splice(index, 1);
  },
  RESET_USER(state: { user: User[] }) {
    state.user = [];
  },
};
const actions = {
  addUser({ commit }: any, user: User) {
    commit("ADD_USER", user);
  },
  updateUser({ commit }: any, { index, user }: { index: number; user: User }) {
    commit("UPDATE_USER", index, user);
  },
  deleteUser({ commit }: any, index: number) {
    commit("DELETE_USER", index);
  },
  resetUser({ commit }: any) {
    commit("RESET_USER");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
