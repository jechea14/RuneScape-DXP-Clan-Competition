import React from "react";
// import axios from "axios";
import BracketTable from "@/components/BracketTable";
import Head from "next/head";

function brackets({ sortData }) {
  const bracketA = sortData?.filter((user) => user.totalLevelBeforeDxp <= 2000);
  const bracketB = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2001 && user.totalLevelBeforeDxp <= 2300
  );
  const bracketC = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2301 && user.totalLevelBeforeDxp <= 2600
  );
  const bracketD = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2601 && user.totalLevelBeforeDxp <= 2700
  );
  const bracketE = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2701 && user.totalLevelBeforeDxp <= 2800
  );
  const bracketF = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2801 && user.totalLevelBeforeDxp <= 2850
  );
  const bracketG = sortData?.filter((user) => user.totalLevelBeforeDxp >= 2851);

  return (
    <>
      <Head>
        <title>Brackets - Elite Team Killerz</title>
      </Head>
      <main>
        <h2>Brackets</h2>
        <div className="flex flex-col items-center">
          {sortData && (
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket A: <=2k Total"}
                  arr={bracketA}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket B: 2001 - 2.3k Total"}
                  arr={bracketB}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket C: 2301 - 2.6k Total"}
                  arr={bracketC}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket D: 2601 - 2.7k Total"}
                  arr={bracketD}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket E: 2701 - 2.8k Total"}
                  arr={bracketE}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket F: 2801 - 2850 Total"}
                  arr={bracketF}
                />
              </div>
              <div className="h-full">
                <BracketTable
                  bracketName={"Bracket G: 2851+ Total"}
                  arr={bracketG}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://etk-double-xp.onrender.com/api/data/");
  const sortData = await res.data?.sort(
    (a, b) => a.totalLevelBeforeDxp - b.totalLevelBeforeDxp
  );
  return { props: { sortData } };
}

export default brackets;
