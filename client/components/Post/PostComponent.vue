<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { fetchy } from "@/utils/fetchy";
import { storeToRefs } from "pinia";
const props = defineProps(["post"]);
const emit = defineEmits(["editPost", "refreshPosts"]);
const { currentUsername } = storeToRefs(useUserStore());

const deletePost = async () => {
  try {
    await fetchy(`api/posts/${props.post._id}`, "DELETE");
  } catch {
    return;
  }
  emit("refreshPosts");
};
</script>

<template>
  <p class="author">{{ props.post.author }}</p>
  <p>{{ props.post.content }}</p>
  <menu v-if="props.post.author == currentUsername">
    <li><button class="btn-small pure-button" @click="emit('editPost', props.post._id)">Edit</button></li>
    <li><button class="button-error btn-small pure-button" @click="deletePost">Delete</button></li>
  </menu>
  <article class="timestamp">
    <p v-if="props.post.dateCreated !== props.post.dateUpdated">Edited on: {{ props.post.dateUpdated }}</p>
    <p v-else>Created on: {{ props.post.dateCreated }}</p>
  </article>
</template>

<style scoped>
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

.timestamp {
  display: flex;
  justify-content: flex-end;
  font-style: italic;
  font-size: 0.9em;
}
</style>
