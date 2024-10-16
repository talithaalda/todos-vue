<template lang="">
  <span v-if="name" class="text-red-500 text-sm text-start">{{ name }}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorMessage",
  props: {
    name: String,
  },
});
</script>
