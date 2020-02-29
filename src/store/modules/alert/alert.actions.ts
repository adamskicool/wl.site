import {ActionTree} from 'vuex';
import {IAlertState} from './alert.store';
import {IRootState} from '../../index';

export const actionShowMessage: string = 'showMessage';

export const actions: ActionTree<IAlertState, IRootState> = {
	[actionShowMessage]({commit, dispatch, state}, message: string) {
		state.message = message;
		setTimeout(() => {
			state.message = '';
		}, state.duration);
	}
};
