module.exports = function(username) {
    return [
        {
          '$match': {
            'username': user
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
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.strength', '$oldestSkillXP.strength'
                  ]
                }, 1
              ]
            }, 
            'constitutionDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.constitution', '$oldestSkillXP.constitution'
                  ]
                }, 1
              ]
            }, 
            'rangedDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.ranged', '$oldestSkillXP.ranged'
                  ]
                }, 1
              ]
            }, 
            'prayerDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.prayer', '$oldestSkillXP.prayer'
                  ]
                }, 1
              ]
            }, 
            'magicDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.magic', '$oldestSkillXP.magic'
                  ]
                }, 1
              ]
            }, 
            'cookingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.cooking', '$oldestSkillXP.cooking'
                  ]
                }, 1
              ]
            }, 
            'woodcuttingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.woodcutting', '$oldestSkillXP.woodcutting'
                  ]
                }, 1
              ]
            }, 
            'fletchingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.fletching', '$oldestSkillXP.fletching'
                  ]
                }, 1
              ]
            }, 
            'fishingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.fishing', '$oldestSkillXP.fishing'
                  ]
                }, 1
              ]
            }, 
            'firemakingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.firemaking', '$oldestSkillXP.firemaking'
                  ]
                }, 1
              ]
            }, 
            'craftingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.crafting', '$oldestSkillXP.crafting'
                  ]
                }, 1
              ]
            }, 
            'smithingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.smithing', '$oldestSkillXP.smithing'
                  ]
                }, 1
              ]
            }, 
            'miningDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.mining', '$oldestSkillXP.mining'
                  ]
                }, 1
              ]
            }, 
            'herbloreDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.herblore', '$oldestSkillXP.herblore'
                  ]
                }, 1
              ]
            }, 
            'agilityDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.agility', '$oldestSkillXP.agility'
                  ]
                }, 1
              ]
            }, 
            'thievingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.thieving', '$oldestSkillXP.thieving'
                  ]
                }, 1
              ]
            }, 
            'slayerDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.slayer', '$oldestSkillXP.slayer'
                  ]
                }, 1
              ]
            }, 
            'farmingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.farming', '$oldestSkillXP.farming'
                  ]
                }, 1
              ]
            }, 
            'runecraftingDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.runecrafting', '$oldestSkillXP.runecrafting'
                  ]
                }, 1
              ]
            }, 
            'hunterDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.hunter', '$oldestSkillXP.hunter'
                  ]
                }, 1
              ]
            }, 
            'constructionDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.construction', '$oldestSkillXP.construction'
                  ]
                }, 1
              ]
            }, 
            'summoningDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.summoning', '$oldestSkillXP.summoning'
                  ]
                }, 1
              ]
            }, 
            'dungeoneeringDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.dungeoneering', '$oldestSkillXP.dungeoneering'
                  ]
                }, 1
              ]
            }, 
            'divinationDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.divination', '$oldestSkillXP.divination'
                  ]
                }, 1
              ]
            }, 
            'inventionDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.invention', '$oldestSkillXP.invention'
                  ]
                }, 1
              ]
            }, 
            'archaeologyDiff': {
              '$multiply': [
                {
                  '$subtract': [
                    '$latestSkillXP.archaeology', '$oldestSkillXP.archaeology'
                  ]
                }, 1
              ]
            }
          }
        }, {
          '$project': {
            '_id': '$username', 
            'totalLevel': '$totalLevel', 
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
                'constitutionDiff': '$constructionDiff'
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
