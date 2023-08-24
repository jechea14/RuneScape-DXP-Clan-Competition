const mongoose = require("mongoose");
const { RESULTS_COLLECTION } = require("../misc.js");

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

module.exports = {
  getAllData,
  getSingleData,
  // authMiddleware
};
