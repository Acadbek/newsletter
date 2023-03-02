<template>
  <label class="mb-1" :for="label">{{ label }}</label>
  <textarea
    class="border-none w-[330px] border-2 mb-3 px-4 py-2 bg-black outline-none"
    maxlength="10000"
    :type="type"
    :id="label"
    :placeholder="placeholder"
    @input="updateInput"
    :value="modelValue"
  ></textarea>
</template>

<script>
export default {
  name: "Textarea",
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
