import {ActionTree} from 'vuex';
import {ILibraryState} from './library.store';
import {IRootState} from '../../index';

export const actionLoadWorkoutPresets: string = 'loadWorkoutPresets';

export const actions: ActionTree<ILibraryState, IRootState> = {
	[actionLoadWorkoutPresets]({commit, dispatch, state}) {},
};
