<template>
  <div class="h-screen">
    <h2 class="text-center text-[24px] mt-4 font-bold">Create Post</h2>
    <form class="flex py-8 flex-col justify-center items-center">
      <Input v-model="title" type="text" label="Title" />
      <Textarea v-model="description" type="text" label="Description" />
      <Textarea v-model="body" type="text" label="Comment" />
      <Button @click.prevent="createPostHandler">Create Post</Button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    createPostHandler() {
      const data = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };
      this.$store
        .dispatch("postData", data)
        .then(() => this.$router.push("/news"));
    },
  },
};
</script>
