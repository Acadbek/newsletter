<template>
  <h1>NEWS</h1>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    v-if="loading"
  >
    <loader />
  </div>
  <ul v-else class="grid grid-cols-3 gap-4">
    <li v-for="article in data" :key="article.id">
      <news-card :article="article" />
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      data: (state) => state.articles.data,
      loading: (state) => state.articles.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
};
</script>
