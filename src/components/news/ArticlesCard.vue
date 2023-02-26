<template>
  <div>
    <div class="card border-[#00bd7e] border-2 px-4 py-2">
      <RouterLink :to="`news/${article.slug}`" class="main-title !truncate">
        {{ title }}
      </RouterLink>
      <p class="font-mono truncate">/{{ article.slug }}</p>
      <p class="mt-2">{{ body }}</p>
    </div>
  </div>
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
    title() {
      return this.article.title.substring(0, 12) + "...";
    },
  },
};
</script>
