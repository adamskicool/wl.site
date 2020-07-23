import {ILibraryState} from './library.store';
import {GetterTree} from 'vuex';
import {IRootState} from '@/store';
import {IWorkoutPreset} from '@/store/entities/workout-preset';
import {IPresetExerciseSet} from '@/store/entities/preset-exercise-set';
import {IExercise} from '@/store/entities/exercise';
import {IMuscleArea} from '@/store/entities/muscle-area';

export const getterWorkoutPresets: string = 'workoutPresets';

export const getters: GetterTree<ILibraryState, IRootState> = {
	[getterWorkoutPresets](state: ILibraryState): IWorkoutPreset[] {
		return state.workoutPresets.map((preset: IWorkoutPreset) => {
			const sets = preset.presetExerciseSets.map((set: IPresetExerciseSet) => {
				//get the exercise for the set.
				let exercise: IExercise | undefined = state.exercises.find(
					(exercise: IExercise) => exercise.id === set.exerciseId
				);
				//get the muscleArea for the exercise
				const muscleArea: IMuscleArea | undefined = state.muscleAreas.find(
					(muscleArea: IMuscleArea) =>
						muscleArea.id === (exercise ? exercise.muscleAreaId : null)
				);
				if (exercise) {
					exercise.muscleArea = muscleArea;
				}
				return {...set, exercise};
			});

			return {...preset, presetExerciseSets: sets};
		});
	},
};
