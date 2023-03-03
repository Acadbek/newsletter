<template>
  <div>
    <div
      class="card flex flex-col justify-between border-[#00bd7e] h-[200px] border-2 px-4 py-2"
    >
      <div>
        <RouterLink :to="`news/${article.slug}`" class="main-title !truncate">
          {{ title }}
        </RouterLink>
        <p class="font-mono truncate">/{{ article.slug }}</p>
        <p class="mt-2">{{ body }}</p>
      </div>
      <div class="flex justify-between pt-4">
        <div v-if="user?.username === article.author.username">
          <Button @click="deletePost" :disabled="isLoading">Delete</Button>
          <Button @click="edit" class="ml-2" :disabled="isLoading">Edit</Button>
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
    },
    edit() {
      return this.$router.push(`edit-post/${this.article.slug}`);
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
