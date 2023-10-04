<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const currentRoute = useRoute();
const currentRouteName = computed(() => currentRoute.name);
const { isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <header>
    <nav>
      <div class="left">
        <img src="@/assets/images/logo.svg" />
        <RouterLink :to="{ name: 'Home' }">
          <h1 class="title">Social Media App</h1>
        </RouterLink>
      </div>
      <ul>
        <li>
          <RouterLink :to="{ name: 'Home' }" :class="{ underline: currentRouteName == 'Home' }"> Home </RouterLink>
        </li>
        <li v-if="isLoggedIn">
          <RouterLink :to="{ name: 'Settings' }" :class="{ underline: currentRouteName == 'Settings' }"> Settings </RouterLink>
        </li>
        <li v-else>
          <RouterLink :to="{ name: 'Login' }" :class="{ underline: currentRouteName == 'Login' }"> Login </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  padding: 1vw 2vw;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
}

.title {
  font-size: 32px;
  margin: 0 5px;
}

img {
  height: 34px;
}

.left {
  display: flex;
  align-items: normal;
}
a {
  font-size: large;
  color: black;
  text-decoration: none;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.underline {
  text-decoration: underline;
}
</style>
