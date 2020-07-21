import {IWorkoutPresetDTO} from '../../entities/dto/workout-preset-dto';
import {session, ISessionState} from '@/store/modules/session/session.store';

const axios = require('axios').default;

export class LibraryService {
	private readonly token: string;

	constructor(token: string) {
		this.token = token;
	}

	async getWorkoutPresets(): Promise<IWorkoutPresetDTO[]> {
		return (
			await axios({
				method: 'GET',
				url: `http://localhost:5000/api/workoutPreset/user`,
				headers: {
					'Content-Type': 'application/json',
					Token: this.token,
				},
			})
		).data;
	}
}
