<template>
  <NavbarComponent />
  <TaskComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TaskComponent from "@/components/TaskComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

@Options({
  components: {
    TaskComponent,
    NavbarComponent,
  },
})
export default class HomeView extends Vue {}
</script>
