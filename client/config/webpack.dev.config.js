var path = require('path')
// var webpack = require('webpack')
var dist = path.resolve(__dirname, '../dist')

module.exports = {
	watch: true,
	entry: {
		main: path.resolve(__dirname, '../main.js')
	},
	output: {
		path: dist,
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0']
				}
			}	
		},{
			test: /\.vue$/,
			use: 'vue-loader'
		}]
	}
}