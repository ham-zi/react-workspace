import { useState, useEffect } from "react";
import axios from "axios";

const Review = (props) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/api/busans/${props.id}/reviews`)
      .then((result) => {
        setReview([...result.data]);

        //오늘의 실습 :
        // 1번 OpenAPI 찾기 (지도 써먹을 수 있게 위도 경도 있는ㄱ ㅓ찾으면 좋음)
        // 2번 BootBackendServer로 요청보내서 응답받은 데이터 리액트단에 뿌리기
        // 3번 나만의 테이블 만들기 (후기, 게시글 등)
        // 4번 테이블에 cr할 수 있는 API만들어서 구현하기
      }, []);
  });

  return (
    <>
      {review.length != 0 ? (
        review.map((e, i) => (
          <div key={i}>
            <hr />
            <h4>{e.content}</h4>
            <h5>{e.createDate}</h5>
            <h5>별점 : {e.rating}</h5>
          </div>
        ))
      ) : (
        <h2>아직 리뷰가 없습니다.</h2>
      )}
    </>
  );
};
export default Review;
