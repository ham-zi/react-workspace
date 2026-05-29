import {
  StyledWrap,
  StyledTitle,
  InnerWrap,
  StyledCard,
  StyledNo,
  StyledNoticeTitle,
  StyledWriter,
} from "./NoticeList.styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const NoticeList = () => {
  // 스프링부트 서버로 요청을 보내는 코드
  axios();
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    /*
      fetch("http://localhost:/api/notices")
      .then((response) => response.json())
      .then((data) => console.log(data));
      */
    axios.get("http://localhost/api/notices").then((data) => {
      setNotices(data.data);
    });
  }, []);

  return (
    <>
      <StyledWrap>
        <StyledTitle>공지사항</StyledTitle>
        <InnerWrap>
          {notices.length === 0 ? (
            <div>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
              <StyledCard></StyledCard>
            </div>
          ) : (
            notices.map((e) => {
              return (
                <StyledCard onClick="">
                  <StyledNo>{e.noticeNo}</StyledNo>
                  <StyledNoticeTitle>{e.noticeTitle}</StyledNoticeTitle>
                  <StyledWriter>{e.noticeWriter}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default NoticeList;
