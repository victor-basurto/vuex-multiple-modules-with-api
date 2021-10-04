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
					<th class="has-text-weight-semibold">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(employee, index) in employees" :key="index">
					<td class="has-text-weight-semibold">{{ index + 1 }}</td>
					<td>{{ employee.firstName }}</td>
					<td>{{ employee.lastName }}</td>
					<td :class="{'has-text-danger': !employee.isActive}">{{ employee.isActive }}</td>
					<td :class="{'has-text-danger': !employee.isAdmin}">{{ employee.isAdmin }}</td>
					<td>
						<span class="icon" @click="viewData">
							<i class="fa fa-eye"></i>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="has-text-right">
			<span class="is-size-5">Total: {{ employeesCount }}</span>
		</div>
	</div>
	<Modal v-if="showModal" :showModal="showModal"></Modal>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '../store/constants';
import { IEmployeeData } from '@/store/interfaces';
import Modal from '../components/base/modal/Modal.vue';

export default defineComponent({
	name: 'EmployeesTable',
	components: {
		Modal
	},
	setup() {
		const store = useStore();

		const employeesCount: ComputedRef<number> = computed(() => store.getters[ROOT_STORE.GETTERS.EMPLOYEES_COUNT]);
		const employees: ComputedRef<IEmployeeData[]> = computed(() => store.getters[ROOT_STORE.GETTERS.EMPLOYEES]);
		const showModal: ComputedRef<Boolean> = computed(() => store.getters[ROOT_STORE.GETTERS.MODAL]);
		
		const viewData = () => {
			let toggleModal = !showModal.value;
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_MODAL, toggleModal);
		}
		
		return {
			employees,
			employeesCount,
			showModal,
			viewData
		}
	},
})
</script>
