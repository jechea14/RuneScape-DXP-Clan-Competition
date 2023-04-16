import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const skills = `
* Skills
  - Count as **0.5x**: attack, def, str, hp, mage, range, herb, summoning, farming, invention, arch, dung
  - Count as **1x**:  thieve, craft, fletching
  - Count as **2x**: hunter, fm, smithing, con, prayer, cooking, slayer
  - Count as **3x**: agility, div, fishing, woodcutting, mining, rc
`;

const totalLvlBracketSystem = `
* Total Lvl Bracket System 
  -  If your total lvl reaches the bracket threshold during DXP, nothing changes. You stay in the bracket you were placed in
  -  A: <=2k 
  -  B: 2001 - 2.3k
  -  C: 2301 - 2.6k
  -  D: 2601 - 2.7k
  -  E: 2701 - 2.8k
  -  F: 2801 - 2850
  -  G: 2851+
`

const prizes = `
* Prizes in gp: (May change during DXP as I see fit)
  * Prize distributions are based off previous DXPs of active players in each bracket

  - Bracket A = 1st: 55m gp (Bond for IM/HCIM)

  - Bracket B = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp

  - Bracket C = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp, 3rd: 25m gp

  - Bracket D = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp, 3rd: 25m gp

  - Bracket E = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp, 3rd: 25m gp

  - Bracket F = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp, 3rd: 25m gp, 4th: 25m gp

  - Bracket G = 1st: 55m gp (Bond for IM/HCIM), 2nd: 40m gp, 3rd: 25m gp, 4th: 25m gp
`

const winners = `
* Winners: 
  - Announced on the ETK discord. They have the option to KEEP or PASS their prize by dming me on discord or in runescape cc if I'm on. Passing the prize donates it to the next DXP competition. Winners will be contacted via cc as well
  - No response = Disqualification (DQ)
  - There will be a DEADLINE to claim, if no one claims then the prizes will be donated to next DXP
  - DQd winners will have their prizes donated to the next DXP competition as well
`

function about() {
  return (
    <>
      <Head>
        <title>About - Elite Team Killerz</title>
      </Head>
      <main className="prose text-slate-100">
        <ReactMarkdown className="text-slate-100">## Rules</ReactMarkdown>
        <ReactMarkdown>
          * Ironmemes and HCIM can participate in the competition to win a Bond
          BUT they have to be 1st place in their respective brackets
        </ReactMarkdown>
        <ReactMarkdown>
          * Alts: You can only pick either your main or one alt account to
          participate. Not both or I will disqualify
        </ReactMarkdown>
        <ReactMarkdown>
          * ETK Discord only. Those who win in their bracket but is not in the
          discord is disqualified
        </ReactMarkdown>
        <ReactMarkdown>{totalLvlBracketSystem}</ReactMarkdown>
        <ReactMarkdown>
        {skills}
        </ReactMarkdown>

        <ReactMarkdown>* Prize pool: TBD</ReactMarkdown>
        <ReactMarkdown>{prizes}</ReactMarkdown>
        <ReactMarkdown>{winners}</ReactMarkdown>
      </main>
    </>
  );
}

export default about;
