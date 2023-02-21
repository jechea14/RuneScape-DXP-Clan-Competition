const express = require('express')
const router = express.Router()
const { getPlayerData, getUsernames } = require('../main')
const {
    getAllData,
    getSingleData
} = require('../controllers/playerDataController')

router.get('/', getAllData)

router.get('/clean-data', async (req, res) => {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)

    res.status(200).json(data)
})

router.get('/add-data', (req, res) => {
  const player = new Player({
    username: 'icekrystalx2',
    total_level: 2898,
    attack: 1928384,
    defense: 2384845
  })

  // async task
  player.save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

// GET single player data
router.get('/:id', getSingleData)


module.exports = router