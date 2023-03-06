// const createModel = require('../models/clanDataModel')
const Players = require('../models/clanDataModel')
const pipeline = require('../pipeline')
const { getPlayerData, getUsernames } = require('../main')
const mongoose = require('mongoose')


async function getAllData(req, res) {
  try {
    const usernames = await getUsernames()
    const dxpResults = []
    for(user of usernames) {
      const result = await mongoose.connection.db.collection('snapshots').aggregate(pipeline(user)).toArray();
      if(result.length === 0) {
        continue
      }
      else {
        dxpResults.push(result)
      }
    }
    res.status(200).json({ data: dxpResults })
  } catch (error) {
    console.log(error)
  }

}

// get a single data
async function getSingleData(req, res) {
  // const {id} = req.params

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(404).json({error: "No such player"})
  // }

  // const player = await Player.findById(id)
  // if (!player) {
  //     return res.status(404).json({error: "No such player"})
  // }
  // res.status(200).json(player)
}

async function cleanData(req, res) {
  try {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)
    const playersData = {
      players: data
    }
    Players.create(data)
      .then()
      .catch((err) => {
        console.log(err)
      })


  } catch (error) {
    console.log(error)
  }


  res.status(200).send({ message: 'data inserted into db!' })
}

module.exports = {
  getAllData,
  getSingleData,
  cleanData,
}