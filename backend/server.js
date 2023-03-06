require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const playerData = require('./routes/data')

// Connect to db
// async task
mongoose.connect(process.env.DATABASE_CONNECTION, { useUnifiedTopology: true })
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((err) => console.log(err, 'error'))

// Caching Middleware
function setCache(req, res, next) {
  // Keep cache for 5 minutes (in seconds)
  const period = 60 * 5

  // Only want to cache GET requests
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`)
  }
  else {
    // For other requests set strict no caching parameters
    res.set("Cache-control", `no-store`)
  }
  next()
}
// Middleware
app.use(cors());
app.use(express.json())
app.use(setCache)
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/data', playerData)


