<template>
  <div class="flex justify-center items-center">
    <form class="flex flex-col py-12">
      <Input type="text" placeholder="..." label="Email" />
      <Input type="password" placeholder="..." label="Password" />
      <Button @click="increment" class="mt-4">Login {{ counter }}</Button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    increment(e) {
      e.preventDefault();
      this.$store.commit("increment");
    },
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>
