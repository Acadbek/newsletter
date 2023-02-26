<template>
  <h1 class="text-red-400">Details</h1>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.slug);
    this.$store.dispatch("getArticleDetail", this.$route.params.slug);
  },
};
</script>
