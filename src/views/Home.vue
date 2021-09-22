<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
		<suspense>
			<template #default>
				<EmployeesTableSkeleton />
			</template>
			<template #fallback>
				<EmployeesTable />
			</template>
		</suspense>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import EmployeesTable from '@/components/EmployeesTable.vue';
import EmployeesTableSkeleton from '@/components/EmployeesTableSkeleton.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
		EmployeesTable,
		EmployeesTableSkeleton
	}
});
</script>
