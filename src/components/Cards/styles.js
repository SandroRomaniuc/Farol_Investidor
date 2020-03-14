import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 30px 0px;
  background: #fff;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: block;
  color: #252733;
  width: ${props => (props.size === 'big' ? 546 : 258)}px;
  height: ${props => (props.size === 'big' ? 336 : 134)}px;
  padding: 20px 0px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 45px;
`;
