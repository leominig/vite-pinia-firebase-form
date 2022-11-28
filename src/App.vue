<template>
  <nav v-if="!userStore.loadingSession" class="m-2">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link to="/" class="nav-link active" v-if="userStore.userData"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link" v-if="!userStore.userData"
          >Login</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/register" class="nav-link" v-if="!userStore.userData"
          >Register</router-link
        >
      </li>
      <li class="nav-item">
        <button
          class="btn btn-primary"
          @click.prevent="userStore.logoutUser"
          v-if="userStore.userData"
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
  <div v-else>loading user...</div>
  <router-view />
</template>
<script setup>
import { useUserStore } from "./stores/users";

const userStore = useUserStore();
</script>

<style></style>
