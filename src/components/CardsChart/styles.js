import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 12px 0px 12px;
  max-width: 322px;
  height: auto;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;

  text-align: center;
  letter-spacing: 0.4px;
`;

export const Title = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.3px;

  color: #9FA2B4;
  font-size: 16px;
  text-transform: capitalize;
`;

export const Information = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #252733;
`;
