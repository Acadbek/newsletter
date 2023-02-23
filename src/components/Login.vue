<template>
  <div class="flex justify-center items-center">
    <form class="flex flex-col py-12">
      <validation-error
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />
      <Input type="text" placeholder="..." label="Email" v-model="email" />
      <Input
        type="password"
        placeholder="..."
        label="Password"
        v-model="password"
      />
      <Button @click="login" class="mt-4">Login</Button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      this.$store
        .dispatch("login", data)
        .then((user) => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.error,
    }),
  },
};
</script>
