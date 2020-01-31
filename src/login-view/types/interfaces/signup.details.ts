import { EAccountType } from "../enums/account-type";

export interface ILoginDetails {
  username: string;
  password: string;
  passwordAgain: string;
  loginType: EAccountType;
}
