<template>
  <div>
    <div class="card border-[#00bd7e] border-2 px-4 py-2">
      <RouterLink :to="`news/${article.slug}`" class="main-title !truncate">
        {{ title }}
      </RouterLink>
      <p class="font-mono truncate">/{{ article.slug }}</p>
      <p class="mt-2">{{ body }}</p>
      <div class="flex justify-between pt-4">
        <div v-if="user?.username === article.author.username">
          <Button :disabled="isLoading" @click="deletePost">Delete</Button>
        </div>
        <time
          class="text-gray-500 text-[14px] p-1"
          :datetime="`${day}-${month}-${year}`"
        >
          {{ new Date(article.createdAt).toLocaleDateString("us") }}</time
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deletePost() {
      this.$store
        .dispatch("delete", this.article.slug)
        .then(() => this.$store.dispatch("getArticles"));
      //
    },
  },

  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      isLoading: (state) => state.controls.isLoading,
    }),
    body() {
      return this.article.body.substring(0, 40) + "...";
    },
    title() {
      return this.article.title.substring(0, 12) + "...";
    },
    day() {
      return new Date(this.article.createdAt).getDay();
    },
    month() {
      return new Date(this.article.createdAt).getMonth();
    },
    year() {
      return new Date(this.article.createdAt).getFullYear();
    },
    datatime() {
      // console.log(day.value);
      // return ;
    },
  },
};
</script>
