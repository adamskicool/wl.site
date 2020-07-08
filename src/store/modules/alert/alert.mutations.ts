import { MutationTree } from "vuex";
import { IAlertState } from "./alert.store";

export const mutationSetMessage: string = "setMessage";
export const mutationSetShow: string = "setShow";
export const mutationSetActiveTimeout: string = "setActiveTimeout";
export const mutationClearMessage: string = "clearMessage";

export const mutations: MutationTree<IAlertState> = {
  [mutationSetMessage](state, message: string) {
    state.message = message;
  },
  [mutationClearMessage](state) {
    state.message = "";
  },
  [mutationSetShow](state, show: boolean) {
    state.show = show;
  },
  [mutationSetActiveTimeout](state, activeTimeout: any) {
    state.activeTimeout = activeTimeout;
  }
};
