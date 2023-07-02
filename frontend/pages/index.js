import useSWR from "swr";
import Head from "next/head";
import Table from "../components/Table";
import { fetcher } from "@/utils/misc";
import Spinner from "@/components/Spinner";

export default function Home() {
  const { data = {}, error, isLoading } = useSWR(
    `https://etk-double-xp.onrender.com/api/data/`,
    fetcher
  );
  // if (isLoading) return <Spinner />;
  // if (error) return <div>{error.message}</div>;

  // const sortData = data.data
  //   .sort((a, b) => b.dxpComptotal - a.dxpComptotal)
  //   .filter((user) => user.dxpComptotal > 0);

  let sortData = [];
  if (data && data.data) {
    sortData = data.data
      .sort((a, b) => b.dxpComptotal - a.dxpComptotal)
      .filter((user) => user.dxpComptotal > 0);
  }

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
        <title>Elite Team Killerz</title>
      </Head>
      <main>
        <div className="flex flex-col items-center px-6 md:px-0">
          <h1 className="text-2xl p-6">
            Double XP Competition Friday May 19 - Monday May 29
          </h1>
          <h1 className="text-xl p-6">Updates every 4 hours</h1>



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

        {isLoading && <Spinner />}
        {error && <div>{error.message}</div>}
      </main>
    </>
  );
}
