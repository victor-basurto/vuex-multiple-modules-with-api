<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link><br>
	<span>Is Mobile device: {{ isMobile }}</span>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ComputedRef } from 'vue';
import { AxiosResponse } from 'axios'
import { useStore } from './use/useStore';
import { ROOT_STORE } from './store/constants';
import employeesApi from './services/employees-api.service'
import { IEmployeeData, IServerResponse } from './store/interfaces';


export default defineComponent({
	setup() {
		const store = useStore();
		// retrieve value from Store
		const isMobile: ComputedRef<boolean> = computed(() => store.getters[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE])
		onMounted(() => {
			// call API and feed Root State
			employeesApi.fetchEmployees().then((res: AxiosResponse<IServerResponse>): void => {
				const { data } = res.data;
				store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES, data);
			});
		});
		return {
			isMobile
		}
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
