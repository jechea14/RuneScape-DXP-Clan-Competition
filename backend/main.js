const axios = require('axios').default;

const skills = [
    "attack",
    "defense",
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
    "archaeology"
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
            const total_level = parseInt(splitPlayerData[0].split(',')[1])
            const skillData = {}
            for (let i = 0; i < skills.length; i++) {
                // splitPlayerData: skill, rank, experience
                if (splitPlayerData[i].split(',')[2] === '-1')
                    splitPlayerData[i].split(',')[2] = parseInt(0)
                skillData[skills[i]] = parseInt(splitPlayerData[i + 1].split(',')[2])

                // skillData.set(skills[i], parseInt(splitPlayerData[i + 1].split(',')[2]))
            }
            const username = player
            etkData.push({ username, total_level, skillXP: [skillData] })
        } catch (error) {
            console.log(`Not found in hiscores`)
        }
    }
    console.log(etkData)
    return etkData
}

module.exports = {
    getPlayerData,
    getUsernames,
    fetchPlayerData
}
