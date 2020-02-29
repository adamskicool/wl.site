import {ActionTree} from 'vuex';
import {ISessionState} from './session.store';
import {IRootState} from '../../index';
import {ISignupDetails} from '@/login-view/types/interfaces/signup-details';
import {ILoginDetails} from '@/login-view/types/interfaces/login-details';
import {SessionService} from './session.service';

import {mutationSetToken} from './session.mutations';

export const actionSignup: string = 'signup';
export const actionSignupSuccess: string = 'signupSuccess';
export const actionSignupFailed: string = 'signupFailed';

export const actionLogin: string = 'login';
export const actionLoginSuccess: string = 'loginSuccess';
export const actionLoginFailed: string = 'loginFailed';

export const actions: ActionTree<ISessionState, IRootState> = {
	async [actionSignup]({dispatch, commit, state}, payload: ISignupDetails) {
		try {
			const res = await new SessionService().signUp(payload);
		} catch (e) {
			dispatch(actionSignupFailed);
		}
	},
	async [actionSignupSuccess]({dispatch, commit, state}) {},
	async [actionSignupFailed]({dispatch, commit, state}) {
		dispatch('alert/showMessage', 'Could not sign up!', {root: true});
	},
	async [actionLogin]({dispatch, commit, state}, payload: ILoginDetails) {
		try {
			const res = await new SessionService().login(payload);
			console.log(res);
			dispatch(actionLoginSuccess, res.data.token);
		} catch (e) {
			dispatch(actionLoginFailed);
		}
	},
	async [actionLoginSuccess]({dispatch, commit, state}, token: string) {
		commit(mutationSetToken, token);
	},
	async [actionLoginFailed]({dispatch, commit, state}) {
		dispatch('alert/showMessage', 'Could not log in!', {root: true});
	}
};
