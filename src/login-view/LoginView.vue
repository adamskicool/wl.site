<template>
  <div class="login-view">
    <LoginForm @login="handleLogin" :login-types="loginTypes" />
    <SignupForm @signup="handleSignup" :login-types="loginTypes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LoginForm from "@/login-view/components/LoginForm.vue";
import SignupForm from "@/login-view/components/SignupForm.vue";
import { ILoginDetails } from "@/login-view/types/interfaces/login-details.ts";
import { EAccountType } from "@/login-view/types/enums/account-type";

@Component({
  components: {
    LoginForm,
    SignupForm
  }
})
export default class LoginView extends Vue {
  loginTypes: ISelectItem[] = [
    {
      id: 1,
      label: "Administrator",
      value: EAccountType.admin
    },
    {
      id: 2,
      label: "User",
      value: EAccountType.user
    }
  ];

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
.login-form,
.signup-form {
  width: 33%;
  max-width: 300px;
  height: auto;
  padding: 1rem;
  margin: 2rem;
}
</style>
