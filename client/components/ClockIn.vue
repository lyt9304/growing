<template>
	<h1>Hello {{name}}!</h1>
</template>

<script>
	export default {
		data() {
			return {
				name: 'clock in'
			}
		}
	}
</script>

<style scoped>
h1 {
	color: red;
}
</style>
