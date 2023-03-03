<template>
  <div class="h-screen">
    <!-- <h2 class="text-center text-[24px] mt-4 font-bold">Edit</h2>
    <form
      @submit.prevent
      class="flex py-8 flex-col justify-center items-center"
    >
      <Input type="text" label="Title" v-model="title" />
      <Textarea type="text" label="Description" v-model="description" />
      <Textarea type="text" label="Comment" v-model="body" />
      <Button @click.prevent="edit">Done</Button>
    </form> -->
    
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  methods: {
    edit() {},
  },
};
</script>
