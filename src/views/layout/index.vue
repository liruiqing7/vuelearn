<template>
	<div class="layoutContent">
		<div class="menu-content">
			<MenuComponent />
		</div>
		<div class="page-content">
			<router-view v-slot="{ Component, route }">
				<transition name="animation" mode="out-in">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import MenuComponent from '@/components/menu/index.vue';
</script>

<style scoped lang="scss"></style>
