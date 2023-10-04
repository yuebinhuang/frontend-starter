<script setup lang="ts">
import PostComponent from "@/components/Post/PostComponent.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onBeforeMount, reactive, ref } from "vue";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());

const loaded = ref(false);
let posts: Array<Record<string, string>> = reactive([]);

async function getPosts(author?: string) {
  let url = "api/posts";
  if (author) {
    url = url + `?author=${author}`;
  }

  const response = await fetch(url);
  const result = await response.json();
  if (response.ok) {
    result.forEach(function (element: Record<string, string>) {
      element.dateCreated = new Date(element.dateCreated).toLocaleString();
      element.dateUpdated = new Date(element.dateUpdated).toLocaleString();
      posts.push(element);
    });
  }
}

onBeforeMount(async () => {
  await getPosts();
  loaded.value = true;
});
</script>

<template>
  <main>
    <h1>This is the home page!</h1>
    <h1 v-if="isLoggedIn">Welcome {{ currentUsername }}!</h1>
    <h1 v-else>Please login!</h1>
    <section v-if="loaded">
      <PostComponent v-for="post in posts" :key="post._id" :post="post" />
    </section>
    <p v-else>Loading...</p>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0 auto;
  max-width: 60em;
}
</style>
