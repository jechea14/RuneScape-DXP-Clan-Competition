const express = require('express')
const router = express.Router()
const {
    getAllData,
    getSingleData,
    cleanData,
    getOldestAndLatestData
} = require('../controllers/playerDataController')

// GET all collections and all data in each collection
router.get('/', getAllData)

router.get('/get-oldest-and-latest-data', getOldestAndLatestData)
// GET cleaned data, create new collection, and insert documents into collection
// Run scripts to get clan members and skill data for each clan member, create new collection based on date time, then insert data as documents into collection
// TODO: Make this route authenticated
router.get('/clean-data', cleanData)

// GET single player data
router.get('/:id', getSingleData)



module.exports = router