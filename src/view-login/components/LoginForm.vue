<template>
  <md-card class="login-form">
    <h2>Log in</h2>
    <TextInput
      :label="'Username'"
      :helperText="'Enter username'"
      @change="handleUsernameChange"
    />
    <TextInput
      :label="'Password'"
      :helperText="'Enter password'"
      :type="EInputType.password"
      @change="handlePasswordChange"
    />
    <Select
      :label="'Account type'"
      :items="accountTypes"
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
import { ILoginDetails } from "@/view-login/types/interfaces/login-details";
import { ISelectItem } from "@/types/interfaces/select-item";
import { EAccountType } from "@/view-login/types/enums/account-type";

@Component({
  components: {
    Button,
    TextInput,
    Select
  }
})
export default class LoginForm extends Vue {
  @Prop() accountTypes!: ISelectItem[];

  EInputType = EInputType;

  valueUsername: string = "";
  valuePassword: string = "";
  valueAccountType: EAccountType = EAccountType.none;

  handleUsernameChange(username: string) {
    this.valueUsername = username;
  }

  handlePasswordChange(password: string) {
    this.valuePassword = password;
  }

  handleSelected(loginType: EAccountType) {
    this.valueAccountType = loginType;
  }

  handleClick() {
    const loginDetails: ILoginDetails = {
      username: this.valueUsername,
      password: this.valuePassword,
      accountType: this.valueAccountType
    };
    this.$emit("login", loginDetails);
  }
}
</script>

<style lang="scss" scoped>
.login-button {
  display: flex;
  justify-content: flex-end;
}
</style>
