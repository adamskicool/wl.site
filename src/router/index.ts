import Vue from 'vue';
import VueRouter, {Route} from 'vue-router';
import {SessionService} from '@/store/modules/session/session.service';
import {state} from '@/store/modules/session/session.store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/components',
		name: 'components',
		component: () => import('../views/ComponentOverview.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../view-login/LoginView.vue'),
	},
	{
		path: '/app',
		name: 'app',
		component: () => import('../view-application/ApplicationView.vue'),
		children: [
			{
				path: 'home',
				component: () => import('../view-application/view-home/HomeView.vue'),
			},
			{
				path: 'workout_selector',
				component: () =>
					import(
						'../view-application/view-workout-selector/WorkoutSelectorView.vue'
					),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

//TODO: Check with api if token is valid, if not... remove it before navigating to login view.
router.beforeEach((to: Route, from: Route, next: Function) => {
	const service: SessionService = new SessionService();
	const token: string = service.getTokenFromLocalStorage();
	if (token) {
		//set token in session store module
		state.token = token;
	} else if (!to.path.includes('login')) {
		router.push('/login');
	}
	next();
});

export default router;
