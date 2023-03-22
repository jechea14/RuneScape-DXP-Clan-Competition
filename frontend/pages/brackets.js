import React from "react";
import axios from "axios";
import BracketTable from "@/components/BracketTable";

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
    <main>
      <h2>Brackets</h2>
      <div className="flex flex-col items-center">
        {sortData && (
          <div className="">
            <BracketTable bracketName={"Bracket A"} arr={bracketA} />
            <BracketTable bracketName={"Bracket B"} arr={bracketB} />
            <BracketTable bracketName={"Bracket C"} arr={bracketC} />
            <BracketTable bracketName={"Bracket D"} arr={bracketD} />
            <BracketTable bracketName={"Bracket E"} arr={bracketE} />
            <BracketTable bracketName={"Bracket F"} arr={bracketF} />
            <BracketTable bracketName={"Bracket G"} arr={bracketG} />
          </div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/data/");
  const sortData = await res.data.data.sort(
    (a, b) => a.totalLevelBeforeDxp - b.totalLevelBeforeDxp
  );
  return { props: { sortData } };
}

export default brackets;
