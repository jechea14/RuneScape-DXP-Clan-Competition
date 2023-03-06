import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import Table from "../components/Table";

function Home() {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: () =>
  //     axios.get("http://localhost:3000/api/data/get-oldest-and-latest-data"),
  // });
  // console.log(data);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bracketA, setBracketA] = useState([]);
  const [bracketB, setBracketB] = useState([]);
  const [bracketC, setBracketC] = useState([]);
  const [bracketD, setBracketD] = useState([]);
  const [bracketE, setBracketE] = useState([]);
  const [bracketF, setBracketF] = useState([]);
  const [bracketG, setBracketG] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api/data/");
      setData(
        res.data.data
          .reverse(
            (a, b) => a.totalLevelBeforeDxp - b.totalLevelBeforeDxp
          )
          .filter((user) => user.dxpComptotal > 0)
      );
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const bracketA = data.filter(
        (user) => user.totalLevelBeforeDxp <= 2000
      );

      const bracketB = data.filter(
        (user) =>
          user.totalLevelBeforeDxp >= 2001 &&
          user.totalLevelBeforeDxp <= 2300
      );
      const bracketC = data.filter(
        (user) =>
          user.totalLevelBeforeDxp >= 2301 &&
          user.totalLevelBeforeDxp <= 2600
      );
      const bracketD = data.filter(
        (user) =>
          user.totalLevelBeforeDxp >= 2601 &&
          user.totalLevelBeforeDxp <= 2700
      );
      const bracketE = data.filter(
        (user) =>
          user.totalLevelBeforeDxp >= 2701 &&
          user.totalLevelBeforeDxp <= 2800
      );
      const bracketF = data.filter(
        (user) =>
          user.totalLevelBeforeDxp >= 2801 &&
          user.totalLevelBeforeDxp <= 2850
      );
      const bracketG = data.filter(
        (user) => user.totalLevelBeforeDxp >= 2851
      );

      setBracketA(bracketA);
      setBracketB(bracketB);
      setBracketC(bracketC);
      setBracketD(bracketD);
      setBracketE(bracketE);
      setBracketF(bracketF);
      setBracketG(bracketG);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Homee</h2>
      {data.length > 0 && (
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
