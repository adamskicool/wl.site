import {ILoginDetails} from '@/login-view/types/interfaces/login-details';
import {ISignupDetails} from '@/login-view/types/interfaces/signup-details';

const axios = require('axios').default;

export class SessionService {
	constructor() {}

	async login(payload: ILoginDetails) {
		return axios({
			method: 'POST',
			url: 'http://localhost:5000/api/user/login',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(payload)
		});
	}

	async signUp(payload: ISignupDetails) {
		return axios({
			method: 'POST',
			url: 'http://localhost:5000/api/user/signup',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(payload)
		});
	}
}
