import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import DailyReview from './components/DailyReview'
import DailyPlan from './components/DailyPlan'
import ClockIn from './components/ClockIn'
import Bookmark from './components/Bookmark'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/clockin',
			component: ClockIn
		},
		{
			path: '/plan',
			component: DailyPlan
		},
		{
			path: '/review',
			component: DailyReview
		},
		{
			path: '/bookmark',
			component: Bookmark
		}
	]
})

let vm = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})
