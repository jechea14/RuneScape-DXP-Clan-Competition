const mongoose = require("mongoose");
require("dotenv").config();

const RESULTS_COLLECTION = "dxpresults-5-19-23";

// Retrieve all player data from db
async function getAllData(req, res) {
  try {
    // const usernames = await getUsernames()
    const getData = await mongoose.connection.db
      .collection(RESULTS_COLLECTION)
      .find()
      .toArray();
    // savePipelineResults(usernames)
    res.status(200).json({ data: getData });
  } catch (error) {
    console.log(error);
  }
}

// Retrieve individual player data from db
async function getSingleData(req, res) {
  const { id } = req.params;

  const player = await mongoose.connection.db
    .collection(RESULTS_COLLECTION)
    .find({ _id: id })
    .toArray();
  if (!player) {
    return res.status(404).json({ error: "No such player" });
  }
  res.status(200).json(player);
}

// function authMiddleware(req, res, next) {
//   const apiKeyHeader = req.headers['x-api-key']
//   if (!apiKeyHeader || apiKeyHeader !== process.env.API_KEY) {
//     console.log(apiKeyHeader, process.env.API_KEY)
//     return res.status(401).send("401 unauthorized")
//   }
//   next()
// }

module.exports = {
  getAllData,
  getSingleData,
  // authMiddleware
};
