import { ActionTree } from "vuex";
import { ISessionState } from "./session.store";
import { IRootState } from "../../index";
import { ISignupDetails } from "@/login-view/types/interfaces/signup-details";
import { ILoginDetails } from "@/login-view/types/interfaces/login-details";

export const actionSignup = "signup";
export const actionLogin = "login";

export const actions: ActionTree<ISessionState, IRootState> = {
  async [actionSignup]({ dispatch, commit, state }, payload: ISignupDetails) {
    //TODO
  },

  async [actionLogin]({ dispatch, commit, state }, payload: ILoginDetails) {
    //TODO
  }
};
