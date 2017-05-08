<template>
	<main>
		<el-row class="tac">
			<el-col :span="8">
				<NavBar></NavBar>
			</el-col>
			<el-col :span="16">
				<router-view></router-view>
			</el-col>
	  </el-row>
	</main>
</template>

<script>
	import NavBar from './components/NavBar'
	import DailyReview from './components/DailyReview'
	import DailyPlan from './components/DailyPlan'
	import ClockIn from './components/ClockIn'
	import Bookmark from './components/Bookmark'

	export default {
		data() {
			return {
				name: 'app-vue hot haha'
			}
		},
		components: {
			NavBar,
			DailyReview,
			DailyPlan,
			ClockIn,
			Bookmark,
		}
	}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

h1 {
	color: yellow;
}
</style>
