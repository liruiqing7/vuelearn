import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import UnoCss from 'unocss/vite';
import path from 'path';

const app_target_url_dev = 'http://xysh.oper233.test.jinlinbao.com'; // 本地运行环境
// const app_target_url_test = 'http://xysh.oper245.test.jinlinbao.com'; // 测试环境
// const app_target_url_prod = 'https://xysh-oper.jinlinbao.com'; // 线上环境

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		UnoCss(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			// 配置别名
			'@': path.resolve(__dirname, './src'),
			components: '/src/components' // 将'components'设置为'/src/components'目录的别名
		}
	},
	server: {
		port: 8889,
		proxy: {
			'/hubble': {
				target: app_target_url_dev
			}
		}
	}
});
