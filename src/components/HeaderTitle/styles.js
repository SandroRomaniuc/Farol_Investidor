import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 12px 12px 12px;
  background: #fff;

  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.4px;
  color: #252733;

  & div {
    padding: 0px 10px;
  }

  & a {
    text-decoration: none;

    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 10px;

    text-align: right;
    letter-spacing: 0.2px;

    color: #3751FF;
  }
`;

export const Icon = styled.div`
  color: #ddd;
  margin-right: 10px;
`;

export const TitleText = styled.h3`
  color: #444;
  font-size: 18px;
  text-transform: capitalize;
`;

export const SubTitleText = styled.span`
  color: #9FA2B4;
  font-size: 12px;
  text-transform: capitalize;
`;
