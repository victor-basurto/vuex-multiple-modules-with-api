<template>
  <div id="nav">
	<NavigationMenu/>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ComputedRef } from 'vue';
import { AxiosResponse } from 'axios';

import employeesApi from '@/services/employees-api.service';

import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '@/store/constants';
import { IEmployeeData, IServerResponse } from '@/store/interfaces';

import { sleepHelper } from '@/shared/misc';

import NavigationMenu from '@/components/base/menu/NavigationMenu.vue';


export default defineComponent({
	components: {
		NavigationMenu
	},
	setup() {
		const store = useStore();
		onMounted(() => {
			// call API and feed Root State
			employeesApi.fetchEmployees().then(async (res: AxiosResponse<IServerResponse>): Promise<void> => {
				const { data } = res.data;
				store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, true);					// set loading to true
				await sleepHelper(1000);
				store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES, data);					// set employees
				store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT, data.length);		// set employees count
				store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, false);				// set loading state to false
			});
		});
		return { }
	},
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
