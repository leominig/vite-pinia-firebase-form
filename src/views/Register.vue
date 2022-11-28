<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Register</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" @submit.prevent="handleSubmit">
              <h3 class="text-center text-info">Register</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label><br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-info mt-2"
                  value="submit"
                  :disabled="userStore.loadingUser"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useUserStore } from "../stores/users";
import { useRouter } from "vue-router";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = async () => {
  if (!email.value || !password.value > 3) {
    return alert("llena los campos");
  }
  await userStore.registerUser(email.value, password.value);

  console.log(password.value);
  console.log(email.value);
  console.log("procesando formulario");
};
</script>
