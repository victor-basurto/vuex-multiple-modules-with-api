import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { ROOT_STORE } from './store/constants';
import { isMobile }	from 'mobile-device-detect';

import './assets/scss/main.scss';


export default function () {
	const app = createApp(App);
	app.use(store);
	app.use(router);

	// check if mobile device or desktop
	store.dispatch(ROOT_STORE.ACTIONS.UPDATE_IS_MOBILE_DEVICE, isMobile);
	store.dispatch(ROOT_STORE.ACTIONS.UPDATE_VERSION, '0.0.1');
	
	const currentTheme = (localStorage.getItem('theme') === 'dark') ? true : false;	// get theme from localStorage
	store.dispatch(ROOT_STORE.ACTIONS.UPDATE_LIGHT_DARK_MODE, currentTheme);		// set theme based on user preferences

	return {
		app,
		router,
		store
	}
}
