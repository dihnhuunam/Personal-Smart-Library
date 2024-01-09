const express = require('express');
const cors = require('cors');
require('dotenv').config()
const initRoutes = require('../backend/routes')

const app =express()
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//CRUD
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

initRoutes(app)

const PORT = process.env.PORT || 888

const listener = app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON THE PORT " + listener.address().port);
})
