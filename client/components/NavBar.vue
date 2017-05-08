<template>
	<el-menu class="el-menu-vertical-demo navbar">
		<el-menu-item index="1">
			<router-link to="/clockin">
				<i class="el-icon-message"></i>
				Clock In
			</router-link>
		</el-menu-item>
		<el-menu-item index="2">
			<router-link to="/plan">
				<i class="el-icon-menu"></i>
				Plan
			</router-link>
		</el-menu-item>
		<el-menu-item index="3">
			<router-link to="/review">
				<i class="el-icon-setting"></i>
				Review
			</router-link>
		</el-menu-item>
		<el-menu-item index="4">
			<router-link to="/bookmark">
				<i class="el-icon-setting"></i>
				Bookmark
			</router-link>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style>
.navbar{
	height: 100%;
}

.el-menu-item a{
	display: block;
	color: inherit;
	text-decoration: none;
}

</style>
