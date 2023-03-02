<template>
  <div v-if="article" class="h-screen">
    <div class="border flex items-center px-3 py-1 gap-2 my-4 ml-4">
      <img
        class="w-[35px] rounded-full"
        :src="article.author.image || nouser"
        :alt="article.author.username"
      />
      <h1>Author: {{ article.author.username }} -</h1>
      <i class="text-green-700 text-[14px]">{{ day }}/{{ month }}/{{ year }}</i>
    </div>
    <h3 class="text-[24px] mb-4 px-4 text-center">
      {{ article.description }}
    </h3>
    <p class="text-white px-4 py-4 border-dashed border">{{ article.body }}</p>
  </div>

</template>


<script>
import nouser from "@/assets/nouser.png";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    day() {
      return new Date(this.article.createdAt).getDate();
    },
    month() {
      return new Date(this.article.createdAt).getMonth();
    },
    year() {
      return new Date(this.article.createdAt).getFullYear();
    },
    nouser() {
      return nouser;
    },
  },
};
</script>
<style></style>
