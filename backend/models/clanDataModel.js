const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { RESULTS_COLLECTION, SNAPSHOTS_COLLECTION } = require("../misc.js")

const skillSchema = new Schema({
  attack: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  ranged: {
    type: Number,
    required: true,
  },
  prayer: {
    type: Number,
    required: true,
  },
  magic: {
    type: Number,
    required: true,
  },
  cooking: {
    type: Number,
    required: true,
  },
  woodcutting: {
    type: Number,
    required: true,
  },
  fletching: {
    type: Number,
    required: true,
  },
  fishing: {
    type: Number,
    required: true,
  },
  firemaking: {
    type: Number,
    required: true,
  },
  crafting: {
    type: Number,
    required: true,
  },
  smithing: {
    type: Number,
    required: true,
  },
  mining: {
    type: Number,
    required: true,
  },
  herblore: {
    type: Number,
    required: true,
  },
  agility: {
    type: Number,
    required: true,
  },
  thieving: {
    type: Number,
    required: true,
  },
  slayer: {
    type: Number,
    required: true,
  },
  farming: {
    type: Number,
    required: true,
  },
  runecrafting: {
    type: Number,
    required: true,
  },
  hunter: {
    type: Number,
    required: true,
  },
  construction: {
    type: Number,
    required: true,
  },
  summoning: {
    type: Number,
    required: true,
  },
  dungeoneering: {
    type: Number,
    required: true,
  },
  divination: {
    type: Number,
    required: true,
  },
  invention: {
    type: Number,
    required: true,
  },
  archaeology: {
    type: Number,
    required: true,
  },
  necromancy: {
    type: Number,
    required: true,
  },
});

const dxpResultSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    totalLevelBeforeDxp: {
      type: Number,
      required: true,
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
    xpDeltas: {
      type: skillSchema,
      required: true,
    },
    xpDeltasTotal: {
      type: Number,
      required: true
    },
    latestOverallXP: {
      type: Number,
      requireed: true,
    },
    latestXp: {
      type: skillSchema,
      required: true,
    },
    dxpCompResults: {
      type: skillSchema,
      required: true,
    },
    dxpComptotal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Schema : structure of the document (row)
const playerDataSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    total_level: {
      type: Number,
      required: true,
    },
    overallXp: {
      type: Number,
      required: true
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
    skillXP: [skillSchema],
  },
  { timestamps: true }
);

// Model : wrapper for collection
const Players = mongoose.model(
  SNAPSHOTS_COLLECTION,
  playerDataSchema
);
const PlayerResults = mongoose.model(
  RESULTS_COLLECTION,
  dxpResultSchema
);
module.exports = { Players, PlayerResults };
