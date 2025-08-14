import React from "react";
import BracketTable from "@/components/BracketTable";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "@/utils/misc";
import Spinner from "@/components/Spinner";
import Reveal from "@/components/Reveal";

const DEV_HOST = "localhost:3000/api/data/";
const API_HOST = "https://etk-double-xp.onrender.com/api/data/";

function Brackets() {
  const { data, error, isLoading } = useSWR(API_HOST, fetcher);

  const sortData = data?.data.sort(
    (a, b) => a.totalLevelBeforeDxp - b.totalLevelBeforeDxp
  );

  const bracketA = sortData?.filter((user) => user.totalLevelBeforeDxp <= 2400);
  const bracketB = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2401 && user.totalLevelBeforeDxp <= 2800
  );
  const bracketC = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2801 && user.totalLevelBeforeDxp <= 2950
  );
  const bracketD = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2951 && user.totalLevelBeforeDxp <= 3500
  );
  const bracketE = sortData?.filter((user) => user.totalLevelBeforeDxp >= 3501);
  // const bracketF = sortData?.filter(
  //   (user) =>
  //     user.totalLevelBeforeDxp >= 2901 && user.totalLevelBeforeDxp <= 2950
  // );
  // const bracketG = sortData?.filter((user) => user.totalLevelBeforeDxp >= 2951);

  return (
    <>
      <Head>
        <title>Brackets - Elite Team Killerz</title>
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-2xl p-6">
          Brackets - Total Levels at the start of DXP
        </h1>
        <div>
          {isLoading && <Spinner />}
          {error && <div>{error.message}</div>}
          {sortData && (
            <Reveal>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket A: <= 2.4k Total"}
                    arr={bracketA}
                  />
                </div>
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket B: 2401 - 2.8k Total"}
                    arr={bracketB}
                  />
                </div>
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket C: 2801 - 2950 Total"}
                    arr={bracketC}
                  />
                </div>
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket D: 2901 - 3500 Total"}
                    arr={bracketD}
                  />
                </div>
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket E: 3501+ Total"}
                    arr={bracketE}
                  />
                </div>
                {/* <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket F: 2901 - 2950 Total"}
                    arr={bracketF}
                  />
                </div>
                <div className="h-full">
                  <BracketTable
                    bracketName={"Bracket G: 2951+ Total"}
                    arr={bracketG}
                  />
                </div> */}
              </div>
            </Reveal>
          )}
        </div>
      </main>
    </>
  );
}

export default Brackets;
