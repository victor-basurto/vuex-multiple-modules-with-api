<template>
  <div id="nav">
	<NavigationMenu :darkMode="darkMode" />
  </div>
  <router-view/>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import useEmployeesApi from '@/services/use/useEmployeesApi'

import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '@/store/constants';

import { sleepHelper } from '@/shared/misc';

import NavigationMenu from '@/components/base/menu/NavigationMenu.vue';

export default defineComponent({
	components: {
		NavigationMenu
	},
	setup() {
		const store = useStore();
		const darkMode = computed(() => {
			return store.getters[ROOT_STORE.GETTERS.LIGHT_DARK_MODE];
		})
		
		onMounted(async () => {
			const { success, message, data, fetchData } = useEmployeesApi();				// call API and feed Root State
			await fetchData();																// -> feed current reactive ServerResponseState
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, true);						// set loading to true
			await sleepHelper(1000);
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES, data.value);				// set employees
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT, data.value.length);	// set employees count
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, false);					// set loading state to false
			
			let bodyElement = document.body;
			bodyElement.classList.add('app-background');
		});
		watch(darkMode, () => {
			let htmlElement = document.documentElement;
			if (darkMode.value) {
				localStorage.setItem('theme', 'dark');
				htmlElement.setAttribute('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
				htmlElement.setAttribute('theme', 'light');
			}
		})
		return { 
			darkMode
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
