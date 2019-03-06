const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// const {connect  } = require('./databases/init')
import { connect, initSchemas } from './databases/init'
import router from './router/index'
const app = new Koa()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {

  await connect()
  initSchemas()

  require('./tasks/movie')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 路由放在app.use前面
  app
    .use(router.routes())
    .use(router.allowedMethods())

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling 绕过Koa的内置响应处理
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
