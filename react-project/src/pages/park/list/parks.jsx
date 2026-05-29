import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Parks = () => {
  const [page, setPage] = useState(1);
  const [parks, setParks] = useState([]);
  const nevi = useNavigate();
  const more = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    axios.get(`http://localhost/api/parks?page=${page}`).then((e) => {
      //console.log(e);
      const parkList = e.data.response.body.items;
      //console.log(parkList);
      setParks(parkList);
      setParks([...parks, ...parkList]);
    });
  }, [page]);

  return (
    <>
      {parks.length == 0 ? (
        <h1>화면 준비중...</h1>
      ) : (
        parks.map((park) => (
          <div
            key={park.manageNo}
            onClick={() => nevi(`/parks/${park.manageNo}`)}
          >
            <h2>시도 : {park.insttNm}</h2>
            <h4>공원이름 : {park.parkNm}</h4>
            <h4>공원종류 : {park.parkSe}</h4>
            <h5>특징 : {park.mvmFclty}</h5>
            <hr></hr>
          </div>
        ))
      )}
      <button onClick={more}> 더보기 </button>
    </>
  );
};

export default Parks;
