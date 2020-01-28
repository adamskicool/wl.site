<template>
  <md-card class="login-form">
    <TextInput
      :label="'Username'"
      :helperText="'Enter username here'"
      @change="handleUsernameChange"
    />
    <TextInput
      :label="'Password'"
      :helperText="'Enter password here'"
      :type="EInputType.password"
      @change="handlePasswordChange"
    />
    <Select
      :label="'Login type'"
      :items="loginType"
      @selected="handleSelected"
    />
    <div class="login-button">
      <Button :label="'Log in'" @click="handleClick" />
    </div>
  </md-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/core/Button.vue";
import TextInput from "@/components/core/TextInput.vue";
import Select from "@/components/core/Select.vue";
import { EInputType } from "@/types/enums/input-type";
import { ILoginDetails } from "@/types/interfaces/login-details";
import { ISelectItem } from "@/types/interfaces/select-item";
import { ELoginType } from "@/types/enums/login-type";

@Component({
  components: {
    Button,
    TextInput,
    Select
  }
})
export default class LoginForm extends Vue {
  EInputType = EInputType;

  valueUsername = "";
  valuePassword: string = "";
  valueLoginType: ELoginType = ELoginType.none;
  loginType: ISelectItem[] = [
    {
      id: 1,
      label: "Administrator",
      value: ELoginType.admin
    },
    {
      id: 2,
      label: "User",
      value: ELoginType.user
    }
  ];

  handleUsernameChange(username: string) {
    this.valueUsername = username;
  }

  handlePasswordChange(password: string) {
    this.valuePassword = password;
  }

  handleSelected(loginType: ELoginType) {
    this.valueLoginType = loginType;
  }

  handleClick() {
    const loginDetails: ILoginDetails = {
      username: this.valueUsername,
      password: this.valuePassword,
      loginType: this.valueLoginType
    };
    this.$emit("login", loginDetails);
  }
}
</script>

<style lang="scss">
.login-form {
  width: 33%;
  height: auto;
  padding: 1rem;

  .login-button {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
