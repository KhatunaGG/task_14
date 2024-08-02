const { Router } = require('express')
const postsRouter = require('./posts/posts.route')

const apiRouter = Router()

apiRouter.use('/posts', postsRouter)


module.exports = apiRouter