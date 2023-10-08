<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

let username = ref("");
let password = ref("");

const { updateUser, updateSession } = useUserStore();

async function updateUsername() {
  await updateUser({ username: username.value });
  await updateSession();
  username.value = "";
}

async function updatePassword() {
  await updateUser({ password: password.value });
  await updateSession();
  password.value = "";
}
</script>

<template>
  <h2>Update user details</h2>

  <form @submit.prevent="updateUsername" class="column">
    <label>Change your username <input type="text" placeholder="New username" v-model="username" required /></label>
    <button type="submit">Update username</button>
  </form>

  <form @submit.prevent="updatePassword" class="column">
    <label>Change your password <input type="password" placeholder="New password" v-model="password" required /></label>
    <button type="submit">Update password</button>
  </form>
</template>
