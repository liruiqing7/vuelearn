import pluginVue from 'eslint-plugin-vue'; // 引入vue模版的eslint
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'; // ts-eslint解析器，使 eslint 可以解析 ts 语法
import vueParser from 'vue-eslint-parser'; // vue文件解析器
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintRecommendPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config({
	extends: [
		eslint.configs.recommended,
		...tseslint.configs.recommended,
		...pluginVue.configs['flat/essential'], // vue3推荐的eslint配置
		eslintRecommendPrettier,
		eslintConfigPrettier
	],
	languageOptions: {
		parser: vueParser, // 使用vue解析器，这个可以识别vue文件
		parserOptions: {
			parser: tseslint.parser, // 在vue文件上使用ts解析器
			sourceType: 'module'
		}
	},
	rules: {
		semi: 2,
		'comma-dangle': ['error', 'never'],
		'no-unused-vars': 2,
		'space-before-function-paren': 0,
		'generator-star-spacing': 'off',
		'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
		'array-bracket-spacing': 0, // 方括号
		'prettier/prettier': 'off'
	},
	ignores: ['node_modules/', 'dist/', '*.min.js']
});
