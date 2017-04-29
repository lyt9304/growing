<template>
	<div>
		<h1>App Hello {{name}}! watch</h1>
		<hello></hello>
	</div>
</template>

<script>
	import Hello from './components/Hello'
	export default {
		data() {
			return {
				name: 'app-vue'
			}
		},
		components: {
			Hello
		}
	}
</script>

<style scoped>
h1 {
	color: yellow;
}
</style>