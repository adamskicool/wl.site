import {ActionTree, Dispatch} from 'vuex';
import {ILibraryState} from './library.store';
import {IRootState} from '../../index';
import {LibraryService} from './library.service';

export const actionLoadLibrary: string = 'loadLibrary';

const actionLoadMuscleAreas: string = 'loadMuscleAreas';
const actionLoadMuscleAreasSuccess: string = 'loadMuscleAreasSuccess';
const actionLoadMuscleAreasFail: string = 'loadMuscleAreasFail';

const actionLoadExercises: string = 'loadExercises';
const actionLoadExercisesSuccess: string = 'loadExercisesSuccess';
const actionLoadExercisesFail: string = 'loadExercisesFail';

const actionLoadWorkoutPresets: string = 'loadWorkoutPresets';
const actionLoadWorkoutPresetsSuccess: string = 'loadWorkoutPresetsSuccess';
const actionLoadWorkoutPresetsFail: string = 'loadWorkoutPresetsFail';

export const actions: ActionTree<ILibraryState, IRootState> = {
	async [actionLoadLibrary]({
		dispatch,
		rootState,
	}: {
		dispatch: Dispatch;
		rootState: any;
	}) {
		const token: string = rootState.session.token;
		dispatch(actionLoadMuscleAreas, token);
		dispatch(actionLoadExercises, token);
		dispatch(actionLoadWorkoutPresets, token);
	},
	async [actionLoadMuscleAreas]({state, dispatch}, token: string) {
		state.loadingMuscleAreas = true;
		try {
			state.muscleAreas = await new LibraryService(token).getAllMuscleAreas();
			dispatch(actionLoadMuscleAreasSuccess);
		} catch (error) {
			dispatch(actionLoadMuscleAreasFail);
		}
	},
	async [actionLoadMuscleAreasSuccess]({state}) {
		state.loadingMuscleAreas = false;
	},
	async [actionLoadMuscleAreasFail]({state}) {
		state.loadingMuscleAreas = false;
	},
	async [actionLoadExercises]({state, dispatch}, token: string) {
		state.loadingExercises = true;
		try {
			state.exercises = await new LibraryService(token).getExercises();
			dispatch(actionLoadExercisesSuccess);
		} catch (error) {
			dispatch(actionLoadExercisesFail);
		}
	},
	async [actionLoadExercisesSuccess]({state}) {
		state.loadingExercises = false;
	},
	async [actionLoadExercisesFail]({state}) {
		state.loadingExercises = false;
	},
	async [actionLoadWorkoutPresets]({state, dispatch}, token: string) {
		state.loadingWorkoutPresets = true;
		try {
			state.workoutPresets = await new LibraryService(
				token
			).getWorkoutPresets();
			dispatch(actionLoadWorkoutPresetsSuccess);
		} catch (error) {
			dispatch(actionLoadWorkoutPresetsFail);
		}
	},
	async [actionLoadWorkoutPresetsSuccess]({state}) {
		state.loadingWorkoutPresets = false;
	},
	async [actionLoadWorkoutPresetsFail]({state}) {
		state.loadingWorkoutPresets = false;
	},
};
