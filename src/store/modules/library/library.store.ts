import {Module} from 'vuex';
import {IRootState} from '../../index';
import {actions} from './library.actions';
import {getters} from './library.getters';
// import {mutations} from './alert.mutations';
import {IMuscleArea} from '@/store/entities/muscle-area';
import {IExercise} from '@/store/entities/exercise';
import {IWorkoutPreset} from '../../entities/workout-preset';

export const namespace: string = 'library';

export interface ILibraryState {
	muscleAreas: IMuscleArea[];
	exercises: IExercise[];
	workoutPresets: IWorkoutPreset[];
	loadingMuscleAreas: boolean;
	loadingExercises: boolean;
	loadingWorkoutPresets: boolean;
}

export const state: ILibraryState = {
	muscleAreas: [],
	exercises: [],
	workoutPresets: [],
	loadingMuscleAreas: false,
	loadingExercises: false,
	loadingWorkoutPresets: false,
};

const namespaced: boolean = true;

export const library: Module<ILibraryState, IRootState> = {
	state,
	namespaced,
	actions,
	mutations: {},
	getters,
};
