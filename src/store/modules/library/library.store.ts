import {Module} from 'vuex';
import {IRootState} from '../../index';
import {actions} from './library.actions';
// import {mutations} from './alert.mutations';
import {IWorkoutPresetDTO} from '../../entities/dto/workout-preset-dto';

export const namespace: string = 'library';

export interface ILibraryState {
	loadingWorkoutPresets: boolean;
	workoutPresets: IWorkoutPresetDTO[];
}

export const state: ILibraryState = {
	loadingWorkoutPresets: false,
	workoutPresets: [],
};

const namespaced: boolean = true;

export const library: Module<ILibraryState, IRootState> = {
	state,
	namespaced,
	actions,
	mutations: {},
	getters: {},
};
