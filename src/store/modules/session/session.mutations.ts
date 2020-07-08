import { MutationTree } from "vuex";
import { ISessionState } from "./session.store";

export const mutationSetToken: string =
  "setToken";

export const mutations: MutationTree<ISessionState> = {
  [mutationSetToken](
    state: ISessionState,
    token: string
  ) {
    state.token = token;
  },
};
