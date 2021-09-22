<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
		<div class="global">
			<h2>Is Loading: {{ isLoading }}</h2>
			<h2>Is Mobile: {{ isMobile }}</h2>
		</div>
		<div v-if="isLoading">
			<EmployeesTableSkeleton />
		</div>
		<div v-else>
			<EmployeesTable />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '@/store/constants';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import EmployeesTable from '@/components/EmployeesTable.vue';
import EmployeesTableSkeleton from '@/components/EmployeesTableSkeleton.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
		EmployeesTable,
		EmployeesTableSkeleton
	},
	setup() {
		const store = useStore();
		// retrieve value from Store -> not useful only test
		const isMobile: ComputedRef<boolean> = computed(() => store.getters[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE]);
		const isLoading: ComputedRef<boolean> = computed(() =>  store.getters[ROOT_STORE.GETTERS.IS_LOADING]);
		return {
			isLoading, 
			isMobile
		}
	}
});
</script>
