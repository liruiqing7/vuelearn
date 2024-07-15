import type { App } from 'vue';
import LoginRouter from './modules/login';
import TestRouter from './modules/test';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const publicRoutes: Array<RouteRecordRaw> = [
	...LoginRouter,
	...TestRouter,
	{
		path: '/home',
		name: 'homeIndex',
		component: () => import('../views/home/index.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
});

export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
}

export const setupRouter = (app: App<Element>) => {
	app.use(router);
};
