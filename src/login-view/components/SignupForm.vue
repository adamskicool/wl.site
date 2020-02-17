<template>
  <md-card class="signup-form">
    <h2>Sign up</h2>
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
    <TextInput
      :label="'Repeat password'"
      :helperText="'Enter password again'"
      :type="EInputType.password"
      @change="handlePasswordAgainChange"
    />
    <Select
      :label="'Account type'"
      :items="accountTypes"
      @selected="handleSelected"
    />
    <div class="signup-button">
      <Button :label="'Sign up'" @click="handleClick" />
    </div>
  </md-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/core/Button.vue";
import TextInput from "@/components/core/TextInput.vue";
import Select from "@/components/core/Select.vue";
import { EInputType } from "@/types/enums/input-type";
import { ISignupDetails } from "@/login-view/types/interfaces/signup-details";
import { ISelectItem } from "@/types/interfaces/select-item";
import { EAccountType } from "@/login-view/types/enums/account-type";

@Component({
  components: {
    Button,
    TextInput,
    Select
  }
})
export default class SignupForm extends Vue {
  @Prop() accountTypes!: ISelectItem[];

  EInputType = EInputType;

  valueUsername: string = "";
  valuePassword: string = "";
  valuePasswordAgain: string = "";
  valueAccountType: EAccountType = EAccountType.none;

  handleUsernameChange(username: string) {
    this.valueUsername = username;
  }

  handlePasswordChange(password: string) {
    this.valuePassword = password;
  }

  handlePasswordAgainChange(password: string) {
    this.valuePasswordAgain = password;
  }

  handleSelected(accountType: EAccountType) {
    this.valueAccountType = accountType;
  }

  handleClick() {
    const signupDetails: ISignupDetails = {
      username: this.valueUsername,
      password: this.valuePassword,
      passwordAgain: this.valuePasswordAgain,
      accountType: this.valueAccountType
    };
    this.$emit("signup", signupDetails);
  }
}
</script>

<style lang="scss" scoped>
.signup-button {
  display: flex;
  justify-content: flex-end;
}
</style>
