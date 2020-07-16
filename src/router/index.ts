import Vue from 'vue';
import VueRouter from 'vue-router';

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
				path: 'new_workout',
				component: () =>
					import('../view-application/view-new-workout/NewWorkoutView.vue'),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
