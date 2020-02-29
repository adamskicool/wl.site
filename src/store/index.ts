import Vue from 'vue';
import Vuex from 'vuex';
import {alert} from './modules/alert/alert.store';
import {session} from './modules/session/session.store';

Vue.use(Vuex);

export interface IRootState {}

export const state: IRootState = {};

export default new Vuex.Store({
	state,
	mutations: {},
	actions: {},
	modules: {
		alert,
		session
	}
});
