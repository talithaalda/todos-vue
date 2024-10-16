import { format } from "date-fns";
interface todosList {
  id: number;
  title: string;
  description: string;
  status: boolean;
  startDate: Date;
  endDate: Date;
}
const state = {
  todosList: [] as todosList[],
};

const getters = {
  getTodosList(state: { todosList: todosList[] }) {
    return state.todosList.map((todo) => ({
      ...todo,
      formattedStartDate: format(new Date(todo.startDate), "dd MMMM yyyy"),
      formattedEndDate: format(new Date(todo.endDate), "dd MMMM yyyy"),
    }));
  },
};
const mutations = {
  ADD_TODO(state: { todosList: todosList[] }, todosList: todosList) {
    state.todosList.push(todosList);
  },
  DELETE_TODO(state: { todosList: todosList[] }, index: number) {
    state.todosList.splice(index, 1);
  },
  CHANGE_STATUS(state: { todosList: todosList[] }, index: number) {
    state.todosList[index].status = !state.todosList[index].status;
  },
};
const actions = {
  addTodo({ commit }: any, todo: todosList) {
    commit("ADD_TODO", todo);
  },
  deleteTodo({ commit }: any, index: number) {
    commit("DELETE_TODO", index);
  },
  changeStatus({ commit }: any, index: number) {
    commit("CHANGE_STATUS", index);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
