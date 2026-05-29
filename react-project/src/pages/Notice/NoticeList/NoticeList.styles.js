/*
  No, Title, Writer
*/

import styled from "styled-components";

export const StyledWrap = styled.div`
    width : 100%
    box-sizing : border-box;
    min-height : 800px;
    height : auto;
    background-color : #051d05;
    color : white;
`;

export const StyledTitle = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 800;
  text-align: center;
  margin: 65px 0px;
`;

export const InnerWrap = styled.div`
  width: 70%;
  margin : auto;
  min-height: 390px;
  border-radius
  height: auto;
  background-color: #efede2;
  border:1px solid  black;
`;

export const StyledCard = styled.div`
  width: 180px;
  height: 150px;
  margin: 10px 10px;
  padding: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  display: inline-block;
  vertical-align: top;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const StyledNo = styled.h4`
  font-size: 11px;
  font-weight: 400;
  color: black;
  margin: 20px;
`;

export const StyledNoticeTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin: 20px;
`;

export const StyledWriter = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: brown;
`;
