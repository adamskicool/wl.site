import { EAccountType } from "../enums/account-type";

export interface ISignupDetails {
  username: string;
  password: string;
  passwordAgain: string;
  accountType: EAccountType;
}
