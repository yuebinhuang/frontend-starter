<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");

const { updateSession, updateUser } = useUserStore();

const updateUsername = async (newUsername: string) => {
  const newInfo = {
    update: {
      username: newUsername,
    },
  };
  await updateUser(newInfo);
  await updateSession();
  username.value = "";
};
</script>

<template>
  <form class="form" @submit.prevent="updateUsername(username)">
    <h3>Update Username</h3>
    <label>Username:</label>
    <input type="text" v-model="username" />
    <br />
    <button type="submit">Update Password</button>
  </form>
</template>

<style scoped>
.form {
  text-align: center;
}

.button {
  text-align: center;
}
</style>
