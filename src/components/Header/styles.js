import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 0 -10px;
  background: #02064f;
  padding: 10px;
`;

export const Title = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;

  /* grayscale / black */
  color: #fff;
`;

export const ContentSearchAndNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;

export const Notification = styled.div`
float: right;

& span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  padding: 0px 3px;
  font-size: 12px;
  color: #222;
}

`;

export const SearchAndNotification = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;

  div {
    margin-left: 16px;

    padding-right: 20px;
    border-right: 1px solid #fff;

  }

  img {
    width: 25px;
    padding-left: 6px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-family: Muli, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  width: 275px;

  /* or 143% */
  text-align: right;
  letter-spacing: 0.2px;

  color: #fff;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 6px;
    padding: 2px;
    border: 1.5px solid #DFE0EB;
    box-shadow: 0 0 12px #ddd;
  }
`;
