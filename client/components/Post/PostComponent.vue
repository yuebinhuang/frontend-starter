<script setup lang="ts">
const props = defineProps(["post"]);
</script>

<template>
  <article>
    <p class="author">{{ props.post.author }}</p>
    <p>{{ props.post.content }}</p>
    <p v-if="props.post.dateCreated !== props.post.dateUpdated">Edited on: {{ props.post.dateUpdated }}</p>
    <p v-else>Created on: {{ props.post.dateCreated }}</p>
  </article>
</template>

<style scoped>
article {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
}

p {
  margin: 0em;
}

.author {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
