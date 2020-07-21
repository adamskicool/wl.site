import {ActionTree} from 'vuex';
import {ILibraryState} from './library.store';
import {IRootState} from '../../index';
import {LibraryService} from './library.service';

export const actionLoadWorkoutPresets: string = 'loadWorkoutPresets';

export const actions: ActionTree<ILibraryState, IRootState> = {
	async [actionLoadWorkoutPresets]({
		state,
		rootState,
	}: {
		state: ILibraryState;
		rootState: any;
	}) {
		state.workoutPresets = await new LibraryService(
			rootState.session.token
		).getWorkoutPresets();
	},
};
