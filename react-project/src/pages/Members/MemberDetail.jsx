import { useEffect, useState } from "react";
import {
  InnerWrap,
  StyledNo,
  StyledTitle,
  StyledWrap,
  StyledWriter,
} from "../Notice/NoticeList/NoticeList.styles";
import axios from "axios";
import { useParams } from "react-router-dom";

const MemberDetail = () => {
  const { id } = useParams();
  const [member, setMember] = useState({
    userId: "",
    userPwd: "",
    userName: "",
    email: "",
    enrollDate: "",
    modifyDate: "",
    status: "",
  });
  const [load, isLoad] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/api/members/${id}`).then((res) => {
      console.log(res);
      const obj = res.data;
      setMember({
        userId: obj.userId,
        userPwd: obj.userPwd,
        userName: obj.userName,
        email: obj.email,
        enrollDate: obj.enrollDate,
        modifyDate: obj.modifyDate,
        status: obj.status,
      });
      isLoad(true);
    });
  }, [id]);

  if (!load) {
    return (
      <StyledWrap>
        <StyledTitle>회원 정보를 조회중입니다...</StyledTitle>
      </StyledWrap>
    );
  }

  return (
    <>
      <StyledWrap>
        <InnerWrap>
          <StyledTitle>{member.userName}</StyledTitle>
          <StyledWriter>아이디 : {member.userId}</StyledWriter>
          <StyledWriter>비밀번호 : {member.userPwd}</StyledWriter>
          <StyledWriter>가입일 : {member.enrollDate}</StyledWriter>
          <StyledWriter>정보수정일 : {member.modifyDate}</StyledWriter>
          <StyledNo>회원상태 : {member.status}</StyledNo>
        </InnerWrap>
      </StyledWrap>
    </>
  );
};

export default MemberDetail;
