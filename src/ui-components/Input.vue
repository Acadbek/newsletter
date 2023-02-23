<template>
  <label :for="label" class="mb-1">{{ label }}</label>
  <input
    class="border-none border-2 mb-3 px-4 py-2 bg-black outline-none"
    maxlength="100"
    :type="type"
    :placeholder="placeholder"
    :id="label"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelvalue", e.target.value);
    },
  },
};
</script>
