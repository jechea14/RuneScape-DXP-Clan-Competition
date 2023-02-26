const createModel = require('../models/clanDataModel')
const { getPlayerData, getUsernames } = require('../main')
const mongoose = require('mongoose')

// get all data
async function getAllData(req, res) {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionPromises = collections.map(collection => {
      const Model = mongoose.model(collection.name, playerDataSchema);
      return Model.find().exec();
    });
    const results = await Promise.all(collectionPromises);
    const collectionsData = collections.map((collection, index) => ({
      name: collection.name,
      data: results[index]
    }));
    res.status(200).json({ collections: collectionsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOldestAndLatestData (req, res) {
    mongoose.connection.db.listCollections().toArray((err, collections) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          const collectionPromises = collections.map(collection => {
            const model = mongoose.model(collection.name, new mongoose.Schema({}));
            return model.find().exec();
          });
          Promise.all(collectionPromises).then(results => {
            const collectionsData = collections.map((collection, index) => ({
              name: collection.name,
              data: results[index]
            }));
            res.status(200).json({ oldestCollection: collectionsData[0], latestCollection: collectionsData[collectionsData.length - 1]});
          }).catch(error => {
            res.status(500).json({ error: error.message });
          });
        }
      });
}

// get a single data
async function getSingleData (req, res) {
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

async function cleanData (req, res) {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)
    const DataModel = createModel(data)

    data.forEach(item => {
        const userData = new DataModel({
            username: item.playerName,
            total_level: item.totalLvl,
            attack: item.Attack,
            defense: item.Defense,
            strength: item.Strength,
            constitution: item.Constitution,
            ranged: item.Ranged,
            prayer: item.Prayer,
            magic: item.Magic,
            cooking: item.Cooking,
            woodcutting: item.Woodcutting,
            fletching: item.Fletching,
            fishing: item.Fishing,
            firemaking: item.Firemaking,
            crafting: item.Crafting,
            smithing: item.Smithing,
            mining: item.Mining,
            herblore: item.Herblore,
            agility: item.Agility,
            thieving: item.Thieving,
            slayer: item.Slayer,
            farming: item.Farming,
            runecrafting: item.Runecrafting,
            hunter: item.Hunter,
            construction: item.Construction,
            summoning: item.Summoning,
            dungeoneering: item.Dungeoneering,
            divination: item.Divination,
            invention: item.Invention,
            archaeology: item.Archaeology,
        })
        userData.save()
            .then()
            .catch((err) => {
            console.log(err)
            })
        });
    res.status(200).send({message: 'data inserted into db'})
}

module.exports = {
    getAllData,
    getSingleData,
    cleanData,
    getOldestAndLatestData
}