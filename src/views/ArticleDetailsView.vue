<template>
  <news-detail v-if="article" :article="article" />
  <loader v-else />
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getArticleDetail", this.$route.params.slug);
  },
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
  },
};
</script>
