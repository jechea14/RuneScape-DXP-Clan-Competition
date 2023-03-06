const { Players } = require('../models/clanDataModel.js')
const { PlayerResults } = require('../models/clanDataModel.js')
const pipeline = require('../pipeline')
const { getPlayerData, getUsernames } = require('../main')
const mongoose = require('mongoose')


async function getAllData(req, res) {
  try {
    const usernames = await getUsernames()
    const getData = await mongoose.connection.db.collection('dxpresults').find().toArray()
    // savePipelineResults(usernames)
    res.status(200).json({ data: getData })
  } catch (error) {
    console.log(error)
  }
}

// get a single data
async function getSingleData(req, res) {
  const { id } = req.params

  const player = await mongoose.connection.db.collection('dxpresults').find({ _id: id }).toArray()
  if (!player) {
    return res.status(404).json({ error: "No such player" })
  }
  res.status(200).json(player)
}

async function savePipelineResults(usernames) {
  try {
    for (user of usernames) {
      const result = await mongoose.connection.db.collection('snapshots').aggregate(pipeline(user)).toArray();
      if (result.length === 0) {
        continue
      }
      else {
        const existingResult = await PlayerResults.findOne({ _id: result[0]._id })
        if (existingResult) {
          await PlayerResults.findOneAndUpdate({ _id: result[0]._id }, result[0])
          console.log("updating...")
        }
        else {
          await PlayerResults.create(result[0])
          console.log("creating..")
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

async function cleanData(req, res) {
  try {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)

    Players.create(data)
      .then()
      .catch((err) => {
        console.log(err)
      })

    savePipelineResults(usernames)

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