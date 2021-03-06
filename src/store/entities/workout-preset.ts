import {IPresetExerciseSet} from './preset-exercise-set';

export interface IWorkoutPreset {
	id: string;
	userId: string;
	name: string;
	description: string;
	presetExerciseSets: IPresetExerciseSet[];
}
