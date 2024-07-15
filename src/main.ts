import { createApp } from 'vue';
import ElementPlus, { ElCollapseTransition } from 'element-plus';
import App from './App.vue';
import { setupRouter } from '../src/router';

import './style.css';
import 'element-plus/theme-chalk/index.css';

const setupApp = async () => {
	const app = createApp(App);

	// elementPlus 全局配置
	app.use(ElementPlus, {
		size: 'default',
		zIndex: 3000
	});

	// 按需导入 elementPlus 内置过渡动画
	app.component(ElCollapseTransition.name, ElCollapseTransition);

	setupRouter(app);
	app.mount('#app');
};

setupApp();
