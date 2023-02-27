<template>
  <div v-if="article">
    <h1>{{ article }}</h1>
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
};
</script>
<style></style>
