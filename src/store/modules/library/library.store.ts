import {Module} from 'vuex';
import {IRootState} from '../../index';
import {actions} from './library.actions';
// import {mutations} from './alert.mutations';
import {IWorkoutPresetDTO} from './types/workout-preset-DTO';

export const namespace: string = 'library';

export interface ILibraryState {
	loadingWorkoutPresets: boolean;
	workoutPresets: any[];
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
