import {IWorkoutPreset} from '../../entities/workout-preset';
import {IMuscleArea} from '@/store/entities/muscle-area';
import {IExercise} from '@/store/entities/exercise';

const axios = require('axios').default;

export class LibraryService {
	private readonly token: string;

	constructor(token: string) {
		this.token = token;
	}

	async getAllMuscleAreas(): Promise<IMuscleArea[]> {
		return (
			await axios({
				method: 'GET',
				url: `http://localhost:5000/api/muscleAreas/all`,
				headers: {
					'Content-Type': 'application/json',
					Token: this.token,
				},
			})
		).data;
	}

	async getExercises(): Promise<IExercise[]> {
		return (
			await axios({
				method: 'GET',
				url: `http://localhost:5000/api/exercises/user`,
				headers: {
					'Content-Type': 'application/json',
					Token: this.token,
				},
			})
		).data;
	}

	async getWorkoutPresets(): Promise<IWorkoutPreset[]> {
		return (
			await axios({
				method: 'GET',
				url: `http://localhost:5000/api/workoutPresets/user`,
				headers: {
					'Content-Type': 'application/json',
					Token: this.token,
				},
			})
		).data;
	}
}
