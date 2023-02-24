const express = require('express')
const router = express.Router()
const {
    getAllData,
    getSingleData,
    addData,
    cleanData
} = require('../controllers/playerDataController')

router.get('/', getAllData)

router.get('/clean-data', cleanData)

router.get('/add-data', addData)

// GET single player data
router.get('/:id', getSingleData)


module.exports = router