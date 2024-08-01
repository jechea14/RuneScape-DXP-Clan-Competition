import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Reveal from "@/components/Reveal";

const markdown = `
For August 2, 2024 - August 12, 2024 DXP:

* Alts: You can only pick either your main or one alt account to participate. Not both or else one will be disqualified.
* ETK Discord only. Those who win in their bracket but is not in the discord is disqualified.

* Total Level Bracket System 
  -  If your total level reaches the bracket threshold during DXP, nothing changes. You stay in the bracket you were placed in.
  -  A: <= 2.1k
  -  B: 2101 - 2.4k
  -  C: 2401 - 2.7k
  -  D: 2701 - 2.8k
  -  E: 2801 - 2.9k
  -  F: 2901 - 2950
  -  G: 2951+

* Skills
  - Count as **0.5x**: Attack, Defense, Strength, Constition(hp), Magic, Range, Necromancy, Herblore, Summoning, Farming, Invention, Archaeology, Dungeoneering
  - Count as **1x**: Thieving, Crafting, Fletching
  - Count as **2x**: Hunter, Firemaking, Smithing, Construction, Prayer, Cooking, Slayer
  - Count as **3x**: Agility, Divination, Fishing, Woodcutting, Mining, Runecrafting

* Prize pool: 720m gp (Donations are appreciated)

* Prizes in gp: (May change during DXP)
  * Prize distributions are based off previous DXPs of active players in each bracket and may change depending on final results.

TBD

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
          <Reveal>
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
          </Reveal>
        </div>
      </main>
    </>
  );
}

export default rules;
