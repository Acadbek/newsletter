<template>
  <header class="container">
    <Navbar />
    <RouterView />
  </header>
</template>

<script>
import { Navbar } from "@/components";
import { RouterView } from "vue-router";
export default {
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch("getCurrentUser");
  },
};
</script>
