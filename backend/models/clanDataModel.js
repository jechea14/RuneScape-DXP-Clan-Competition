const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = new Schema({
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
})

const dxpResultSchema = new mongoose.Schema({
    _id: String,
    totalLevelBeforeDxp: Number,
    xpDeltas: [{
        attackDiff: Number,
        defenseDiff: Number,
        strengthDiff: Number,
        constitutionDiff: Number,
        rangedDiff: Number,
        prayerDiff: Number,
        magicDiff: Number,
        cookingDiff: Number,
        woodcuttingDiff: Number,
        fletchingDiff: Number,
        fishingDiff: Number,
        firemakingDiff: Number,
        craftingDiff: Number,
        smithingDiff: Number,
        miningDiff: Number,
        herbloreDiff: Number,
        agilityDiff: Number,
        thievingDiff: Number,
        slayerDiff: Number,
        farmingDiff: Number,
        runecraftingDiff: Number,
        hunterDiff: Number,
        constructionDiff: Number,
        summoningDiff: Number,
        dungeoneeringDiff: Number,
        divinationDiff: Number,
        inventionDiff: Number,
        archaeologyDiff: Number
    }],
    latestXp: [skillSchema],
    dxpCompResults: [{
        attackResult: Number,
        defenseResult: Number,
        strengthResult: Number,
        constitutionResult: Number,
        rangedResult: Number,
        prayerResult: Number,
        magicResult: Number,
        cookingResult: Number,
        woodcuttingResult: Number,
        fletchingResult: Number,
        fishingResult: Number,
        firemakingResult: Number,
        craftingResult: Number,
        smithingResult: Number,
        miningResult: Number,
        herbloreResult: Number,
        agilityResult: Number,
        thievingResult: Number,
        slayerResult: Number,
        farmingResult: Number,
        runecraftingResult: Number,
        hunterResult: Number,
        constructionResult: Number,
        summoningResult: Number,
        dungeoneeringResult: Number,
        divinationResult: Number,
        inventionResult: Number,
        archaeologyResult: Number
    }],
    dxpComptotal: Number
}, { timestamps: true });

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
    skillXP: [skillSchema]

}, { timestamps: true })

// Model : wrapper for collection
const Players = mongoose.model('snapshots', playerDataSchema)
const PlayerResults = mongoose.model('DxpResults', dxpResultSchema)
module.exports = { Players, PlayerResults }
