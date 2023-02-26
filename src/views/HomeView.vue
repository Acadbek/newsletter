<template>
  <h1>Home</h1>
  <ul class="grid grid-cols-4 gap-4">
    <li v-for="article in data" :key="article.id">
      <articles-card :article="article" />
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import ArticlesCard from "../components/ArticlesCard.vue";
export default {
  components: { ArticlesCard },
  computed: {
    ...mapState({ data: (state) => state.articles.data }),
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
};
</script>
