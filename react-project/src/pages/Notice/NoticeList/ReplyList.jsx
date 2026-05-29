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
import { useNavigate } from "react-router-dom";
const ReplyList = () => {
  // 스프링부트 서버로 요청을 보내는 코드
  //axios();
  const [notices, setNotices] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    /*
      fetch("http://localhost:/api/notices")
      .then((response) => response.json())
      .then((data) => console.log(data));
      */
    axios.get("http://localhost/api/replies").then((res) => {
      console.log(res);
      setNotices(res.data);
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
                <StyledCard
                  key={e.replyNo}
                  onClick={() => {
                    navi(`/replies/${e.replyNo}`);
                  }}
                >
                  <StyledNo>{e.replyNo}</StyledNo>
                  <StyledNoticeTitle>{e.replyTitle}</StyledNoticeTitle>
                  <StyledWriter>{e.replyWriter}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default ReplyList;
