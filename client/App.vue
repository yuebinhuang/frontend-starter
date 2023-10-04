<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { RouterLink, RouterView } from "vue-router";
const { isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <header>
    <nav>
      <div class="left">
        <img src="@/assets/images/logo.svg" />
        <RouterLink to="/" class="link">
          <h1 class="title">Social Media App</h1>
        </RouterLink>
      </div>
      <button v-if="isLoggedIn">
        <RouterLink to="/setting" class="link"> Settings </RouterLink>
      </button>
      <button v-else>
        <RouterLink to="/login" class="link"> Login </RouterLink>
      </button>
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
.link {
  font-size: large;
  color: black;
  text-decoration: none;
}
</style>
