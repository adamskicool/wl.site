<template>
  <div class="login-view">
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LoginForm from "@/login-view/components/LoginForm.vue";
import { ILoginDetails } from "@/types/interfaces/login-details.ts";

@Component({
  components: {
    LoginForm
  }
})
export default class LoginView extends Vue {
  handleLogin(loginDetails: ILoginDetails) {
    //TODO: use some store (maybe user store) to login (and recieve JWT)
  }
}
</script>

<style lang="scss">
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
