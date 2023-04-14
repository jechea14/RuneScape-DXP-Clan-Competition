import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Table from "../components/Table";

export default function Home({ sortData }) {
  const [isLoading, setIsLoading] = useState(false);
  // const { isLoading, error, data } = useQuery("data", fetchData);
  console.log(sortData);
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

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error {error}</div>;

  return (
    <>
      <Head>
        <title>Elite Team Killerz</title>
      </Head>
      <main>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl p-6">DXP Competition</h1>
          {sortData && (
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
              <div className="h-full">
                <Table bracketName={"Bracket A: <=2k Total"} arr={bracketA} />
              </div>
              <div className="h-full">
                <Table
                  bracketName={"Bracket B: 2001 - 2.3k Total"}
                  arr={bracketB}
                />
              </div>
              <div className="h-full">
                <Table
                  bracketName={"Bracket C: 2301 - 2.6k Total"}
                  arr={bracketC}
                />
              </div>
              <div className="h-full">
                <Table
                  bracketName={"Bracket D: 2601 - 2.7k Total"}
                  arr={bracketD}
                />
              </div>
              <div className="h-full">
                <Table
                  bracketName={"Bracket E: 2701 - 2.8k Total"}
                  arr={bracketE}
                />
              </div>
              <div className="h-full">
                <Table
                  bracketName={"Bracket F: 2801 - 2850 Total"}
                  arr={bracketF}
                />
              </div>
              <div className="h-full">
                <Table bracketName={"Bracket G: 2851+ Total"} arr={bracketG} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://etk-double-xp.onrender.com/api/data/");
    const sortData = await res.data.data
      .sort((a, b) => b.dxpComptotal - a.dxpComptotal)
      .filter((user) => user.dxpComptotal > 0);
    return { props: { sortData } };
  } catch (err) {
    console.log(err);
  }
}
