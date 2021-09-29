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
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mainNavMenu, INavigationMenu } from './INavigationMenu';

export default defineComponent({
	name: 'NavigationMenu',
	setup() {
		const toggleNavbarFlag = ref(false);
		const toggleNavbar = () => {
			toggleNavbarFlag.value = !toggleNavbarFlag.value;
		}
		return {
			mainNavMenu,
			toggleNavbarFlag,
			toggleNavbar
		}
	}
})
</script>
