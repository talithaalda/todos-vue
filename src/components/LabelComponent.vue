<template lang="">
  <label class="label">
    <span class="label-text">{{ label }}</span>
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LabelComponent",
  props: {
    label: String,
  },
});
</script>
