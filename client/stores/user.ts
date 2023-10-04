import router from "@/router";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const currentUsername = ref("");

    const isLoggedIn = computed(() => currentUsername.value !== "");

    const createUser = async (username: string, password: string) => {
      const response = await fetch("api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      if (response.ok) {
        const username: string = result.user.username;
        const password: string = result.user.password;

        await router.push({ name: "Home" });

        return { username, password };
      }
    };

    const loginUser = async (username: string, password: string) => {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      // console.log(response);
      const result = await response.json();
      // console.log(result);

      await router.push({ name: "Home" });
    };

    const updateSession = async () => {
      const response = await fetch("api/session");
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      if (response.ok) {
        currentUsername.value = result.username;
      }
    };

    const logoutUser = async () => {
      const response = await fetch("api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response);
      // const result = await response.json();
      // console.log(result);
      currentUsername.value = "";

      await router.push({ name: "Login" });
    };

    return { currentUsername, isLoggedIn, createUser, loginUser, updateSession, logoutUser };
  },
  { persist: true },
);
