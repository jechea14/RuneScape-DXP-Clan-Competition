// const createModel = require('../models/clanDataModel')
const Players = require('../models/clanDataModel')
const { getPlayerData, getUsernames } = require('../main')
const mongoose = require('mongoose')

// GET all collections and data in each collection sorted by collection creation date
// Collection creation data is in the collection name
async function getAllData(req, res) {
  try {
    const docs = await mongoose.connection.db.collection('snapshots').find().toArray()

    // const cursor = await mongoose.connection.db.collection('snapshots').find({username: "Aczinor9"}).sort({createdAt: 1}).toArray()
    // const oldest = cursor[0]
    // const latest = cursor[cursor.length - 1]
    const pipeline = []
    const pipelineResults = await mongoose.connection.db.collection('snapshots').aggregate(pipeline)
    // console.log(oldest, latest)
    
    res.status(200).json({ data: docs })
  } catch (error) {
    console.log(error)
  }

  // // Retrieve collection names and collection information
  // const collections = await mongoose.connection.db.listCollections().toArray()

  // // Map through the list of collections and return an array of objects of the collection names and formatted dates from the collection names
  // const collectionNames = collections.map((collection) => {
  //   // Format date properly for the sort to work
  //   const formattedDate = new Date(collection.name)
  //   return { name: collection.name, date: formattedDate }
  // })

  // // Sort collections by date property
  // const sortedCollections = collectionNames.sort((a, b) => b.date - a.date)

  // // Map through the sorted collections to find each collections and its data then return collection data
  // // Promise-based
  // const snapshots = await Promise.all(sortedCollections.map(async (collection) => {
  //   const results = await mongoose.connection.db.collection(collection.name).find().toArray()
  //   return { name: collection.name, data: results }
  // }))

  // res.status(200).json({ message: "Success", snapshots: snapshots })
}

// GET oldest and latest collection data
// Sort collections by Date
// Collection names are dates to distinguish data and are sorted to obtain the first and latest created collections
async function getOldestAndLatestData(req, res) {
  try {

  } catch (error) {

  }


  // // Retrieve collection names and collection information
  // const collections = await mongoose.connection.db.listCollections().toArray()

  // // Map through the list of collections and return an array of objects of the collection names and formatted dates from the collection names
  // const collectionNames = collections.map((collection) => {
  //   const formattedDate = new Date(collection.name)
  //   return { name: collection.name, date: formattedDate }
  // })

  // // Sort collections by date property
  // const sortedCollections = collectionNames.sort((a, b) => b.date - a.date)

  // // Get latest collection name from first element of array, get oldest collection from end of array
  // const oldestCollectionName = sortedCollections[sortedCollections.length - 1].name
  // const latestCollectionName = sortedCollections[0].name

  // // Get the latest collection with data and oldest collection with data
  // const oldestCollectionData = await mongoose.connection.db.collection(oldestCollectionName).find().toArray()
  // const latestCollectionData = await mongoose.connection.db.collection(latestCollectionName).find().toArray()

  // res.status(200).json({ message: "Success", oldestSnapshot: { name: oldestCollectionName, data: oldestCollectionData }, latestSnapshot: { name: latestCollectionName, data: latestCollectionData } })
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
  //   const userData = new DataModel({
  //     username: item.playerName,
  //     total_level: item.totalLvl,
  //     attack: item.Attack,
  //     defense: item.Defense,
  //     strength: item.Strength,
  //     constitution: item.Constitution,
  //     ranged: item.Ranged,
  //     prayer: item.Prayer,
  //     magic: item.Magic,
  //     cooking: item.Cooking,
  //     woodcutting: item.Woodcutting,
  //     fletching: item.Fletching,
  //     fishing: item.Fishing,
  //     firemaking: item.Firemaking,
  //     crafting: item.Crafting,
  //     smithing: item.Smithing,
  //     mining: item.Mining,
  //     herblore: item.Herblore,
  //     agility: item.Agility,
  //     thieving: item.Thieving,
  //     slayer: item.Slayer,
  //     farming: item.Farming,
  //     runecrafting: item.Runecrafting,
  //     hunter: item.Hunter,
  //     construction: item.Construction,
  //     summoning: item.Summoning,
  //     dungeoneering: item.Dungeoneering,
  //     divination: item.Divination,
  //     invention: item.Invention,
  //     archaeology: item.Archaeology,
  //   })
  //   userData.save()
  //     .then()
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // });
  // res.status(200).send({ message: 'data inserted into db' })
}

module.exports = {
  getAllData,
  getSingleData,
  cleanData,
  getOldestAndLatestData
}