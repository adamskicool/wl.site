import {IExercise} from './exercise';

export interface IPresetExerciseSet {
	id: string;
	nextPresetExerciseId: string;
	presetId: string;
	exerciseId: string;
	exercise?: IExercise;
	reps: number;
	weight: number;
	time: number;
}
