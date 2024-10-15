import { createApp } from 'vue';
import ElementPlus, { ElCollapseTransition } from 'element-plus';
import App from './App.vue';
import 'virtual:uno.css';
import { setupRouter } from '../src/router';

import './index.css';
import 'element-plus/theme-chalk/index.css';

const setupApp = async () => {
	const app = createApp(App);

	// elementPlus 全局配置
	app.use(ElementPlus, {
		size: 'default',
		zIndex: 3000
	});

	// 按需导入 elementPlus 内置过渡动画
	app.component(ElCollapseTransition.name as string, ElCollapseTransition);

	setupRouter(app);
	app.mount('#app');
};

setupApp();
