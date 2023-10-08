<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { createUser, loginUser, updateSession } = useUserStore();

async function register() {
  await createUser(username.value, password.value);
  await loginUser(username.value, password.value);
  void updateSession();
  void router.push({ name: "home" });
}
</script>

<template>
  <form class="form" @submit.prevent="register">
    <h3>Register User</h3>
    <label>Username: <input type="text" v-model.trim="username" required /> </label>
    <label>Password: <input type="password" id="password" v-model.trim="password" required /> </label>
    <button type="submit">Register</button>
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
