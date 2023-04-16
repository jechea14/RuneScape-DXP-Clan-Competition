import React from "react";
import { skillIcons, skillModifiers } from "@/utils/misc";
import Image from "next/image";
import Head from "next/head";
import Avatar from "@/components/Avatar";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/misc";
import Spinner from "@/components/Spinner";

export default function Player() {
  const router = useRouter();
  const playerId = router.query.id;
  const { data, error, isLoading } = useSWR(
    playerId ? (
      `https://etk-double-xp.onrender.com/api/data/player/${playerId}`
    ) : (
      <Spinner />
    ),
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
        <div className="">
          <table>
            <thead>
              <tr className="bg-slate-700">
                <td></td>
                <td className="w-28 text-sm text-right p-2">Current XP</td>
                <td className="w-28 text-sm text-right">XP Gained</td>
                <td className="w-32 text-sm text-right">Comp Modifier</td>
                <td className="w-28 text-sm text-right">DXP Comp</td>
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
                <td className="text-right text-green-600 font-medium p-1">
                  {Intl.NumberFormat("en-US").format(data[0].dxpComptotal)}
                </td>
              </tr>
              {Object.keys(data[0].latestXp).map((keyName, keyIndex) => {
                if (keyName === "_id") {
                  return null;
                }
                const capitalizedSkill =
                  keyName.charAt(0).toUpperCase() + keyName.slice(1);
                return (
                  <tr key={keyIndex} className="even:bg-slate-800">
                    <td className="flex items-center space-x-2 p-1">
                      <Image
                        src={skillIcons[keyIndex + 1]}
                        width={20}
                        height={20}
                        alt={`${keyName}-icon`}
                      />
                      <p>{capitalizedSkill}</p>
                    </td>
                    <td className="text-right">
                      {Intl.NumberFormat("en-US").format(
                        data[0].latestXp[keyName]
                      )}
                    </td>
                    <td className="text-green-600 font-medium text-right">
                      {Intl.NumberFormat("en-US").format(
                        data[0].xpDeltas[keyName]
                      )}
                    </td>
                    <td className="font-medium text-right">
                      x{skillModifiers[keyIndex]}
                    </td>
                    <td className="text-right pr-1">
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
      </main>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://etk-double-xp.onrender.com/api/data/player/${context.params.id}`
//   );
//   const playerData = await res.json();
//   return {
//     props: {
//       playerData,
//     },
//   };
// }
