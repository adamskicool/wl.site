import { EAccountType } from "../enums/account-type";

export interface ISignupDetails {
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
  accountType: EAccountType;
}
