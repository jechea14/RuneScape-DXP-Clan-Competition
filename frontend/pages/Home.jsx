import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

function Home() {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: () =>
  //     axios.get("http://localhost:3000/api/data/get-oldest-and-latest-data"),
  // });
  // console.log(data);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/data/get-oldest-and-latest-data"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  console.log(data["latestSnapshot"].data);
  const latestSnapshotData = data["latestSnapshot"].data;
  const oldestSnapshotData = data["oldestSnapshot"].data;
  return (
    <div>
      <h2>Home</h2>
      {data["latestSnapshot"].data.map((document) => {
        return <div>{document.username}</div>;
      })}
    </div>
  );
}

export default Home;
