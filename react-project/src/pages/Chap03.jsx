// AJAX요청을 보내서 공지사항 목록을 조회해왔음
import { styled } from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid light gray;
  margin: 40px 0px;
  color: white;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;

const NoticeInfo = (props) => {
  console.log(props);
  const { noticeTitle, noticeNo, noticeWriter, color } = props.notice;
  return (
    <StyledDiv color={color}>
      <h3>공지사항 제목 : {noticeTitle} </h3>
      <strong>{noticeNo}번 게시글</strong> <br />
      <label>작성자 : {noticeWriter}</label>
    </StyledDiv>
  );
};

const notices = [
  {
    noticeNo: "1",
    noticeTitle: "공지사항1",
    noticeWriter: "관리자",
    color: "blue",
  },
  {
    noticeNo: "2",
    noticeTitle: "공지사항2",
    noticeWriter: "관리자",
    color: "green",
  },
  {
    noticeNo: "3",
    noticeTitle: "공지사항3",
    noticeWriter: "관리자",
  },
];

const PropPrint = (props) => {
  //props.num = 2;
  console.log(props);
};

const Chap03 = () => {
  if (notices.longth == 0) {
    return <h1> 조회 결과가 존재하지 않습니다.</h1>;
  }

  return (
    <>
      <PropPrint num={1} />
      {/*} 1절
      <StyledDiv>
        <h3>공지사항 제목 : {notices[0].noticeTitle} </h3>
        <strong>{notices[0].noticeNo}번 게시글</strong> <br />
        <label>작성자 : {notices[0].noticeWriter}</label>
      </StyledDiv>
      <StyledDiv>
        <h3>공지사항 제목 : {notices[1].noticeTitle}</h3>
        <strong>{notices[1].noticeNo}번 게시글</strong> <br />
        <label>작성자 : {notices[1].noticeWriter}</label>
      </StyledDiv>
      <StyledDiv>
        <h3>공지사항 제목 : {notices[2].noticeTitle}</h3>
        <strong>{notices[2].noticeNo}번 게시글</strong> <br />
        <label>작성자 : {notices[2].noticeWriter}</label>
      </StyledDiv>

      <NoticeInfo notice={notices[0]} />
      <NoticeInfo notice={notices[1]} />
      <NoticeInfo notice={notices[2]} />
        */}

      {notices ? (
        notices.map((e) => <NoticeInfo notice={e} key={e.noticeNo} />)
      ) : (
        <h1> 조회결과가 존재하지 않습니다. </h1>
      )}
    </>
  );
};

export default Chap03;
