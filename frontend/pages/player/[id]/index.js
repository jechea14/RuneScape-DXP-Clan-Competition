import React from "react";
import { skillIcons } from "@/utils/misc";
import Image from "next/image";
import Head from "next/head";

export default function Player({ playerData }) {
  return (
    <>
      <Head>
        <title>{playerData[0]._id} - Elite Team Killerz</title>
      </Head>
      <main>
        <div>
          <h1 className="text-lg font-bold">{playerData[0]._id}</h1>
        </div>
        <div className="flex flex-col items-center">
          <table>
            <thead>
              <tr className="bg-[#111111]">
                <td></td>
                <td>Current XP</td>
                <td>XP Gained</td>
                <td>DXP Comp</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center space-x-2">
                  {" "}
                  <Image
                    src={skillIcons[0]}
                    width={20}
                    height={20}
                    alt="overall-icon"
                  />
                  Overall
                </td>
                <td></td>
                <td></td>
                <td className="text-right text-green-600 font-medium">
                  {Intl.NumberFormat("en-US").format(
                    playerData[0].dxpComptotal
                  )}
                </td>
              </tr>
              {Object.keys(playerData[0].latestXp).map((keyName, keyIndex) => {
                if (keyName === "_id") {
                  return null;
                }
                const capitalizedSkill =
                  keyName.charAt(0).toUpperCase() + keyName.slice(1);
                return (
                  <tr key={keyIndex} className="even:bg-[#111111]">
                    <td className="flex items-center space-x-2">
                      <Image
                        src={skillIcons[keyIndex + 1]}
                        width={20}
                        height={20}
                        alt={`${keyName}-icon`}
                      />
                      {capitalizedSkill}
                    </td>
                    <td className="text-right">
                      {Intl.NumberFormat("en-US").format(
                        playerData[0].latestXp[keyName]
                      )}
                    </td>
                    <td className="text-green-600 font-medium text-right">
                      {Intl.NumberFormat("en-US").format(
                        playerData[0].xpDeltas[keyName]
                      )}
                    </td>
                    <td className="text-right">
                      {Intl.NumberFormat("en-US").format(
                        playerData[0].dxpCompResults[keyName]
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/data/player/${context.params.id}`
  );
  const playerData = await res.json();
  return {
    props: {
      playerData,
    },
  };
}
