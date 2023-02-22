<template>
  <div class="flex justify-center items-center">
    <form class="flex flex-col py-12">
      <Input type="text" placeholder="..." label="Name" />
      <Input type="text" placeholder="..." label="Email" />
      <Input type="password" placeholder="..." label="Password" />
      <Button class="mt-4">Register</Button>
    </form>
    <button @click="changeState">change state</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeState() {
      this.$store.dispatch("register");
    },
  },
};
</script>
