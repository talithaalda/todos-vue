<template>
  <div
    class="min-h-screen flex pb-10 flex-col items-center max-w-xl mx-auto pt-24"
  >
    <img src="../assets/logo.png" alt="logo" width="100" class="mb-5" />
    <div class="w-full flex flex-col gap-6">
      <button
        class="chat chat-end fixed bottom-5 right-5 z-20"
        onclick="my_modal_3.showModal()"
      >
        <div
          class="chat-bubble chat-bubble-primary btn-primary btn rounded-full flex items-center justify-center w-36 h-16 px-4 py-2 shadow-md"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          <p>Add Task</p>
        </div>
      </button>
      <form @submit.prevent="addTask" class="w-full">
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 class="text-lg font-bold">Add your task</h3>
            <div class="flex flex-col gap-2">
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">What you want to do?</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here ..."
                  name="task"
                  class="input input-bordered input-primary w-full bg-base-100"
                  autocomplete="off"
                  v-model="todo.title"
                  :rules="titleRules"
                />
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Description</span>
                </div>
                <textarea
                  class="textarea textarea-primary"
                  placeholder="Bio"
                  autocomplete="off"
                  v-model="todo.description"
                  :rules="descRules"
                ></textarea>
              </label>
              div
              <div class="flex flex-row gap-2">
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">Start Date</span>
                  </div>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="task"
                    class="input input-bordered input-primary w-full bg-base-100"
                    autocomplete="off"
                    v-model="todo.startDate"
                    :rules="startDateRules"
                  />
                </label>
                <label class="form-control w-full">
                  <div class="label">
                    <span class="label-text">End Date</span>
                  </div>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="task"
                    class="input input-bordered input-primary w-full bg-base-100"
                    autocomplete="off"
                    v-model="todo.endDate"
                    :rules="endDateRules"
                  />
                </label>
              </div>
              <label
                class="form-control w-full flex flex-row justify-center items-center gap-2"
              >
                <div class="label">
                  <span class="label-text">Completed?</span>
                </div>
                <input
                  type="checkbox"
                  class="toggle toggle-primary"
                  checked="checked"
                  v-model="todo.status"
                  :rules="statusRules"
                />
              </label>

              <button
                :disabled="
                  !todo.title ||
                  // !todo.description ||
                  !todo.startDate ||
                  !todo.endDate
                "
                @click="addTask"
                class="btn btn-outline btn-primary mt-2"
              >
                Add Todo
              </button>
            </div>
          </div>
        </dialog>
      </form>
      <div v-if="todoslist.length > 0" class="w-full gap-2 flex flex-col">
        <div v-for="(todo, index) in todoslist" :key="index">
          <div
            class="card bg-primary text-primary-content text-start items-center w-full flex flex-row px-4 rounded-full"
          >
            <input
              type="checkbox"
              checked="checked"
              class="checkbox bg-base-100 w-4 h-4"
              v-model="todo.status"
              @change="changeStatusToggle(index)"
            />
            <div class="collapse collapse-arrow bg-primary">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                <h2 class="card-title text-[16px]">
                  {{ todo.title }}
                </h2>
                <p class="text-xs text-gray-800 font-medium">
                  {{ todo.formattedStartDate }} - {{ todo.formattedEndDate }}
                </p>
              </div>
              <div class="collapse-content text-sm text-gray-700">
                <p>{{ todo.description }}</p>
              </div>
            </div>
            <button class="" @click="removeTask(index)">
              <font-awesome-icon
                :icon="['far', 'circle-xmark']"
                class="text-red-600 hover:text-red-800 mr-2"
              />
            </button>
          </div>
        </div>
      </div>
      <div v-else class="w-full gap-2 flex flex-col">Task is empty</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TaskComponent",
  data() {
    return {
      todo: {
        title: "",
        description: "",
        status: false,
        startDate: "",
        endDate: "",
      },
      titleRules: [(v: string) => !!v || "Title is required"],
      descRules: [(v: string) => !!v || "Description is required"],
      statusRules: [(v: boolean) => !!v || "Status is required"],
      startDateRules: [(v: string) => !!v || "Start Date is required"],
      endDateRules: [(v: string) => !!v || "End Date is required"],
    };
  },
  computed: {
    ...mapGetters({ todoslist: "task/getTodosList" }),
  },

  methods: {
    ...mapActions({
      addTodo: "task/addTodo",
      deleteTodo: "task/deleteTodo",
      changeStatus: "task/changeStatus",
    }),
    addTask() {
      if (this.todo) {
        const newTodo = {
          id: Date.now(),
          title: this.todo.title,
          description: this.todo.description,
          status: this.todo.status,
          startDate: this.todo.startDate,
          endDate: this.todo.endDate,
        };
        this.addTodo(newTodo);
        this.todo.title = "";
        this.todo.description = "";
        this.todo.status = false;
        this.todo.startDate = "";
        this.todo.endDate = "";
      }
    },
    removeTask(index: number) {
      this.deleteTodo(index);
    },
    changeStatusToggle(index: number) {
      this.changeStatus(index);
    },
  },
});
</script>
