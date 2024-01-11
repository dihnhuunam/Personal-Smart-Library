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
// app.get('/', (req, res) => {
//     res.json({ messeage: 'hello from api'})
// })

// routers
const router = require('./routes/bookRouter.js')
app.use('/api/books', router)

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})