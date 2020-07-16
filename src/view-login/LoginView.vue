<template>
  <div class="login-view">
    <LoginForm @login="handleLogin" :account-types="accountTypes" />
    <SignupForm @signup="handleSignup" :account-types="accountTypes" />
  </div>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import {
  actionLogin,
  actionSignup
} from "@/store/modules/session/session.actions";
import { namespace as sessionNamespace } from "@/store/modules/session/session.store";

import { Component, Vue, Prop } from "vue-property-decorator";
import LoginForm from "@/view-login/components/LoginForm.vue";
import SignupForm from "@/view-login/components/SignupForm.vue";
import { ILoginDetails } from "@/view-login/types/interfaces/login-details";
import { ISignupDetails } from "@/view-login/types/interfaces/signup-details";
import { EAccountType } from "@/view-login/types/enums/account-type";
import { ISelectItem } from "@/types/interfaces/select-item";

@Component({
  components: {
    LoginForm,
    SignupForm
  }
})
export default class LoginView extends Vue {
  @Action(actionSignup, {
    namespace: sessionNamespace
  })
  actionSignup: any;
  @Action(actionLogin, {
    namespace: sessionNamespace
  })
  actionLogin: any;

  accountTypes: ISelectItem[] = [
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
    this.actionLogin(loginDetails);
  }

  handleSignup(signupDetails: ISignupDetails) {
    this.actionSignup(signupDetails);
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
