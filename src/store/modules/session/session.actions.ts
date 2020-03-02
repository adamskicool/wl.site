import router from "@/router";
import { ActionTree } from "vuex";
import { ISessionState } from "./session.store";
import { IRootState } from "../../index";
import { ISignupDetails } from "@/login-view/types/interfaces/signup-details";
import { ILoginDetails } from "@/login-view/types/interfaces/login-details";
import { SessionService } from "./session.service";

import { IResponseLogin } from "@/store/types/response-login";
import { IResponseSignup } from "@/store/types/response-signup";

import { mutationSetToken } from "./session.mutations";

export const actionSignup: string = "signup";
export const actionSignupSuccess: string = "signupSuccess";
export const actionSignupFailed: string = "signupFailed";

export const actionLogin: string = "login";
export const actionLoginSuccess: string = "loginSuccess";
export const actionLoginFailed: string = "loginFailed";

export const actions: ActionTree<ISessionState, IRootState> = {
  async [actionSignup]({ dispatch, commit, state }, payload: ISignupDetails) {
    try {
      const res: IResponseSignup = await new SessionService().signUp(payload);
      dispatch(actionSignupSuccess, res);
    } catch (e) {
      dispatch(actionSignupFailed);
    }
  },
  async [actionSignupSuccess](
    { dispatch, commit, state },
    payload: IResponseSignup
  ) {
    commit(mutationSetToken, payload.data.token);
    dispatch(
      "alert/showMessage",
      `Successfully created user: ${payload.data.username}`,
      { root: true }
    );
    // TODO: router.push("/homepage");
  },
  async [actionSignupFailed]({ dispatch, commit, state }) {
    dispatch("alert/showMessage", "Could not sign up!", { root: true });
  },
  async [actionLogin]({ dispatch, commit, state }, payload: ILoginDetails) {
    try {
      const res: IResponseLogin = await new SessionService().login(payload);
      dispatch(actionLoginSuccess, res);
    } catch (e) {
      dispatch(actionLoginFailed);
    }
  },
  async [actionLoginSuccess](
    { dispatch, commit, state },
    payload: IResponseLogin
  ) {
    commit(mutationSetToken, payload.data.token);
    dispatch(
      "alert/showMessage",
      `Successfully logged in with user: ${payload.data.username}`,
      { root: true }
    );
    // TODO: router.push("/homepage");
  },
  async [actionLoginFailed]({ dispatch, commit, state }) {
    dispatch("alert/showMessage", "Could not log in!", { root: true });
  }
};
