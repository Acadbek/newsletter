<template>
  <edit-post-component
    :body="'body'"
    :description="'description'"
    :title="'askdjnasdjn'"
  />
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
  },
  mounted() {
    this.$store.dispatch("getArticleDetail", this.$route.params.slug);
  },
};
</script>
