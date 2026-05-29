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

const MemberList = () => {
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
    axios.get("http://localhost/api/members").then((data) => {
      setNotices(data.data);
    });
  }, []);

  return (
    <>
      <StyledWrap>
        <StyledTitle>회원정보</StyledTitle>
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
                <StyledCard onClick={() => navi(`/members/${e.userId}`)}>
                  <StyledNo>{e.userId}</StyledNo>
                  <StyledNoticeTitle>{e.userName}</StyledNoticeTitle>
                  <StyledWriter>{e.email}</StyledWriter>
                </StyledCard>
              );
            })
          )}
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default MemberList;
