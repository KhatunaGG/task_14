const express = require('express')
const app = express()
const dbConnect = require('./db/db')
const cors = require('cors')
const apiRouter = require('./api')

dbConnect()

app.use(cors())
app.use(express.json())

app.use('/api', apiRouter)


app.listen(3003, () => {
    console.log('Server is running on port http://localhost:3003')
})