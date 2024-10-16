<template lang="">
  <body class="bg-base-200 flex items-center justify-center min-h-screen">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-6">Register</h2>
        <form @submit.prevent="register">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="text"
                class="grow"
                v-model="user.name"
                placeholder="your name"
                autocomplete="new-name"
                :rules="nameRules"
              />
            </label>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="text"
                class="grow"
                v-model="user.username"
                placeholder="your username"
                autocomplete="new-username"
                :rules="usernameRules"
              />
            </label>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="grow"
                v-model="user.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password"
                autocomplete="new-password"
                :rules="passwordRules"
              />
              <div v-if="showPassword" @click="handleClick">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </div>
              <div v-else @click="handleClick">
                <font-awesome-icon :icon="['fas', 'eye-slash']" />
              </div>
            </label>
          </div>
          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="grow"
                v-model="user.confirmpassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Enter confirm password"
                autocomplete="new-password"
                :rules="confirmpasswordRules"
              />
              <div v-if="showConfirmPassword" @click="handleClickConfirm">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </div>
              <div v-else @click="handleClickConfirm">
                <font-awesome-icon :icon="['fas', 'eye-slash']" />
              </div>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </form>
        <div class="divider">OR</div>
        <div class="text-center">
          <p>Already have an account?</p>
          <a href="/login" class="link link-primary">Login now</a>
        </div>
      </div>
    </div>
  </body>
</template>
<script lang="ts">
import { add } from "date-fns";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "LoginComponent",

  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      user: {
        name: "",
        username: "",
        password: "",
        confirmpassword: "",
      },

      nameRules: [
        (v: string) => !!v || "Name is required", // Memastikan tidak kosong
        (v: string) => v.length >= 3 || "Name must be at least 3 characters", // Panjang minimal
      ],

      usernameRules: [
        (v: string) => !!v || "Username is required",
        (v: string) =>
          v.length >= 3 || "Username must be at least 3 characters",
        (v: string) =>
          /^[a-zA-Z0-9_]+$/.test(v) ||
          "Username can only contain letters, numbers, and underscores", // Hanya huruf, angka, underscore
      ],

      passwordRules: [
        (v: string) => !!v || "Password is required",
        (v: string) =>
          v.length >= 6 || "Password must be at least 8 characters", // Panjang minimal
      ],

      confirmpasswordRules: [
        (v: string) => !!v || "Confirm Password is required",
        (v: string, password: string) =>
          v === password || "Passwords do not match", // Harus cocok dengan password
      ],
    };
  },
  methods: {
    ...mapActions({ addUser: "user/addUser" }),
    register() {
      if (this.user) {
        const newUser = {
          name: this.user.name,
          username: this.user.username,
          password: this.user.password,
          confirmpassword: this.user.confirmpassword,
        };
        this.addUser(newUser);
        this.$router.push("/login");
      }
    },
    handleClick() {
      this.showPassword = !this.showPassword;
    },
    handleClickConfirm() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/");
    }
  },
});
</script>
<style lang=""></style>
