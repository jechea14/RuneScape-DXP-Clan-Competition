require('dotenv').config()
const express = require('express')

const { getPlayerData, getUsernames } = require('./main')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())

const clanDataSchema = new mongoose.Schema({
    
})

app.get('/', (request, response) => {
    response.send('hello world!!')
})

app.get('/data', async (req, res) => {
    const usernames = await getUsernames()
    const data = await getPlayerData(usernames)

    res.json(data)
})


app.listen(3000)
