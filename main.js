const express = require('express')
const app = express()
const dbConnect = require('./db/db')
const postsModel = require('./db/posts.model')
const cors = require('cors')

dbConnect()

app.use(cors())
app.use(express.json())


app.get('/api/posts', async (req, res) => {
    try {
        const posts = await postsModel.find()
        res.json(posts)
    } catch (error) {
        console.log(error)
    }
})


app.get('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id) throw new Error('Not found')
        const post = await postsModel.findById(id)
        res.json(post)
    } catch (error) {
        console.log(error)
    }
})


app.post('/api/posts', async (req, res) => {
    try {
        const { name, text, title, email } = req.body
        if (!email || !title || !text) return res.json('Email, title and text are required')
        const post = await postsModel.create({ name, text, title, postedAt: new Date().toISOString(), email })
        res.json(post)
    } catch (error) {
        console.log(error)
    }
})



app.delete('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id) throw new Error('Not found')
        const deletedPost = await postsModel.findByIdAndDelete(id)
        if (!deletedPost) throw new Error('User Not found')
        res.json(deletedPost)
    } catch (error) {
        console.log(error)
    }
})



app.put('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id) throw new Error('Not found')
        const { name, title, text, email, postedAt } = req.body
        const updatedPost = await postsModel.findByIdAndUpdate(id, { name, title, text, email, postedAt }, { new: true })
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }
})



app.listen(3003, () => {
    console.log('Server is running on port http://localhost:3003')
})