<script setup lang="ts">
import { useToastStore } from "@/stores/toast";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from "vue-router";

const userStore = useUserStore();

const { isLoggedIn } = storeToRefs(userStore);
const { toast } = storeToRefs(useToastStore());

// Make sure to update the session before mounting the app in case the user is already logged in
onBeforeMount(async () => {
  try {
    await userStore.updateSession();
  } catch {
    // User is not logged in
  }
});
</script>

<template>
  <header>
    <nav>
      <div class="title">
        <img src="@/assets/images/logo.svg" />
        <RouterLink to="/">
          <h1>Social Media App</h1>
        </RouterLink>
      </div>
      <div class="right">
        <RouterLink v-if="isLoggedIn" to="/setting" class="button">Settings</RouterLink>
        <RouterLink v-else to="/login" class="button">Login/Register</RouterLink>
      </div>
    </nav>
    <article v-if="toast !== null" class="toast" :class="toast.style">
      <p>{{ toast.message }}</p>
    </article>
  </header>
  <RouterView />
</template>

<style scoped>
@import "./assets/toast.css";

nav {
  padding: 1em 2em;
  background-color: lightgray;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 2em;
  margin: 0;
}

img {
  height: 2em;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1em;
}

a {
  font-size: large;
  color: black;
  text-decoration: none;
}
</style>
