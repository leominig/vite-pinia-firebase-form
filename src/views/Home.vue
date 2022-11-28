<template>
  <div class="container" style="text-align: center">
    <h1>Home</h1>
    <p>Your Email: {{ userStore.userData?.email }}</p>
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/users";
const userStore = useUserStore();
</script>

<style></style>
