<template>
  <h1>Home</h1>
  <ul>
    <li v-for="item in data" :key="item.id">
      <!-- {{ item.title }} -->
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ data: (state) => state.articles.data }),
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
};
</script>
