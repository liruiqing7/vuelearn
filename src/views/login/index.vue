<template>
	<div class="login_page">
		<el-form :model="loginParams" :rules="loginRules">
			<el-form-item prop="username">
				<el-input v-model="loginParams.username" placeholder="请输入用户名" />
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="loginParams.password" placeholder="请输入密码" type="password" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const loginParams = reactive({
	username: 'admin',
	password: 888888
});

// const validateUser = (_: unknown, value: string, callback: Function) => {
// 	if (value.length < 4) {
// 		callback(new Error('用户名长度必须大于6位'));
// 	} else {
// 		callback();
// 	}
// };

// const validatePassword = (_: unknown, value: string, callback: Function) => {
// 	if (value.length < 6) {
// 		callback(new Error('密码长度必须大于6位'));
// 	} else {
// 		callback();
// 	}
// };

let loginRules = {
	username: [
		// { required: true, message: '用户名不能为空', trigger: 'blur' },
		// { min: 5, max: 10, message: '用户名长度在6到10位之间', trigger: 'change' },
		{
			require: true,
			// validator: validateUser,
			trigger: 'change'
		}
	],
	password: [
		// { required: true, message: '密码不能为空', trigger: 'blur' },
		// { min: 6, max: 15, message: '密码长度在6到15位之间', trigger: 'change' },
		{
			require: true,
			// validator: validatePassword,
			trigger: 'change'
		}
	]
};
</script>

<style scoped lang="scss"></style>
