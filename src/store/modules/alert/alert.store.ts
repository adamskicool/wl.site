import {Module} from 'vuex';
import {IRootState} from '../../index';
import {actions} from './alert.actions';
import {mutations} from './alert.mutations';

export const namespace = 'alert';

export interface IAlertState {
	message: string;
	duration: number;
}

export const state: IAlertState = {
	message: '',
	duration: 4000
};

const namespaced: boolean = true;

export const alert: Module<IAlertState, IRootState> = {
	state,
	namespaced,
	actions,
	mutations,
	getters: {}
};
