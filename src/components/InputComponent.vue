<template lang="">
  <input
    :type="showPassword ? 'text' : type"
    :required="required"
    :autocomplete="autocomplete"
    class="grow"
    @input="updateValue($event)"
    :value="modelValue"
    :placeholder="placeholder"
  />
  <div v-if="password">
    <div v-if="showPassword" @click="handleClick">
      <font-awesome-icon :icon="['fas', 'eye']" />
    </div>
    <div v-else @click="handleClick">
      <font-awesome-icon :icon="['fas', 'eye-slash']" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponent",
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    modelValue: [String, Number],
    placeholder: String,
    required: Boolean,
    autocomplete: String,
    type: String,
    password: Boolean,
  },
  methods: {
    updateValue(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
    handleClick() {
      this.showPassword = !this.showPassword;
    },
  },
});
</script>
