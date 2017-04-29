import koa from 'koa'
import Router from 'koa-router'
import staticSever from 'koa-static'
import {devMiddleware, hotMiddleware} from 'koa-webpack-middleware'
import webpack from 'webpack'
import devConfig from '../client/config/webpack.dev.config.js'

import path from 'path'

const app = new koa()
const router = new Router()
const port = 3000
const DEV = process.env.NODE_ENV != 'production'
const compile = webpack(devConfig)

console.log(process.env.NODE_ENV)

if(DEV){
	app.use(devMiddleware(compile, {
		noInfo: true,
		reload: true,
		publicPath: devConfig.output.publicPath,
		stats: {
			colors: true
		}
	}))

	app.use(hotMiddleware(compile, {
		log: console.log,
		path: '/dist/__webpack_hmr',
		heartbeat: 5000
	}))
}


// app.use(ctx => {
// 	ctx.body = 'Hello Koa'
// })

router.prefix('/api')

router.get('/test', (ctx, next) => {
	ctx.body = {'success': 1}
})

app
	.use(staticSever(path.resolve(__dirname, '../client')))
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(port, () => {
	console.info('server listen port at ' + port)
})