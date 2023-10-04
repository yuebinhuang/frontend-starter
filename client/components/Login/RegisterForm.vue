<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { createUser, loginUser, updateSession } = useUserStore();

const register = async (username: string, password: string) => {
  const userInfo = await createUser(username, password);
  if (userInfo) {
    const { username, password } = userInfo;
    await loginUser(username, password);
    await updateSession();
  }
};
</script>

<template>
  <form class="form" @submit.prevent="register(username, password)">
    <h3>Register User</h3>
    <label>Username:</label>
    <input type="text" v-model="username" />
    <br />
    <label>Password:</label>
    <input type="password" id="password" v-model="password" />
    <br />
    <button type="submit">Register</button>
  </form>
</template>
