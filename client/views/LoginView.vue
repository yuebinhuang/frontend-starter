<template>
  <h1>This is the login page!</h1>
  <RegisterForm />
  <LoginForm />
</template>

<script setup lang="ts">
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";
</script>

<style scoped>
h1 {
  text-align: center;
}

.form {
  text-align: center;
}
</style>
