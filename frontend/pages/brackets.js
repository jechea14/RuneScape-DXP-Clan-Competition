import React from "react";
import axios from "axios";

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

  return <div>brackets</div>;
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/data/");
  const sortData = await res.data.data
    .sort((a, b) => b.dxpComptotal - a.dxpComptotal)
    .filter((user) => user.dxpComptotal > 0);
  return { props: { sortData } };
}

export default brackets;
