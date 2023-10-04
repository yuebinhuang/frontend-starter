<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const password = ref("");

const { updateSession, updateUser } = useUserStore();

const updatePassword = async (newPassword: string) => {
  const newInfo = {
    update: {
      password: newPassword,
    },
  };
  await updateUser(newInfo);
  await updateSession();
  password.value = "";
};
</script>

<template>
  <form class="form" @submit.prevent="updatePassword(password)">
    <h3>Update Password</h3>
    <label>Update Password:</label>
    <input type="password" v-model="password" />
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
