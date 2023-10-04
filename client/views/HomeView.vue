<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h1>This is the home page!</h1>
    <h1 v-if="isLoggedIn">Welcome {{ currentUsername }}!</h1>
    <h1 v-else>Please login!</h1>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
