import {
  RestaurantDetailMap,
  RestaurantWrap,
  RestaurantDetailOther,
  RestaurantDetailDescription,
  RestaurantDetailImg,
  RestaurantMoreButton,
  RestaurantTitle,
} from "../styles/Foods.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Review from "../Review/Review";

const Food = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const [load, isLoad] = useState(false);
  const [food, setFood] = useState({
    title: "",
    img: "",
    description: "",
    address: "",
    usageTime: "",
    lat: "",
    lng: "",
  });
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [success, setSuccess] = useState(true);

  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const ratingHandler = (e) => {
    setRating(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (content.trim() === "") {
      alert("내용을 입력하세요.");
      return;
    }

    if (!Number(rating) || Number(rating) < 1 || Number(rating) > 5) {
      alert("별점은 1 ~ 5를 입력해주세요");
      return;
    }

    axios
      .post(`http://localhost/api/busans/${id}/reviews`, {
        content: content,
        rating: rating,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          setContent("");
          setRating("");
          alert("리뷰 등록에 성공했습니다.");
          setSuccess((success) => !success);
        }
      });
  };

  useEffect(() => {
    axios.get(`http://localhost/api/busans/${id}`).then((result) => {
      const el = result.data.getFoodKr.item[0];
      setFood({
        title: el.MAIN_TITLE,
        img: el.MAIN_IMG_NORMAL,
        description: el.ITEMCNTNTS,
        address: el.ADDR1,
        usageTime: el.USAGE_DAY_WEEK_AND_TIME,
        lat: el.LAT,
        lng: el.LNG,
      });
      isLoad(true);
    });
  }, []);

  useEffect(() => {
    if (food.lat === "") return;

    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(food.lat, food.lng), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [food.lat]);

  if (!load) return <RestaurantTitle>로딩중...</RestaurantTitle>;

  return (
    <>
      <RestaurantWrap>
        <RestaurantTitle>{food.title}</RestaurantTitle>
        <RestaurantDetailImg src={food.img} />
        <RestaurantDetailDescription>
          {food.description}
        </RestaurantDetailDescription>
        <RestaurantDetailOther>{food.address}</RestaurantDetailOther>
        <RestaurantDetailOther>{food.usageTime}</RestaurantDetailOther>
        <RestaurantDetailMap id="map"></RestaurantDetailMap>
        <RestaurantMoreButton onClick={() => navi(-1)}>
          뒤로가기
        </RestaurantMoreButton>
      </RestaurantWrap>

      <div
        style={{
          width: "50%",
          margin: "auto",
          height: "120px",
          border: "1px solid black",
        }}
      >
        <form onSubmit={submitHandler}>
          후기 작성 :{" "}
          <input
            type="text"
            placeholder="후기 내용"
            onChange={contentHandler}
            value={content}
          />{" "}
          <hr />
          숫자 입력 :{" "}
          <input
            type="number"
            max="5"
            placeholder="별점"
            onChange={ratingHandler}
            value={rating}
          />{" "}
          <hr />
          <button style={{ border: "1px solid black" }}>작성버튼</button>
        </form>
      </div>

      <Review id={id} success={success} />
    </>
  );
};

export default Food;
