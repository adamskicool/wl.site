import {IMuscleArea} from './muscle-area';

export interface IExercise {
	id: string;
	userId: string;
	name: string;
	type: string;
	muscleAreaId: string;
	muscleArea?: IMuscleArea;
}
