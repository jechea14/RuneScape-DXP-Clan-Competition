const { use } = require("./routes/data");

module.exports = function (username) {
  return [
    {
      $match: {
        username: username,
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
    {
      $group: {
        _id: "$username",
        oldestDoc: {
          $first: "$$ROOT",
        },
        latestDoc: {
          $last: "$$ROOT",
        },
      },
    },
    {
      $project: {
        username: 1,
        _id: "$_id",
        totalLevel: "$oldestDoc.total_level",
        avatar: "$latestDoc.avatar",
        oldestSkillXP: {
          $arrayElemAt: ["$oldestDoc.skillXP", 0],
        },
        latestSkillXP: {
          $arrayElemAt: ["$latestDoc.skillXP", 0],
        },
      },
    },
    {
      $project: {
        _id: "$_id",
        totalLevel: "$totalLevel",
        avatar: "$avatar",
        latestXp: "$latestSkillXP",
        attackDiff: {
          $subtract: ["$latestSkillXP.attack", "$oldestSkillXP.attack"],
        },
        defenceDiff: {
          $subtract: ["$latestSkillXP.defence", "$oldestSkillXP.defence"],
        },
        strengthDiff: {
          $subtract: ["$latestSkillXP.strength", "$oldestSkillXP.strength"],
        },
        constitutionDiff: {
          $subtract: [
            "$latestSkillXP.constitution",
            "$oldestSkillXP.constitution",
          ],
        },
        rangedDiff: {
          $subtract: ["$latestSkillXP.ranged", "$oldestSkillXP.ranged"],
        },
        prayerDiff: {
          $subtract: ["$latestSkillXP.prayer", "$oldestSkillXP.prayer"],
        },
        magicDiff: {
          $subtract: ["$latestSkillXP.magic", "$oldestSkillXP.magic"],
        },
        cookingDiff: {
          $subtract: ["$latestSkillXP.cooking", "$oldestSkillXP.cooking"],
        },
        woodcuttingDiff: {
          $subtract: [
            "$latestSkillXP.woodcutting",
            "$oldestSkillXP.woodcutting",
          ],
        },
        fletchingDiff: {
          $subtract: ["$latestSkillXP.fletching", "$oldestSkillXP.fletching"],
        },
        fishingDiff: {
          $subtract: ["$latestSkillXP.fishing", "$oldestSkillXP.fishing"],
        },
        firemakingDiff: {
          $subtract: ["$latestSkillXP.firemaking", "$oldestSkillXP.firemaking"],
        },
        craftingDiff: {
          $subtract: ["$latestSkillXP.crafting", "$oldestSkillXP.crafting"],
        },
        smithingDiff: {
          $subtract: ["$latestSkillXP.smithing", "$oldestSkillXP.smithing"],
        },
        miningDiff: {
          $subtract: ["$latestSkillXP.mining", "$oldestSkillXP.mining"],
        },
        herbloreDiff: {
          $subtract: ["$latestSkillXP.herblore", "$oldestSkillXP.herblore"],
        },
        agilityDiff: {
          $subtract: ["$latestSkillXP.agility", "$oldestSkillXP.agility"],
        },
        thievingDiff: {
          $subtract: ["$latestSkillXP.thieving", "$oldestSkillXP.thieving"],
        },
        slayerDiff: {
          $subtract: ["$latestSkillXP.slayer", "$oldestSkillXP.slayer"],
        },
        farmingDiff: {
          $subtract: ["$latestSkillXP.farming", "$oldestSkillXP.farming"],
        },
        runecraftingDiff: {
          $subtract: [
            "$latestSkillXP.runecrafting",
            "$oldestSkillXP.runecrafting",
          ],
        },
        hunterDiff: {
          $subtract: ["$latestSkillXP.hunter", "$oldestSkillXP.hunter"],
        },
        constructionDiff: {
          $subtract: [
            "$latestSkillXP.construction",
            "$oldestSkillXP.construction",
          ],
        },
        summoningDiff: {
          $subtract: ["$latestSkillXP.summoning", "$oldestSkillXP.summoning"],
        },
        dungeoneeringDiff: {
          $subtract: [
            "$latestSkillXP.dungeoneering",
            "$oldestSkillXP.dungeoneering",
          ],
        },
        divinationDiff: {
          $subtract: ["$latestSkillXP.divination", "$oldestSkillXP.divination"],
        },
        inventionDiff: {
          $subtract: ["$latestSkillXP.invention", "$oldestSkillXP.invention"],
        },
        archaeologyDiff: {
          $subtract: [
            "$latestSkillXP.archaeology",
            "$oldestSkillXP.archaeology",
          ],
        },
        necromancyDiff: {
          $subtract: ["$latestSkillXP.necromancy", "$oldestSkillXP.necromancy"],
        },
      },
    },
    {
      $project: {
        _id: "$_id",
        totalLevel: "$totalLevel",
        avatar: "$avatar",
        latestXp: "$latestXp",
        attackResult: {
          $multiply: ["$attackDiff", 0.5],
        },
        defenceResult: {
          $multiply: ["$defenceDiff", 0.5],
        },
        strengthResult: {
          $multiply: ["$strengthDiff", 0.5],
        },
        constitutionResult: {
          $multiply: ["$constitutionDiff", 0.5],
        },
        rangedResult: {
          $multiply: ["$rangedDiff", 0.5],
        },
        prayerResult: {
          $multiply: ["$prayerDiff", 2],
        },
        magicResult: {
          $multiply: ["$magicDiff", 0.5],
        },
        cookingResult: {
          $multiply: ["$cookingDiff", 2],
        },
        woodcuttingResult: {
          $multiply: ["$woodcuttingDiff", 3],
        },
        fletchingResult: {
          $multiply: ["$fletchingDiff", 1],
        },
        fishingResult: {
          $multiply: ["$fishingDiff", 3],
        },
        firemakingResult: {
          $multiply: ["$firemakingDiff", 2],
        },
        craftingResult: {
          $multiply: ["$craftingDiff", 1],
        },
        smithingResult: {
          $multiply: ["$smithingDiff", 2],
        },
        miningResult: {
          $multiply: ["$miningDiff", 3],
        },
        herbloreResult: {
          $multiply: ["$herbloreDiff", 0.5],
        },
        agilityResult: {
          $multiply: ["$agilityDiff", 3],
        },
        thievingResult: {
          $multiply: ["$thievingDiff", 1],
        },
        slayerResult: {
          $multiply: ["$slayerDiff", 2],
        },
        farmingResult: {
          $multiply: ["$farmingDiff", 0.5],
        },
        runecraftingResult: {
          $multiply: ["$runecraftingDiff", 3],
        },
        hunterResult: {
          $multiply: ["$hunterDiff", 2],
        },
        constructionResult: {
          $multiply: ["$constructionDiff", 2],
        },
        summoningResult: {
          $multiply: ["$summoningDiff", 0.5],
        },
        dungeoneeringResult: {
          $multiply: ["$dungeoneeringDiff", 0.5],
        },
        divinationResult: {
          $multiply: ["$divinationDiff", 3],
        },
        inventionResult: {
          $multiply: ["$inventionDiff", 0.5],
        },
        archaeologyResult: {
          $multiply: ["$archaeologyDiff", 0.5],
        },
        necromancyResult: {
          $multiply: ["$necromancyDiff", 0.5],
        },
        xpDeltas: {
          attack: "$attackDiff",
          defence: "$defenceDiff",
          strength: "$strengthDiff",
          constitution: "$constitutionDiff",
          ranged: "$rangedDiff",
          prayer: "$prayerDiff",
          magic: "$magicDiff",
          cooking: "$cookingDiff",
          woodcutting: "$woodcuttingDiff",
          fletching: "$fletchingDiff",
          fishing: "$fishingDiff",
          firemaking: "$firemakingDiff",
          crafting: "$craftingDiff",
          smithing: "$smithingDiff",
          mining: "$miningDiff",
          herblore: "$herbloreDiff",
          agility: "$agilityDiff",
          thieving: "$thievingDiff",
          slayer: "$slayerDiff",
          farming: "$farmingDiff",
          runecrafting: "$runecraftingDiff",
          hunter: "$hunterDiff",
          construction: "$constructionDiff",
          summoning: "$summoningDiff",
          dungeoneering: "$dungeoneeringDiff",
          divination: "$divinationDiff",
          invention: "$inventionDiff",
          archaeology: "$archaeologyDiff",
          necromancy: "$necromancyDiff",
        },
      },
    },
    {
      $project: {
        _id: "$_id",
        totalLevelBeforeDxp: "$totalLevel",
        avatar: "$avatar",
        xpDeltas: "$xpDeltas",
        latestXp: "$latestXp",
        dxpCompResults: {
          attack: "$attackResult",
          defence: "$defenceResult",
          strength: "$strengthResult",
          constitution: "$constitutionResult",
          ranged: "$rangedResult",
          prayer: "$prayerResult",
          magic: "$magicResult",
          cooking: "$cookingResult",
          woodcutting: "$woodcuttingResult",
          fletching: "$fletchingResult",
          fishing: "$fishingResult",
          firemaking: "$firemakingResult",
          crafting: "$craftingResult",
          smithing: "$smithingResult",
          mining: "$miningResult",
          herblore: "$herbloreResult",
          agility: "$agilityResult",
          thieving: "$thievingResult",
          slayer: "$slayerResult",
          farming: "$farmingResult",
          runecrafting: "$runecraftingResult",
          hunter: "$hunterResult",
          construction: "$constructionResult",
          summoning: "$summoningResult",
          dungeoneering: "$dungeoneeringResult",
          divination: "$divinationResult",
          invention: "$inventionResult",
          archaeology: "$archaeologyResult",
          necromancy: "$necromancyResult",
        },
        dxpComptotal: {
          $add: [
            "$attackResult",
            "$defenceResult",
            "$strengthResult",
            "$constitutionResult",
            "$rangedResult",
            "$prayerResult",
            "$magicResult",
            "$cookingResult",
            "$woodcuttingResult",
            "$fletchingResult",
            "$fishingResult",
            "$firemakingResult",
            "$craftingResult",
            "$smithingResult",
            "$miningResult",
            "$herbloreResult",
            "$agilityResult",
            "$thievingResult",
            "$slayerResult",
            "$farmingResult",
            "$runecraftingResult",
            "$hunterResult",
            "$constructionResult",
            "$summoningResult",
            "$dungeoneeringResult",
            "$divinationResult",
            "$inventionResult",
            "$archaeologyResult",
            "$necromancyResult",
          ],
        },
      },
    },
  ];
};
