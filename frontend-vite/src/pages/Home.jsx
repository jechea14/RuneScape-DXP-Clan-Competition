import axios from "axios";
import { useQuery } from "react-query";
import Table from "../components/Table";

function Home() {
  const { isLoading, error, data } = useQuery("data", fetchData);
  async function fetchData() {
    const res = await axios.get("http://localhost:3000/api/data/");
    const sortData = await res.data.data
      .sort((a, b) => b.dxpComptotal - a.dxpComptotal)
      .filter((user) => user.dxpComptotal > 0);
    return sortData;
  }

  const bracketA = data?.filter((user) => user.totalLevelBeforeDxp <= 2000);
  const bracketB = data?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2001 && user.totalLevelBeforeDxp <= 2300
  );
  const bracketC = data?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2301 && user.totalLevelBeforeDxp <= 2600
  );
  const bracketD = data?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2601 && user.totalLevelBeforeDxp <= 2700
  );
  const bracketE = data?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2701 && user.totalLevelBeforeDxp <= 2800
  );
  const bracketF = data?.filter(
    (user) =>
      user.totalLevelBeforeDxp >= 2801 && user.totalLevelBeforeDxp <= 2850
  );
  const bracketG = data?.filter((user) => user.totalLevelBeforeDxp >= 2851);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error {error}</div>;

  return (
    <div>
      <h2>DXP Competition</h2>

      {data && (
        <div>
          <Table bracketName={"Bracket A"} arr={bracketA} />
          <Table bracketName={"Bracket B"} arr={bracketB} />
          <Table bracketName={"Bracket C"} arr={bracketC} />
          <Table bracketName={"Bracket D"} arr={bracketD} />
          <Table bracketName={"Bracket E"} arr={bracketE} />
          <Table bracketName={"Bracket F"} arr={bracketF} />
          <Table bracketName={"Bracket G"} arr={bracketG} />
        </div>
      )}
    </div>
  );
}

export default Home;
