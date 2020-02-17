import { Module } from "vuex";
import { IRootState } from "../../index";

export const namespace = "session";

export interface ISessionState {
  token: string;
}

export const state: ISessionState = {
  token: ""
};

const namespaced: boolean = true;

export const session: Module<ISessionState, IRootState> = {
  state,
  namespaced,
  actions: {},
  mutations: {},
  getters: {}
};
