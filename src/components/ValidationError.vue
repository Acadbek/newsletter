<template>
  <div class="flex justify-center items-center">
    <ul class="text-red-700 font-bold">
      <li class="mb-2" v-for="errorMessage in errorMessages" :key="errorMessage">
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const msg = this.validationErrors[name].join(", ");
        return `${name} ${msg}`;
      });
    },
  },
};
</script>
