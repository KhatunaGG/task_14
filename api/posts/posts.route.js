const { Router } = require('express')
const { getAllPosts, getPostById, createPost, deletePost, updatePost } = require('./posts.service')

const postsRouter = Router()

postsRouter.get('', getAllPosts)
postsRouter.get('/:id', getPostById)
postsRouter.post('/', createPost)
postsRouter.delete('/:id', deletePost)
postsRouter.put('/:id', updatePost)

module.exports = postsRouter