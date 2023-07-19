import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const markdown = `
For July 28, 2023 DXP:

* Ironmemes and HCIM can participate in the competition to win a Bond BUT they have to be 1st place in their respective brackets.
* Alts: You can only pick either your main or one alt account to participate. Not both or else one will be disqualified.
* ETK Discord only. Those who win in their bracket but is not in the discord is disqualified.

* Total Level Bracket System 
  -  If your total level reaches the bracket threshold during DXP, nothing changes. You stay in the bracket you were placed in.
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

* Prize pool: 700m gp = 500m base + 200m donation

* Prizes in gp: (May change during DXP)
  * Prize distributions are based off previous DXPs of active players in each bracket.

  - Bracket A = TBD

  - Bracket B = TBD

  - Bracket C = TBD

  - Bracket D = TBD

  - Bracket E = TBD

  - Bracket F = TBD

  - Bracket G = TBD

* Winners: 
  - Announced on the ETK discord. They have the option to KEEP or PASS their prize by dming IceKrystalx on discord or in runescape cc if she is on. Passing the prize donates it to the next DXP competition.
  - No response = Disqualification (DQ).
  - There will be a DEADLINE to claim, if no one claims then the prizes will be donated to next DXP.
  - DQd winners will have their prizes donated to the next DXP competition as well.
`;

function rules() {
  return (
    <>
      <Head>
        <title>Rules - Elite Team Killerz</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center mx-auto prose text-slate-300">
          <h1 className="text-2xl p-6 text-slate-300">Rules</h1>

          <section className="px-6 md:px-0">
            <div>
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-slate-300">{children}</h2>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-slate-300">{children}</strong>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default rules;
