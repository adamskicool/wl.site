import {PresetExerciseSet} from '../preset-exercise-set';

export interface IWorkoutPresetDTO {
	id: string;
	userId: string;
	name: string;
	presetExerciseSets: PresetExerciseSet[];
}
