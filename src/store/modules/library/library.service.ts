import {IWorkoutPresetDTO} from './types/workout-preset-DTO';

const axios = require('axios').default;

export class LibraryService {
	async getWorkoutPresets(userId: string): Promise<IWorkoutPresetDTO> {
		return {} as IWorkoutPresetDTO;
	}
}
