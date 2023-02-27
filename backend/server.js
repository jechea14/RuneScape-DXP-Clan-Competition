require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const playerData = require('./routes/data')

// Connect to db
// async task
mongoose.connect(process.env.DATABASE_CONNECTION, {useUnifiedTopology: true})
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((err) => console.log(err, 'error'))

// Middleware logger
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/data', playerData)


