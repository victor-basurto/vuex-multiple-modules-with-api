<template>
	<nav class="navbar is-transparent">
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
							<a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
								<span class="icon"><i class="fab fa-twitter"></i></span>
								<span>Tweet</span>
							</a>
						</p>
						<p class="control">
							<a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
								<span class="icon"><i class="fas fa-download"></i></span>
								<span>Download</span>
							</a>
						</p>
						<p class="control is-flex is-align-items-center">
							<span class="icon" v-if="darkMode" @click="toggleDarkMode"><i class="fas fa-sun"></i></span>
							<span class="icon" v-else @click="toggleDarkMode"><i class="fas fa-moon"></i></span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, toRef, unref } from 'vue';
import { useStore } from '@/use/useStore';
import { NAVBAR_STORE } from '@/store/constants';
import { mainNavMenu, INavigationMenu } from './INavigationMenu';
import { ROOT_STORE } from '../../../store/constants';

export default defineComponent({
	name: 'NavigationMenu',
	props: {
		darkMode: {
			type: Boolean,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const toggleNavbarFlag: ComputedRef<boolean> = computed(() => store.getters[NAVBAR_STORE.GETTERS.TOGGLE_NAVBAR]);
		const toggleNavbar = () => {
			store.dispatch(NAVBAR_STORE.ACTIONS.UPDATE_TOGGLE_NABVAR, (!toggleNavbarFlag.value) ? true : false);
		}
		const toggleDarkMode = () => {
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_LIGHT_DARK_MODE, (!props.darkMode) ? true : false);
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
