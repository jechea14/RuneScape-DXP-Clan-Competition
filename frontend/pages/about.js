import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const markdown = `
## Rules
* Ironmemes and HCIM can participate in the competition to win a Bond BUT they have to be 1st place in their respective brackets
* Alts: You can only pick either your main or one alt account to participate. Not both or I will disqualify
* ETK Discord only. Those who win in their bracket but is not in the discord is disqualified.

* Total Lvl Bracket System 
  -  If your total lvl reaches the bracket threshold during DXP, nothing changes. You stay in the bracket you were placed in
  -  A: <=2k 
  -  B: 2001 - 2.3k
  -  C: 2301 - 2.6k
  -  D: 2601 - 2.7k
  -  E: 2701 - 2.8k
  -  F: 2801 - 2850
  -  G: 2851+

* Skills
  - Count as **0.5x**: attack, def, str, hp, mage, range, herb, summoning, farming, invention, arch, dung
  - Count as **1x**:  thieve, craft, fletching
  - Count as **2x**: hunter, fm, smithing, con, prayer, cooking, slayer
  - Count as **3x**: agility, div, fishing, woodcutting, mining, rc

* Prize pool: TBD

* Prizes in gp: (May change during DXP as I see fit)
  * Prize distributions are based off previous DXPs of active players in each bracket

  - Bracket A = TBD

  - Bracket B = TBD

  - Bracket C = TBD

  - Bracket D = TBD

  - Bracket E = TBD

  - Bracket F = TBD

  - Bracket G = TBD

* Winners: 
  - Announced on the ETK discord. They have the option to KEEP or PASS their prize by dming me on discord or in runescape cc if I'm on. Passing the prize donates it to the next DXP competition. Winners will be contacted via cc as well
  - No response = Disqualification (DQ)
  - There will be a DEADLINE to claim, if no one claims then the prizes will be donated to next DXP
  - DQd winners will have their prizes donated to the next DXP competition as well
`

function about() {
  return (
    <main className="flex justify-center items-center mx-auto prose text-slate-300">
      <Head>
        <title>About - Elite Team Killerz</title>
      </Head>
      <section>
        <div>
          <ReactMarkdown
            components={
              {
                h2: ({children}) => (
                  <h2 className="text-slate-300">{children}</h2>
                ),
                strong: ({children}) => (
                  <strong className="text-slate-300">{children}</strong>
                ),
              }
            }
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </section>
    </main>
  );
}

export default about;
