import createApp from './main';
const { app, router } = createApp();

(async(a, r) => {
	await r.isReady();
	a.mount('#app', true);
})(app, router)
