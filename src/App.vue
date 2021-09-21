<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link><br>
	<span>Is Mobile device: {{ isMobile }}</span>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useStore } from './use/useStore';
import { ROOT_STORE } from './store/constants';


export default defineComponent({
	setup() {
		const store = useStore();
		// retrieve value from Store
		const isMobile = computed(() => store.getters[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE])

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
