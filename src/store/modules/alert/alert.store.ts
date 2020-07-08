import { Module } from "vuex";
import { IRootState } from "../../index";
import { actions } from "./alert.actions";
import { mutations } from "./alert.mutations";

export const namespace: string = "alert";

export interface IAlertState {
  message: string;
  duration: number;
  show: boolean;
  activeTimeout: any;
}

export const state: IAlertState = {
  message: "",
  duration: 4000,
  show: false,
  activeTimeout: null
};

const namespaced: boolean = true;

export const alert: Module<IAlertState, IRootState> = {
  state,
  namespaced,
  actions,
  mutations,
  getters: {}
};
