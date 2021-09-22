<template>
	<!-- 
		TODO:
		Move Table to it's own composable component 
		-->
	<div class="container">
		<table class="table is-bordered is-striped is-hoverable is-fullwidth">
			<thead>
				<tr>
					<th class="has-text-weight-semibold">#</th>
					<th class="has-text-weight-semibold">Firstname</th>
					<th class="has-text-weight-semibold">Lastname</th>
					<th class="has-text-weight-semibold">Is Active</th>
					<th class="has-text-weight-semibold">Is Admin</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(employee, index) in employees" :key="index">
					<th class="has-text-weight-semibold">{{ index }}</th>
					<th>{{ employee.firstName }}</th>
					<th>{{ employee.lastName }}</th>
					<th :class="{'has-text-danger': !employee.isActive}">{{ employee.isActive }}</th>
					<th :class="{'has-text-danger': !employee.isAdmin}">{{ employee.isAdmin }}</th>
				</tr>
			</tbody>
		</table>
		<div class="has-text-right">
			<span class="is-size-5">Total: {{ employeesCount }}</span>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '@/store/constants';
import { IEmployeeData } from '@/store/interfaces';

export default defineComponent({
	name: 'EmployeesTable',
	setup() {
		const store = useStore();

		const employeesCount: ComputedRef<number> = computed(() => store.getters[ROOT_STORE.GETTERS.EMPLOYEES_COUNT]);
		const employees: ComputedRef<IEmployeeData[]> = computed(() => store.getters[ROOT_STORE.GETTERS.EMPLOYEES]);
		
		return {
			employees,
			employeesCount
		}
	},
})
</script>
