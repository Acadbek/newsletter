<template>
  <nav class="flex justify-between container py-2 items-center border-b">
    <RouterLink tag="h1" :to="{ name: 'home' }" class="text-[35px]"
      >Asad</RouterLink
    >
    <template v-if="registeredUser">
      <RouterLink :to="{ name: 'home' }">Profile</RouterLink>
      <h1 class="bg-green-900 px-2">
        {{ currentUser?.username }}
      </h1>
      <Button @click="logout">Log out</Button>
    </template>
    <template v-if="anonymousUser">
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </li>
        <RouterLink :to="{ name: 'register' }">Register</RouterLink>
      </ul>
    </template>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { logo } from "../constants";
import { getterType } from "../modules/types";

export default {
  data() {
    return {
      logo,
    };
  },
  methods: {
    logout() {
      return this.$store.commit("logout");
    },
  },
  computed: {
    ...mapGetters({
      registeredUser: getterType.registeredUser,
      currentUser: getterType.currentUser,
      anonymousUser: getterType.isAnonymous,
    }),
  },
};
</script>
