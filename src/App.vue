<template>
  <div id="nav">
	  {{ isDarkMode }}
	<NavigationMenu :isDarkMode="isDarkMode" />
  </div>
  <router-view/>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onMounted, watch, Ref, unref } from 'vue';

import useEmployeesApi from '@/services/use/useEmployeesApi';
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '@/store/constants';
import { DarkModeColors, DarkModeColorTypes } from './store/interfaces';
import { sleepHelper } from '@/shared/misc';

import NavigationMenu from '@/components/base/menu/NavigationMenu.vue';

export default defineComponent({
	components: {
		NavigationMenu
	},
	setup() {
		const store = useStore();
		/**
		 * TODO:
		 * 	Remove Custom FUnctions to its own composable
		 */
		const isDarkMode: ComputedRef<boolean> = computed(() => store.getters[ROOT_STORE.GETTERS.LIGHT_DARK_MODE]);	// get DarkMode from Global State
		const colorScheme: ComputedRef<DarkModeColorTypes> = computed(() => store.getters[ROOT_STORE.GETTERS.COLOR_SCHEME]);

		function setDarkLightMode(isDarkMode : ComputedRef<boolean>): void {
			const bodyElement: HTMLElement = document.body;
			const theme = localStorage.getItem('theme') ?? colorScheme.value;
			bodyElement.classList.add('app-background');
			document.documentElement.setAttribute('theme', theme);
		}
		onMounted(async () => {
			setDarkLightMode( isDarkMode );
			const { success, message, data, fetchData } = useEmployeesApi();				// call API and feed Root State
			await fetchData();																// -> feed current reactive ServerResponseState
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, true);						// set loading to true
			await sleepHelper(1000);
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES, data.value);				// set employees
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT, data.value.length);	// set employees count
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_LOADING, false);					// set loading state to false
		});
		/**
		 * TODO:
		 * 	Remove Custom FUnctions to its own composable
		 */
		//Watch for `DarkMode` changes and set changes to `localStorage`
		watch(isDarkMode, () => {
			let htmlElement = document.documentElement;
			if (!isDarkMode.value) {
				localStorage.setItem('theme', DarkModeColors.LIGHT);
				htmlElement.setAttribute('theme', DarkModeColors.LIGHT);
				return;
			}
			localStorage.setItem('theme', DarkModeColors.DARK);
			htmlElement.setAttribute('theme', DarkModeColors.DARK);
			
		})
		return {
			isDarkMode
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
