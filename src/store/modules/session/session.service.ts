import {ILoginDetails} from '@/view-login/types/interfaces/login-details';
import {ISignupDetails} from '@/view-login/types/interfaces/signup-details';
import {IResponseLogin} from '@/store/types/response-login';
import {IResponseSignup} from '@/store/types/response-signup';

const axios = require('axios').default;

export class SessionService {
	async login(payload: ILoginDetails): Promise<IResponseLogin> {
		return axios({
			method: 'POST',
			url: 'http://localhost:5000/api/user/login',
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(payload),
		});
	}

	async signUp(payload: ISignupDetails): Promise<IResponseSignup> {
		return axios({
			method: 'POST',
			url: 'http://localhost:5000/api/user/signup',
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(payload),
		});
	}
}
