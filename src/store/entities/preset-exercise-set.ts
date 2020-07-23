import {IExercise} from './exercise';
import {EWeightGuide} from './types/weight-guide';

export interface IPresetExerciseSet {
	id: string;
	nextPresetExerciseId: string;
	presetId: string;
	exerciseId: string;
	exercise?: IExercise;
	reps: number;
	weightGuide: EWeightGuide;
	time: number;
}
