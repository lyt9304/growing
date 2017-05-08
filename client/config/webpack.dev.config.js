var path = require('path')
var webpack = require('webpack')
var dist = path.resolve(__dirname, '../dist')

module.exports = {
	watch: true,
	entry: {
		main: [path.resolve(__dirname, '../main.js'),
			'webpack-hot-middleware/client?path=/dist/__webpack_hmr&timeout=20000',
		]
	},
	output: {
		path: dist,
		filename: 'build.js',
		publicPath: '/dist/'
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
		},{
			test: /\.css/,
			use: ['style-loader', 'css-loader']
		},{
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			use: 'file-loader'
		},{
			test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			use: 'file-loader'
		}]
	},
	plugins: [
  		new webpack.HotModuleReplacementPlugin(),
  		new webpack.DefinePlugin({
		    'process.env': {
		     	NODE_ENV: JSON.stringify('dev')
	   		 }
	   	})
	]
}
