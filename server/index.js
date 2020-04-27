const Koa = require('koa')
const favicon = require('koa-favicon')
const logger = require('koa-logger')
const serve = require('koa-static')
const parse = require('koa-bodyparser')
const path = require('path')

const app = new Koa()
const port = process.env.PORT || 3000
require('./store').init()

app.use(favicon(path.join(__dirname, '..', 'client', 'rocket.ico')))
app.use(logger())
app.use(serve(path.resolve(__dirname, '..', 'client')))
app.use(parse())




const userRoutes = require('./routes/users')
app.use(userRoutes.routes())


const taskRoutes = require('./routes/tasks')
app.use(taskRoutes.routes())




app.listen(port)
console.log('App is listening at http://127.0.0.1:3000')