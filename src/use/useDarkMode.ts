import { ref, watch, toRefs, unref } from 'vue';

export default function useDarkMode() {
	const darkMode = ref(Boolean);
	function setDarkLightMode(): void {
		const bodyElement: HTMLElement = document.body;
		bodyElement.classList.add('app-background');
		const darkLight = (!darkMode.value) ? 'light' : 'dark';
		document.documentElement.setAttribute('theme', darkLight);
	}
	// Watch for `DarkMode` changes and set changes to `localStorage`
	watch(darkMode, () => {
		let htmlElement = document.documentElement;
		if (!darkMode.value) {
			localStorage.setItem('theme', 'light');
			htmlElement.setAttribute('theme', 'light');
			return;
		}
		localStorage.setItem('theme', 'dark');
		htmlElement.setAttribute('theme', 'dark');
		
	})
	return {
		setDarkLightMode,
		darkMode
	}
}
