import { ELoginType } from "../enums/login-type";

export interface ILoginDetails {
  username: string;
  password: string;
  loginType: ELoginType;
}
