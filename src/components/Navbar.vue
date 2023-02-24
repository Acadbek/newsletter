<template>
  <nav class="flex px-2 justify-between container py-2 items-center border-b">
    <RouterLink tag="h1" :to="{ name: 'home' }" class="text-[35px]"
      >Asad</RouterLink
    >
    <template v-if="registeredUser">
      <RouterLink :to="{ name: 'home' }">Profile</RouterLink>

      <Button @click="logout">Log out</Button>
    </template>
    <template v-if="anonymousUser">
      <ul class="flex items-center gap-4">
        <li>
          <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </li>
      </ul>
    </template>
  </nav>
  <div>
    <h1 class="bg-green-900 px-2">Welcome: {{ currentUser?.username }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
