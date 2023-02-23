<template>
  <label :for="label" class="mb-1">{{ label }}</label>
  <input
    class="border-none border-2 mb-3 px-4 py-2 bg-black outline-none"
    :type="type"
    :placeholder="placeholder"
    @input="updateInput"
    :id="label"
    :value="modelValue"
    maxlength="100"
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
