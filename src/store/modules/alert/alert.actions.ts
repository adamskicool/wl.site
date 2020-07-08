import { ActionTree } from "vuex";
import { IAlertState } from "./alert.store";
import { IRootState } from "../../index";

import {
  mutationSetActiveTimeout,
  mutationSetMessage,
  mutationClearMessage,
  mutationSetShow
} from "./alert.mutations";

export const actionShowMessage: string = "showMessage";
export const actionSetActiveTimeout: string = "setActiveTimeout";

export const actions: ActionTree<IAlertState, IRootState> = {
  [actionShowMessage]({ commit, dispatch, state }, message: string) {
    if (state.message) {
      commit(mutationSetShow, false);
      commit(mutationClearMessage);
      setTimeout(() => {
        commit(mutationSetMessage, message);
        commit(mutationSetShow, true);
        dispatch(actionSetActiveTimeout);
      }, 300);
    } else {
      commit(mutationSetMessage, message);
      commit(mutationSetShow, true);
      dispatch(actionSetActiveTimeout);
    }
  },
  [actionSetActiveTimeout]({ commit, dispatch, state }) {
    if (state.activeTimeout) {
      clearTimeout(state.activeTimeout);
    }
    state.activeTimeout = setTimeout(() => {
      commit(mutationClearMessage);
      commit(mutationSetShow, false);
    }, state.duration);
  }
};
