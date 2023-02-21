const Player = require('../models/clanDataModel')
const mongoose = require('mongoose')

// get all data
async function getAllData (req, res) {
    const players = await Player.find({})
    res.status(200).json(players)
}

// get a single data
async function getSingleData (req, res) {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such player"})
    }

    const player = await Player.findById(id)
    if (!player) {
        return res.status(404).json({error: "No such player"})
    }
    res.status(200).json(player)
}

module.exports = {
    getAllData,
    getSingleData
}