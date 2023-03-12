const express = require('express')
require('dotenv').config()
const router = express.Router()
const {
    getAllData,
    getSingleData,
    cleanData,
    authMiddleware
} = require('../controllers/playerDataController')

// GET all collections and all data in each collection
router.get('/', getAllData)

// GET cleaned data, create new collection, and insert documents into collection
// Run scripts to get clan members and skill data for each clan member, create new collection based on date time, then insert data as documents into collection
// TODO: Make this route authenticated
router.get('/clean-data', cleanData)

// GET single player data
router.get('/player/:id', getSingleData)

router.get('/api-key', authMiddleware, (req, res) => {
    res.status(200).send({ apiKey: process.env.API_KEY })
})

module.exports = router