<template>
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
				<tr>
					<th>Loading...</th>
					<th>Loading...</th>
					<th>Loading...</th>
					<th>Loading...</th>
					<th>Loading...</th>
				</tr>
			</tbody>
		</table>
		<div class="has-text-right">
			<span class="is-size-5">Total: {{ employeesCount }}</span>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'EmployeesTableSkeleton',
	
});
</script>
