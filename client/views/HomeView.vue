<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main class="column">
    <h1>Home Page</h1>
    <section>
      <h2 v-if="isLoggedIn">Welcome {{ currentUsername }}!</h2>
      <h2 v-else>Please login!</h2>
    </section>
  </main>
</template>
