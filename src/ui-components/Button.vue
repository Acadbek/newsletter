<template>
  <button
    :class="{ 'border-[#035036]': isDisabled }"
    :disabled="isDisabled"
    class="border-2 border-[#00bd7e] px-2 py-1 hover:border-[#035036]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {
    isDisabled() {
      return this.$store.state.auth.isLoading;
    },
  },
};
</script>
