<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { loginUser, updateSession } = useUserStore();

const login = async (inputUsername: string, inputPassword: string) => {
  await loginUser(inputUsername, inputPassword);
  await updateSession();
  username.value = "";
  password.value = "";
};
</script>

<template>
  <form class="form" @submit.prevent="login(username, password)">
    <h3>Login</h3>
    <label>Username:</label>
    <input type="text" v-model="username" />
    <br />
    <label>Password:</label>
    <input type="password" v-model="password" />
    <br />
    <button type="submit">Login</button>
  </form>
</template>
