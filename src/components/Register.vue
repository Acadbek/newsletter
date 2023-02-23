<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div class="flex justify-center items-center">
    <form class="flex flex-col py-12">
      <validation-error
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />
      <Input type="text" placeholder="..." label="Name" v-model="username" />
      <Input type="text" placeholder="..." label="Email" v-model="email" />
      <Input
        type="password"
        placeholder="..."
        label="Password"
        v-model="password"
      />
      <Button @click="register" class="mt-4">Register</Button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  updated() {
    console.log(this.validationErrors, "asdasd");
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.error,
    }),
    // isLoading() {
    //   return this.$store.state.auth.isLoading;
    // },
    // validationErrors() {
    //   return this.$store.state.auth.error;
    // },
  },
};
</script>
