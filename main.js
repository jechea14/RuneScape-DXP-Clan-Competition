const axios = require('axios').default;

const skills = [
    "Attack",
    "Defense",
    "Strength",
    "Constitution",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecrafting",
    "Hunter",
    "Construction",
    "Summoning",
    "Dungeoneering",
    "Divination",
    "Invention",
    "Archaeology"
]

async function fetchClan() {
    const response = await axios.get('http://services.runescape.com/m=clan-hiscores/members_lite.ws?clanName=elite%20team%20killerz')
    return response.data
}

async function fetchPlayerData(player) {
    const response = await axios.get(`https://secure.runescape.com/m=hiscore/index_lite.ws?player=${player}`)
    return response.data

}

async function getUsernames() {
    const usernames = []
    const data = await fetchClan()
    const splitData = data.split('\n')
    for (let i = 1; i < splitData.length; i++) {
        usernames.push(splitData[i].split(',')[0].replaceAll('�', ' '))
    }
    console.log(usernames)
    return usernames
}

async function getPlayerData(usernames) {
    const etkData = []
    for (player of usernames) {
        try {
            console.log(player + ' - hiscores')
            const playerData = await fetchPlayerData(player)
            const splitPlayerData = playerData.split('\n')
            const totalLvl = parseInt(splitPlayerData[0].split(',')[1])
            const skillData = new Map()
            for (let i = 0; i < skills.length; i++) {
                if (splitPlayerData[i].split(',')[2] === '-1')
                    splitPlayerData[i].split(',')[2] = parseInt(0)
                skillData[skills[i]] = parseInt(splitPlayerData[i + 1].split(',')[2])
                // skillData.set(skills[i], parseInt(splitPlayerData[i + 1].split(',')[2]))
            }
            const playerName = player
            etkData.push({ playerName, totalLvl, ...skillData })
        } catch (error) {
            console.log(`Not found in hiscores`)
        }
    }
    console.log(etkData)
    return etkData
}

// getUsernames()
// getPlayerData(usernames)

module.exports = {
    getPlayerData,
    getUsernames
}
