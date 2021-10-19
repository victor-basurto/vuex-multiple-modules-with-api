<template>
	<nav class="navbar is-transparent set-transparent is-fixed-top">
		<div class="navbar-brand">
			<a href="#" class="navbar-item">
				<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
			</a>
			<div class="navbar-burger" :class="{'is-active': toggleNavbarFlag}" data-target="navbarBurgerToggler" @click="toggleNavbar">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div id="navbarBurgerToggler" class="navbar-menu" :class="{'is-active': toggleNavbarFlag}">
			<div class="navbar-start">
				<div class="is-flex is-align-content-stretch" v-for="(navLink, index) in mainNavMenu" :key="index">
					<router-link class="navbar-item" :to="{path: navLink.url}">{{ navLink.label }}</router-link>
					<div class="navbar-item has-dropdown is-hoverable" v-if="navLink.subMenu?.length">
						<a class="navbar-link" href="https://bulma.io/documentation/overview/start/">Docs</a>
						<div class="navbar-dropdown is-boxed" v-for="(submenu, index) in navLink.subMenu" :key="index">
							<router-link class="navbar-item" :to="submenu.url">{{ submenu.label }}</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="navbar-end">
				<div class="navbar-item">
					<div class="field is-grouped">
						<p class="control">
							<input type="text" class="input is-primary" placeholder="username" />
						</p>
						<p class="control">
							<input type="password" class="input is-primary" placeholder="password" />
						</p>
						<p class="control">
							<a class="button is-primary is-outlined" target="_blank" href="#">
								<span class="icon"><i class="far fa-user"></i></span>
								<span>login</span>
							</a>
						</p>
						<div class="field is-flex is-align-items-center darkmode-switcher">
							<input id="toggleDarkModeSwitch" 
								type="checkbox" 
								name="toggleDarkModeSwitch" 
								class="switch is-rounded is-outlined is-info" 
								:checked="isDarkMode"
								@click="toggleDarkMode"
							>
							<label for="toggleDarkModeSwitch"></label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, toRef, unref } from 'vue';
import { useStore } from '@/use/useStore';
import { NAVBAR_STORE, ROOT_STORE } from '@/store/constants';
import { mainNavMenu, INavigationMenu } from './INavigationMenu';
import { DarkModeColors } from '@/store/interfaces';


export default defineComponent({
	name: 'NavigationMenu',
	props: {
		isDarkMode: {
			type: Boolean,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const toggleNavbarFlag: ComputedRef<boolean> = computed(() => store.getters[NAVBAR_STORE.GETTERS.TOGGLE_NAVBAR]); // get navFlag from Global State
		
		/**
		 * Toggle Navbar State - Smaller Screen
		 * @description opens navbar on smaller screens
		 */
		const toggleNavbar = (): void => {
			store.dispatch(NAVBAR_STORE.ACTIONS.UPDATE_TOGGLE_NABVAR, (!toggleNavbarFlag.value) ? true : false);
		}
		/**
		 * Toggles DarkMode State - Global State
		 * @description set dark/light mode
		 */
		const toggleDarkMode = (): void => {
			const isDark = ref(!props.isDarkMode ? true : false); // boolean
			const preferredColor = isDark.value ? DarkModeColors.DARK : DarkModeColors.LIGHT;
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_LIGHT_DARK_MODE, isDark.value);
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_COLOR_SCHEME, preferredColor);
		}
		
		
		return {
			mainNavMenu,
			toggleNavbarFlag,
			toggleNavbar,
			toggleDarkMode
		}
	}
})
</script>
