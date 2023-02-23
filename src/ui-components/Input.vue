<template>
  <label class="mb-1" :for="label">{{ label }}</label>
  <input
    class="border-none w-[430px] border-2 mb-3 px-4 py-2 bg-black outline-none"
    maxlength="100"
    :type="type"
    :id="label"
    :placeholder="placeholder"
    @input="updateInput"
    :value="modelValue"
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
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
