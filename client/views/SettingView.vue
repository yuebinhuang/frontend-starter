<script setup lang="ts">
import UpdatePasswordForm from "@/components/Setting/UpdatePasswordForm.vue";
import UpdateUsernameForm from "@/components/Setting/UpdateUsernameForm.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername } = storeToRefs(useUserStore());
const { logoutUser, deleteUser } = useUserStore();
</script>

<template>
  <h1>This is the settings page!</h1>
  <h1>Settings for {{ currentUsername }}</h1>
  <div class="button">
    <button @click="logoutUser">Logout</button>
  </div>
  <br />
  <div class="button">
    <button @click="deleteUser">Delete User</button>
  </div>
  <UpdateUsernameForm />
  <UpdatePasswordForm />
</template>

<style scoped>
h1 {
  text-align: center;
}

.form {
  text-align: center;
}

.button {
  text-align: center;
}
</style>
