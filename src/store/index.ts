import Vue from "vue";
import Vuex from "vuex";
import { session } from "./modules/session/session.store";

Vue.use(Vuex);

export interface IRootState {}

export const state: IRootState = {};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {
    session
  }
});
