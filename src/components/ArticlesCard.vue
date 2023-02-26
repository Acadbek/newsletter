<template>
  <RouterLink :to="article.slug">
    <div class="card border-[#00bd7e] border-2 px-4 py-2">
      <h3 :to="article.slug" class="main-title !truncate">
        {{ article.title }}
      </h3>
      <p class="font-mono truncate">/{{ article.slug }}</p>
      <p class="mt-2">{{ body }}</p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    body() {
      return this.article.body.substring(0, 40) + "...";
    },
  },
};
</script>
