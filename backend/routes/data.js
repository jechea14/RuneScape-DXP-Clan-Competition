const express = require("express");
require("dotenv").config();
const router = express.Router();
const {
  getAllData,
  getSingleData,
  // authMiddleware
} = require("../controllers/playerDataController");

// GET all collections and all data in each collection
router.get("/", getAllData);

// GET single player data
router.get("/player/:id", getSingleData);

module.exports = router;
