require("dotenv").config();
const { Players, PlayerResults } = require("./models/clanDataModel");
const { SNAPSHOTS_COLLECTION } = require("./misc")
const pipeline = require("./pipeline");
const mongoose = require("mongoose");
const axios = require("axios").default;

const skills = [
  "attack",
  "defence",
  "strength",
  "constitution",
  "ranged",
  "prayer",
  "magic",
  "cooking",
  "woodcutting",
  "fletching",
  "fishing",
  "firemaking",
  "crafting",
  "smithing",
  "mining",
  "herblore",
  "agility",
  "thieving",
  "slayer",
  "farming",
  "runecrafting",
  "hunter",
  "construction",
  "summoning",
  "dungeoneering",
  "divination",
  "invention",
  "archaeology",
  "necromancy",
];

// Fetch clan from RuneScape API
async function fetchClan() {
  try {
    const response = await axios.get(
      "http://services.runescape.com/m=clan-hiscores/members_lite.ws?clanName=elite%20team%20killerz"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch individual player data from RuneScape API
async function fetchPlayerData(player) {
  try {
    const response = await axios.get(
      `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${player}`
    );
    return response.data;
  } catch (error) {
    console.log(`Unable to fetch ${player}`);
  }
}

// Fetch avatar picture from RuneScape API
async function fetchAvatarPicture(player) {
  try {
    const response = await axios.get(
      `http://secure.runescape.com/m=avatar-rs/${player}/chat.png`,
      {
        responseType: "arraybuffer",
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch usernames from clan, clean data to only get usernames
async function getUsernames() {
  const usernames = [];
  const data = await fetchClan();
  const splitData = data.split("\n");
  for (let i = 1; i < splitData.length; i++) {
    usernames.push(splitData[i].split(",")[0].replace(/�/g, " "));
  }
  return usernames;
}

// Fetch player data from rs API then clean data for name, total, avatar, skill xp
async function getPlayerData(usernames) {
  const etkData = [];
  for (let player of usernames) {
    try {
      console.log(player + " - hiscores");
      const playerData = await fetchPlayerData(player);
      const splitPlayerData = playerData.split("\n");
      const total_level = parseInt(splitPlayerData[0].split(",")[1]);
      const overallXp = parseInt(splitPlayerData[0].split(",")[2])
      const skillData = {};
      const avatarPicture = await fetchAvatarPicture(player);
      for (let i = 1; i < skills.length + 1; i++) {
        // splitPlayerData: skill, rank, experience
        let exp = splitPlayerData[i].split(",")[2];
        if (exp === "-1") exp = parseInt(0);
        skillData[skills[i - 1]] = parseInt(exp);
      }
      const username = player;
      etkData.push({
        username,
        total_level,
        overallXp,
        avatar: {
          data: avatarPicture,
          contentType: "image/png",
        },
        skillXP: [skillData],
      });
    } catch (error) {
      console.log(`Not found in hiscores`);
    }
  }
  return etkData;
}

// Save pipeline results to a collection from the model. Update existing data or create data if data does not exist

async function savePipelineResults(usernames) {
  try {
    for (let user of usernames) {
      const result = await mongoose.connection.db
        .collection(SNAPSHOTS_COLLECTION)
        .aggregate(pipeline(user))
        .toArray();
      // skips if array is empty, means no data for user
      if (result.length === 0) {
        continue;
      }
      // finds existing data for user then updates it, creates new document for user if user does not exist
      else {
        const existingResult = await PlayerResults.findOne({
          _id: result[0]._id,
        });
        if (existingResult) {
          await PlayerResults.findOneAndUpdate(
            { _id: result[0]._id },
            result[0]
          );
          console.log(`updating ${result[0]._id}`);
        } else {
          await PlayerResults.create(result[0]);
          console.log(`creating ${user}`);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// Fetch usernames, get and clean data, create Player models with data,
// save pipeline results of each username and respective data
async function cleanData() {
  try {
    const usernames = await getUsernames();
    const data = await getPlayerData(usernames);
    // creates player data then saves into db collection
    Players.create(data)
      .then()
      .catch((err) => {
        console.log(err);
      });

    await savePipelineResults(usernames);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  cleanData,
};
