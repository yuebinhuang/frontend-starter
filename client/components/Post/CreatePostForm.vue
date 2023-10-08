<script setup lang="ts">
import { ref } from "vue";

const content = ref("");
const emit = defineEmits(["refreshPosts"]);

const createPost = async (content: string) => {
  const response = await fetch("api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  });

  // Empty form and refresh posts.
  if (response.ok) {
    emit("refreshPosts");
    emptyForm();
  }
};

const emptyForm = () => {
  content.value = "";
};
</script>

<template>
  <form @submit.prevent="createPost(content)">
    <label for="content">Post Contents:</label>
    <textarea id="content" v-model="content" placeholder="Create a post!"> </textarea>
    <button type="submit">Create Post</button>
  </form>
</template>

<style scoped>
form {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
}

textarea {
  font-family: inherit;
  font-size: inherit;
  height: 6em;
  padding: 0.5em;
  border-radius: 4px;
  resize: none;
}
</style>
