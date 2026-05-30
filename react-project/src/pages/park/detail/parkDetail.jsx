import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParkDetail = (props) => {
  const { id } = useParams();

  const [park, setPark] = useState({});

  useEffect(() => {
    axios.get(`http://localhost/api/parks/${id}`).then((result) => {
      const el = result.data.response.body.items[0];
      console.log(el);
      setPark(el);
    });
  }, []);

  useEffect(() => {
    if (park.parkNm === "") return;
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(park.latitude, park.longitude), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, park.parkNm);

  return (
    <>
      <div>
        <h4>공원이름 : {park.parkNm}</h4>
        <h4>지역 : {park.insttNm}</h4>
        <h4>공원컨셉 : {park.parkSe}</h4>
      </div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default ParkDetail;
