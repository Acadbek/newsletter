<template>
  <nav class="flex justify-between container py-2 items-center border-b">
    <RouterLink tag="h1" :to="{ name: 'home' }" class="text-[35px]"
      >Asad</RouterLink
    >
    <template v-if="isLoggedIn">Blog </template>
    <template v-else>
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </li>
        <RouterLink :to="{ name: 'register' }">Register</RouterLink>
      </ul>
    </template>
    {{ user?.username }}
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { logo } from "../constants";
export default {
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
};
</script>
