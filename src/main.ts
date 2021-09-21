import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/main.scss'

// createApp(App).use(store).use(router).mount('#app')


export default function () {
	const app = createApp(App)
	app.use(store)
	app.use(router)

	return {
		app,
		router,
		store
	}
}
