import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Review = (props) => {
  const [review, setReview] = useState([]);
  const [update, setUpdate] = useState(false);
  const [drop, setDrop] = useState(false);
  const navi = useNavigate();

  const [content, setContent] = useState("");
  const [newContent, setNewContent] = useState("");

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const newContentHandler = (e) => {
    setNewContent(e.target.value);
    console.log(e.target.value);
  };

  const updateHandler = () => {
    setUpdate(!update);
    setDrop(false);
  };

  const dropHandler = () => {
    setDrop(!drop);
    setUpdate(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const updateReview = () => {
    axios
      .patch(`http://localhost/api/busans/${props.id}/reviews`, {
        content: content,
        updateContent: newContent,
      })
      .then((result) => {
        console.log(result);
      });
  };

  const deleteReview = () => {
    console.log(content);
    axios
      .delete(`http://localhost/api/busans/${props.id}/reviews`, {
        data: { content: content },
      })
      .then((result) => {});
  };

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
      <button onClick={updateHandler}>수정버튼</button> ||
      <button onClick={dropHandler}>삭제버튼</button>
      {update && (
        <form onClick={submitHandler}>
          변경할 내용 :{" "}
          <input
            type="text"
            placeholder="변경할 내용"
            onChange={contentHandler}
          />
          수정내용 :{" "}
          <input
            type="text"
            placeholder="수정할 내용"
            onChange={newContentHandler}
          />{" "}
          <br />
          <button onClick={updateReview}>수정 하기</button>
        </form>
      )}
      {drop && (
        <form onClick={submitHandler}>
          삭제할 내용 :{" "}
          <input
            type="text"
            placeholder="삭제할 내용 입력"
            onChange={contentHandler}
          />
          <br />
          <button onClick={deleteReview}>버튼</button>
        </form>
      )}
      {review.length != 0 ? (
        review.map((e, i) => (
          <div key={i}>
            <hr />
            <h4>{e.content}</h4>
            <h5>{e.createDate}</h5>
            <h5>별점 : {e.rating}</h5>
            <br></br>
          </div>
        ))
      ) : (
        <h2>아직 리뷰가 없습니다.</h2>
      )}
    </>
  );
};
export default Review;
