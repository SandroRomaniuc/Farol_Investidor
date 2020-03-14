import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 10px;

  border-bottom: 1px solid #ddd;
  border-width: 100%;

  & div {
    display: flex;
    flex-direction: row;

    & span {
      padding-left: 10px;
    }
  }
`;

export const TitleText = styled.span`
  font-family: Muli;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  width: 100%;

  color: #252733;
`;
