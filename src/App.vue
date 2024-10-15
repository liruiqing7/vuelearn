<template>
	<div class="main">
		<router-view />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
	display: flex;
	.page-content {
		flex: 1;
	}
}
/** 过渡动画配置代码 */
.animation-enter-from,
.animation-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
.animation-enter-to,
.animation-leave-from {
	opacity: 1;
}
.animation-enter-active {
	transition: all 0.3s ease;
}
.animation-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>
