import {IRouterNav} from '@/types/interfaces/router-nav';

export const topBarOptions: IRouterNav[] = [
	{
		name: 'home',
		path: '/app/home',
	},
	{
		name: 'train',
		path: '/app/workout_selector',
	},
	{
		name: 'create-workout',
		path: '/app/workout_creator',
	},
];
