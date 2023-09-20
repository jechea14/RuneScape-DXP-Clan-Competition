import React from "react";
import { skillIcons, skillModifiers } from "@/utils/misc";
import Image from "next/image";
import Head from "next/head";
import Avatar from "@/components/Avatar";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/misc";
import Spinner from "@/components/Spinner";
import Reveal from "@/components/Reveal";

const DEV_HOST = `localhost:3000/api/data/player/${playerId}`;
const API_HOST = `https://etk-double-xp.onrender.com/api/data/player/${playerId}`;

export default function Player() {
  const router = useRouter();
  const playerId = router.query.id;
  const { data, error, isLoading } = useSWR(
    playerId ? API_HOST : <Spinner />,
    fetcher
  );
  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  if (!data) {
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>{data[0]._id} - Elite Team Killerz</title>
      </Head>
      <main className="flex flex-col items-center">
        <div className="flex items-center">
          <Avatar data={data[0]} width={65} height={70} />
          <h1 className="text-lg font-bold">{data[0]._id}</h1>
        </div>
        <Reveal>
          <div className="px-4 overflow-x-auto w-full flex justify-center">
            <table className="">
              <thead>
                <tr className="bg-slate-700">
                  <td></td>
                  <td className="w-28 text-sm text-right py-2">Current XP</td>
                  <td className="w-28 text-sm text-right">XP Gained</td>
                  <td className="w-32 text-sm text-right">
                    Competition Modifier
                  </td>
                  <td className="w-32 text-sm text-right pr-2">
                    DXP Competition
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex items-center space-x-2 p-1">
                    {" "}
                    <Image
                      src={skillIcons[0]}
                      width={20}
                      height={20}
                      alt="overall-icon"
                    />
                    <p>Overall</p>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-right text-green-600 font-medium pr-2">
                    {Intl.NumberFormat("en-US").format(data[0].dxpComptotal)}
                  </td>
                </tr>
                {Object.keys(data[0].latestXp).map((keyName, keyIndex) => {
                  if (keyName === "_id") {
                    return null;
                  }
                  // Capitalizes first letter of skill
                  const capitalizedSkill =
                    keyName.charAt(0).toUpperCase() + keyName.slice(1);
                  return (
                    <tr key={keyIndex} className="even:bg-slate-800">
                      <td className="flex items-center space-x-2 p-1">
                        {/* Skill Icon */}
                        <Image
                          src={skillIcons[keyIndex + 1]}
                          width={20}
                          height={20}
                          alt={`${keyName}-icon`}
                        />
                        {/* Skill Name */}
                        <p>{capitalizedSkill}</p>
                      </td>
                      {/* Current XP */}
                      <td className="text-right">
                        {Intl.NumberFormat("en-US").format(
                          data[0].latestXp[keyName]
                        )}
                      </td>
                      {/* XP Gained */}
                      <td className="text-blue-400 font-medium text-right">
                        {Intl.NumberFormat("en-US").format(
                          data[0].xpDeltas[keyName]
                        )}
                      </td>
                      {/* Competition Modifiers */}
                      <td className="font-medium text-right">
                        x{skillModifiers[keyIndex]}
                      </td>
                      {/* DXP Competition Results */}
                      <td className="text-right pr-2 text-green-500">
                        {Intl.NumberFormat("en-US").format(
                          data[0].dxpCompResults[keyName]
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="text-sm">
          Note: If the current XP of a skill is 0, it means the RuneScape API
          does not record low xp values.
        </p>
      </main>
    </>
  );
}
