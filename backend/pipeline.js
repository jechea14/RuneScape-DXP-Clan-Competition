module.exports = function (username) {
  return [
    {
      '$match': {
        'username': username
      }
    }, {
      '$sort': {
        'createdAt': 1
      }
    }, {
      '$group': {
        '_id': '$username',
        'oldestDoc': {
          '$first': '$$ROOT'
        },
        'latestDoc': {
          '$last': '$$ROOT'
        }
      }
    }, {
      '$project': {
        '_id': 0,
        'username': '$_id',
        'totalLevel': '$oldestDoc.total_level',
        'oldestSkillXP': {
          '$arrayElemAt': [
            '$oldestDoc.skillXP', 0
          ]
        },
        'latestSkillXP': {
          '$arrayElemAt': [
            '$latestDoc.skillXP', 0
          ]
        }
      }
    }, {
      '$project': {
        'username': 1,
        'totalLevel': '$totalLevel',
        'latestXp': '$latestSkillXP',
        'attackDiff': {
          '$subtract': [
            '$latestSkillXP.attack', '$oldestSkillXP.attack'
          ]
        },
        'defenseDiff': {
          '$subtract': [
            '$latestSkillXP.defense', '$oldestSkillXP.defense'
          ]
        },
        'strengthDiff': {
          '$subtract': [
            '$latestSkillXP.strength', '$oldestSkillXP.strength'
          ]
        },
        'constitutionDiff': {
          '$subtract': [
            '$latestSkillXP.constitution', '$oldestSkillXP.constitution'
          ]
        },
        'rangedDiff': {
          '$subtract': [
            '$latestSkillXP.ranged', '$oldestSkillXP.ranged'
          ]
        },
        'prayerDiff': {
          '$subtract': [
            '$latestSkillXP.prayer', '$oldestSkillXP.prayer'
          ]
        },
        'magicDiff': {
          '$subtract': [
            '$latestSkillXP.magic', '$oldestSkillXP.magic'
          ]
        },
        'cookingDiff': {
          '$subtract': [
            '$latestSkillXP.cooking', '$oldestSkillXP.cooking'
          ]
        },
        'woodcuttingDiff': {
          '$subtract': [
            '$latestSkillXP.woodcutting', '$oldestSkillXP.woodcutting'
          ]
        },
        'fletchingDiff': {
          '$subtract': [
            '$latestSkillXP.fletching', '$oldestSkillXP.fletching'
          ]
        },
        'fishingDiff': {
          '$subtract': [
            '$latestSkillXP.fishing', '$oldestSkillXP.fishing'
          ]
        },
        'firemakingDiff': {
          '$subtract': [
            '$latestSkillXP.firemaking', '$oldestSkillXP.firemaking'
          ]
        },
        'craftingDiff': {
          '$subtract': [
            '$latestSkillXP.crafting', '$oldestSkillXP.crafting'
          ]
        },
        'smithingDiff': {
          '$subtract': [
            '$latestSkillXP.smithing', '$oldestSkillXP.smithing'
          ]
        },
        'miningDiff': {
          '$subtract': [
            '$latestSkillXP.mining', '$oldestSkillXP.mining'
          ]
        },
        'herbloreDiff': {
          '$subtract': [
            '$latestSkillXP.herblore', '$oldestSkillXP.herblore'
          ]
        },
        'agilityDiff': {
          '$subtract': [
            '$latestSkillXP.agility', '$oldestSkillXP.agility'
          ]
        },
        'thievingDiff': {
          '$subtract': [
            '$latestSkillXP.thieving', '$oldestSkillXP.thieving'
          ]
        },
        'slayerDiff': {
          '$subtract': [
            '$latestSkillXP.slayer', '$oldestSkillXP.slayer'
          ]
        },
        'farmingDiff': {
          '$subtract': [
            '$latestSkillXP.farming', '$oldestSkillXP.farming'
          ]
        },
        'runecraftingDiff': {
          '$subtract': [
            '$latestSkillXP.runecrafting', '$oldestSkillXP.runecrafting'
          ]
        },
        'hunterDiff': {
          '$subtract': [
            '$latestSkillXP.hunter', '$oldestSkillXP.hunter'
          ]
        },
        'constructionDiff': {
          '$subtract': [
            '$latestSkillXP.construction', '$oldestSkillXP.construction'
          ]
        },
        'summoningDiff': {
          '$subtract': [
            '$latestSkillXP.summoning', '$oldestSkillXP.summoning'
          ]
        },
        'dungeoneeringDiff': {
          '$subtract': [
            '$latestSkillXP.dungeoneering', '$oldestSkillXP.dungeoneering'
          ]
        },
        'divinationDiff': {
          '$subtract': [
            '$latestSkillXP.divination', '$oldestSkillXP.divination'
          ]
        },
        'inventionDiff': {
          '$subtract': [
            '$latestSkillXP.invention', '$oldestSkillXP.invention'
          ]
        },
        'archaeologyDiff': {
          '$subtract': [
            '$latestSkillXP.archaeology', '$oldestSkillXP.archaeology'
          ]
        }
      }
    }, {
      '$project': {
        '_id': '$username',
        'totalLevel': '$totalLevel',
        'latestXp': '$latestXp',
        'attackResult': {
          '$multiply': [
            '$attackDiff', 0.5
          ]
        },
        'defenseResult': {
          '$multiply': [
            '$defenseDiff', 0.5
          ]
        },
        'strengthResult': {
          '$multiply': [
            '$strengthDiff', 0.5
          ]
        },
        'constitutionResult': {
          '$multiply': [
            '$constitutionDiff', 0.5
          ]
        },
        'rangedResult': {
          '$multiply': [
            '$rangedDiff', 0.5
          ]
        },
        'prayerResult': {
          '$multiply': [
            '$prayerDiff', 2
          ]
        },
        'magicResult': {
          '$multiply': [
            '$magicDiff', 0.5
          ]
        },
        'cookingResult': {
          '$multiply': [
            '$cookingDiff', 2
          ]
        },
        'woodcuttingResult': {
          '$multiply': [
            '$woodcuttingDiff', 3
          ]
        },
        'fletchingResult': {
          '$multiply': [
            '$fletchingDiff', 1
          ]
        },
        'fishingResult': {
          '$multiply': [
            '$fishingDiff', 3
          ]
        },
        'firemakingResult': {
          '$multiply': [
            '$firemakingDiff', 2
          ]
        },
        'craftingResult': {
          '$multiply': [
            '$craftingDiff', 1
          ]
        },
        'smithingResult': {
          '$multiply': [
            '$smithingDiff', 2
          ]
        },
        'miningResult': {
          '$multiply': [
            '$miningDiff', 3
          ]
        },
        'herbloreResult': {
          '$multiply': [
            '$herbloreDiff', 0.5
          ]
        },
        'agilityResult': {
          '$multiply': [
            '$agilityDiff', 3
          ]
        },
        'thievingResult': {
          '$multiply': [
            '$thievingDiff', 1
          ]
        },
        'slayerResult': {
          '$multiply': [
            '$slayerDiff', 2
          ]
        },
        'farmingResult': {
          '$multiply': [
            '$farmingDiff', 0.5
          ]
        },
        'runecraftingResult': {
          '$multiply': [
            '$runecraftingDiff', 3
          ]
        },
        'hunterResult': {
          '$multiply': [
            '$hunterDiff', 2
          ]
        },
        'constructionResult': {
          '$multiply': [
            '$constructionDiff', 2
          ]
        },
        'summoningResult': {
          '$multiply': [
            '$summoningDiff', 0.5
          ]
        },
        'dungeoneeringResult': {
          '$multiply': [
            '$dungeoneeringDiff', 0.5
          ]
        },
        'divinationResult': {
          '$multiply': [
            '$divinationDiff', 3
          ]
        },
        'inventionResult': {
          '$multiply': [
            '$inventionDiff', 0.5
          ]
        },
        'archaeologyResult': {
          '$multiply': [
            '$archaeologyDiff', 0.5
          ]
        },
        'xpDeltas': [
          {
            'attackDiff': '$attackDiff'
          }, {
            'defenseDiff': '$defenseDiff'
          }, {
            'strengthDiff': '$strengthDiff'
          }, {
            'constitutionDiff': '$constitutionDiff'
          }, {
            'rangedDiff': '$rangedDiff'
          }, {
            'prayerDiff': '$prayerDiff'
          }, {
            'magicDiff': '$magicDiff'
          }, {
            'cookingDiff': '$cookingDiff'
          }, {
            'woodcuttingDiff': '$woodcuttingDiff'
          }, {
            'fletchingDiff': '$fletchingDiff'
          }, {
            'fishingDiff': '$fishingDiff'
          }, {
            'firemakingDiff': '$firemakingDiff'
          }, {
            'craftingDiff': '$craftingDiff'
          }, {
            'smithingDiff': '$smithingDiff'
          }, {
            'miningDiff': '$miningDiff'
          }, {
            'herbloreDiff': '$herbloreDiff'
          }, {
            'agilityDiff': '$agilityDiff'
          }, {
            'thievingDiff': '$thievingDiff'
          }, {
            'slayerDiff': '$slayerDiff'
          }, {
            'farmingDiff': '$farmingDiff'
          }, {
            'runecraftingDiff': '$runecraftingDiff'
          }, {
            'hunterDiff': '$hunterDiff'
          }, {
            'constructionDiff': '$constructionDiff'
          }, {
            'summoningDiff': '$summoningDiff'
          }, {
            'dungeoneeringDiff': '$dungeoneeringDiff'
          }, {
            'divinationDiff': '$divinationDiff'
          }, {
            'inventionDiff': '$inventionDiff'
          }, {
            'archaeologyDiff': '$archaeologyDiff'
          }
        ]
      }
    }, {
      '$project': {
        'totalLevelBeforeDxp': '$totalLevel',
        'xpDeltas': '$xpDeltas',
        'latestXp': '$latestXp',
        'dxpCompResults': [
          {
            'attackResult': '$attackResult'
          }, {
            'defenseResult': '$defenseResult'
          }, {
            'strengthResult': '$strengthResult'
          }, {
            'constitutionResult': '$constitutionResult'
          }, {
            'rangedResult': '$rangedResult'
          }, {
            'prayerResult': '$prayerResult'
          }, {
            'magicResult': '$magicResult'
          }, {
            'cookingResult': '$cookingResult'
          }, {
            'woodcuttingResult': '$woodcuttingResult'
          }, {
            'fletchingResult': '$fletchingResult'
          }, {
            'fishingResult': '$fishingResult'
          }, {
            'firemakingResult': '$firemakingResult'
          }, {
            'craftingResult': '$craftingResult'
          }, {
            'smithingResult': '$smithingResult'
          }, {
            'miningResult': '$miningResult'
          }, {
            'herbloreResult': '$herbloreResult'
          }, {
            'agilityResult': '$agilityResult'
          }, {
            'thievingResult': '$thievingResult'
          }, {
            'slayerResult': '$slayerResult'
          }, {
            'farmingResult': '$farmingResult'
          }, {
            'runecraftingResult': '$runecraftingResult'
          }, {
            'hunterResult': '$hunterResult'
          }, {
            'constructionResult': '$constructionResult'
          }, {
            'summoningResult': '$summoningResult'
          }, {
            'dungeoneeringResult': '$dungeoneeringResult'
          }, {
            'divinationResult': '$divinationResult'
          }, {
            'inventionResult': '$inventionResult'
          }, {
            'archaeologyResult': '$archaeologyResult'
          }
        ],
        'dxpComptotal': {
          '$add': [
            '$attackResult', '$defenseResult', '$strengthResult', '$constitutionResult', '$rangedResult', '$prayerResult', '$magicResult', '$cookingResult', '$woodcuttingResult', '$fletchingResult', '$fishingResult', '$firemakingResult', '$craftingResult', '$smithingResult', '$miningResult', '$herbloreResult', '$agilityResult', '$thievingResult', '$slayerResult', '$farmingResult', '$runecraftingResult', '$hunterResult', '$constructionResult', '$summoningResult', '$dungeoneeringResult', '$divinationResult', '$inventionResult', '$archaeologyResult'
          ]
        }
      }
    }
  ];

}
