import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 20px;

  border-bottom: 1px solid #ddd;

`;

export const Numbers = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.2px;
  color: #9FA2B4;
`;

export const TitleText = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;

  color: #252733;
`;
