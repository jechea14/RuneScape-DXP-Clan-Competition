require('dotenv').config()
const express = require('express')

const { getPlayerData, getUsernames } = require('./main')
const app = express()
// const mongoose = require('mongoose')

// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on("error", (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))
// app.use(express.json())

// const clanDataSchema = new mongoose.Schema({
    
// })

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/', (request, response) => {
    response.send('hello world!!')
})

app.get('/api/data', async (req, res) => {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)

    res.status(200).json(data)
})


app.listen(3000)
