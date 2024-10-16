<!-- eslint-disable prettier/prettier -->
<template lang="">
  <div>
    <div class="navbar bg-white shadow-md fixed">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Todo App</a>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar placeholder"
          >
            <div class="bg-gray-300 text-gray-50-content w-24 rounded-full">
              <span class="text-3xl">D</span>
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a class="justify-between"> Profile </a>
            </li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavbarComponent",
  data() {
    return {};
  },
});
</script>
