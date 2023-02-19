const mongoose = require('mongoose')
const Schema = mongoose.Schema()

// Schema : structure of the document (row)
const playerDataSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    total_level: {
        type: Number,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    ranged: {
        type: Number,
        required: true
    },
    prayer: {
        type: Number,
        required: true
    },
    magic: {
        type: Number,
        required: true
    },
    cooking: {
        type: Number,
        required: true
    },
    woodcutting: {
        type: Number,
        required: true
    },
    fletching: {
        type: Number,
        required: true
    },
    fishing: {
        type: Number,
        required: true
    },
    firemaking: {
        type: Number,
        required: true
    },
    crafting: {
        type: Number,
        required: true
    },
    smithing: {
        type: Number,
        required: true
    },
    mining: {
        type: Number,
        required: true
    },
    herblore: {
        type: Number,
        required: true
    },
    agility: {
        type: Number,
        required: true
    },
    thieving: {
        type: Number,
        required: true
    },
    slayer: {
        type: Number,
        required: true
    },
    farming: {
        type: Number,
        required: true
    },
    runecrafting: {
        type: Number,
        required: true
    },
    hunter: {
        type: Number,
        required: true
    },
    construction: {
        type: Number,
        required: true
    },
    summoning: {
        type: Number,
        required: true
    },
    dungeoneering: {
        type: Number,
        required: true
    },
    divination: {
        type: Number,
        required: true
    },
    invention: {
        type: Number,
        required: true
    },
    archaeology: {
        type: Number,
        required: true
    },

}, {timestamps: true})

// Model
const PlayerData = mongoose.model('Player', playerDataSchema)

module.exports = PlayerData