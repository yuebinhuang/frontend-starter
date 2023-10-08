<script setup lang="ts">
import { ref } from "vue";
import { fetchy } from "../../utils/fetchy";

const props = defineProps(["post"]);
const content = ref(props.post.content);
const emit = defineEmits(["editPost", "refreshPosts"]);

const editPost = async (content: string) => {
  try {
    await fetchy(`api/posts/${props.post._id}`, "PATCH", { body: { update: { content: content } } });
  } catch (e) {
    return;
  }
  emit("editPost");
  emit("refreshPosts");
};
</script>

<template>
  <form @submit.prevent="editPost(content)">
    <p class="author">{{ props.post.author }}</p>
    <textarea id="content" v-model="content" placeholder="Create a post!"> </textarea>
    <p v-if="props.post.dateCreated !== props.post.dateUpdated">Edited on: {{ props.post.dateUpdated }}</p>
    <p v-else>Created on: {{ props.post.dateCreated }}</p>
    <menu>
      <li><button type="submit">Save</button></li>
      <li><button @click="emit('editPost')">Cancel</button></li>
    </menu>
  </form>
</template>

<style scoped>
form {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

textarea {
  font-family: inherit;
  font-size: inherit;
  height: 6em;
  border-radius: 4px;
  resize: none;
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
