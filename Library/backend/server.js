require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// middleware

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing api
app.get('/api', (req, res) => {
    res.json({ messeage: 'Hello from /api'})
})

// routers
const routerBook = require('./routes/bookRouter.js')
const routerUser = require('./routes/userRouter.js')

app.use('/api/books', routerBook)
app.use('/api/users', routerUser)


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})