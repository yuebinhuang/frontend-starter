<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { loginUser, updateSession } = useUserStore();

async function login() {
  await loginUser(username.value, password.value);
  void updateSession();
  void router.push({ name: "home" });
}
</script>

<template>
  <form class="form" @submit.prevent="login">
    <h3>Login</h3>
    <label>Username: <input v-model.trim="username" required /> </label>
    <label>Password: <input type="password" v-model.trim="password" required /> </label>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
h3 {
  margin: 0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
</style>
