<template>
  <nav class="flex justify-between container py-2 items-center border-b">
    <RouterLink tag="h1" :to="{ name: 'home' }" class="text-[35px]"
      >Asad</RouterLink
    >
    <ul class="flex items-center gap-4">
      <li>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
      </li>
      <RouterLink :to="{ name: 'register' }">Register</RouterLink>
    </ul>
  </nav>
</template>

<script>
import { logo } from "../constants";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>
