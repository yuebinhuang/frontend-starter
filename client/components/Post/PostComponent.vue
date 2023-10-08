<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const props = defineProps(["post"]);
const emit = defineEmits(["refreshPosts"]);
const { currentUsername } = storeToRefs(useUserStore());

const deletePost = async () => {
  const response = await fetch(`api/posts/${props.post._id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    emit("refreshPosts");
  }
};
</script>

<template>
  <article>
    <p class="author">{{ props.post.author }}</p>
    <p>{{ props.post.content }}</p>
    <p v-if="props.post.dateCreated !== props.post.dateUpdated">Edited on: {{ props.post.dateUpdated }}</p>
    <p v-else>Created on: {{ props.post.dateCreated }}</p>
    <menu v-if="props.post.author == currentUsername">
      <li><button>Edit</button></li>
      <li><button @click="deletePost">Delete</button></li>
    </menu>
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

menu {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 0;
}
</style>
