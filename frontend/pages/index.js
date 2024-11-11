import useSWR from "swr";
import Head from "next/head";
import Table from "../components/Table";
import { fetcher } from "@/utils/misc";
import Spinner from "@/components/Spinner";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";

const DEV_HOST = "localhost:3000/api/data/";
const API_HOST = "https://etk-double-xp.onrender.com/api/data/";

export default function Home() {
  const { data = {}, error, isLoading } = useSWR(API_HOST, fetcher);

  const sortData = data?.data
    ?.sort((a, b) => b.dxpComptotal - a.dxpComptotal)
    .filter((user) => user.dxpComptotal > 0);

  const bracketA = sortData?.filter((user) => user.totalLevelBeforeDxp <= 2100);
  const bracketB = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2101 && user.totalLevelBeforeDxp <= 2400
  );
  const bracketC = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2401 && user.totalLevelBeforeDxp <= 2700
  );
  const bracketD = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2701 && user.totalLevelBeforeDxp <= 2800
  );
  const bracketE = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2801 && user.totalLevelBeforeDxp <= 2900
  );
  const bracketF = sortData?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2901 && user.totalLevelBeforeDxp <= 2950
  );
  const bracketG = sortData?.filter((user) => user.totalLevelBeforeDxp >= 2951);

  return (
    <>
      <Head>
        <title>Elite Team Killerz</title>
      </Head>
      <main>
        <div className="flex flex-col items-center px-6 md:px-0">
          <h1 className="text-2xl p-6">
            Double XP Week: November 15th 2024 - November 25th 2024
          </h1>
          <Countdown />
          <h1 className="text-xl p-6">Updates every 2 hours</h1>

          {isLoading && <Spinner />}
          {error && <div>{error.message}</div>}
          {sortData && (
            <Reveal>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
                <div className="h-full">
                  <Table
                    bracketName={"Bracket A: <=2.1k Total"}
                    arr={bracketA}
                  />
                </div>

                <div className="h-full">
                  <Table
                    bracketName={"Bracket B: 2101 - 2.4k Total"}
                    arr={bracketB}
                  />
                </div>
                <div className="h-full">
                  <Table
                    bracketName={"Bracket C: 2401 - 2.7k Total"}
                    arr={bracketC}
                  />
                </div>
                <div className="h-full">
                  <Table
                    bracketName={"Bracket D: 2701 - 2.8k Total"}
                    arr={bracketD}
                  />
                </div>
                <div className="h-full">
                  <Table
                    bracketName={"Bracket E: 2801 - 2.9k Total"}
                    arr={bracketE}
                  />
                </div>
                <div className="h-full">
                  <Table
                    bracketName={"Bracket F: 2901 - 2950 Total"}
                    arr={bracketF}
                  />
                </div>
                <div className="h-full">
                  <Table
                    bracketName={"Bracket G: 2951+ Total"}
                    arr={bracketG}
                  />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </main>
    </>
  );
}
