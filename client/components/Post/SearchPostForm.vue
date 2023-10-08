<script setup lang="ts">
import { ref } from "vue";

const author = ref("");
const emit = defineEmits(["getPostsByAuthor"]);
</script>

<template>
  <form @submit.prevent="emit('getPostsByAuthor', author)">
    <label for="author">Search by author:</label>
    <input id="author" type="text" v-model="author" placeholder="Username" />
    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 0.5em;
  padding: 1em;
  align-items: center;
}
</style>
