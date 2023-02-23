<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div class="flex justify-center items-center">
    <form class="flex flex-col py-12">
      <Input v-model="username" type="text" placeholder="..." label="Name" />
      <Input v-model="email" type="text" placeholder="..." label="Email" />
      <Input
        v-model="password"
        type="password"
        placeholder="..."
        label="Password"
      />
      <Button @click="register" class="mt-4">Register</Button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
          console.log("user", user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
};
</script>
