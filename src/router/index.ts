import type { App } from 'vue';
import { close, start } from '../utils/nprogress';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import LoginRouter from './modules/login';
import TestRouter from './modules/test';

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

// 路由前置后卫
router.beforeEach((to, _, next) => {
	// 开启进度条动画
	start();
	if (to.path !== '/login') {
		next({ path: 'login' });
		return;
	}
	next();
});

// 路由后置后卫
router.afterEach(() => {
	// 关闭进度条动画
	close();
});

// 初始化路由表
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
}

export default router;

export const setupRouter = (app: App<Element>) => {
	app.use(router);
};
