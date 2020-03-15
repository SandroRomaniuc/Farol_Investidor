import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
`;

export const Content = styled.div`
  display: block;
  background: #fff;
  min-width: 1122px;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;

  & span {
    align-items: center;
    padding: 0px 30px 0px 5px;

    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4B506D;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  table {
    color: #444;
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        margin-bottom: 20px;
        text-align: left;
        border-bottom: 2px solid #DFE0EB;
      }

      th {
        padding-bottom: 10px;
        text-transform: capitalize;
        font-family: Muli;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.2px;
        color: #9FA2B4;
      }
    }

    tbody {
      tr {
        border-top: 1px solid #ddd;
        background: #fff;
        transition: all 1s ease;
        padding-left: 5px;

        &:hover {
          background: #eee;
          transition: all 0.5s ease;
          padding-left: 10px;
        }
      }

      td {
        padding: 14px 0;
        transition: all 1s ease;

        &:last-of-type {
          text-align: right;
        }

        & picture img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin-right: 15px;
        }
      }

      & label {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-family: Muli;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #252733;
      }

      & span {
        font-family: Muli;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #C5C7CD;
      }

      & a {
        font-family: Muli;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 14px;
        padding: 5px 10px;
        text-decoration: none;

        letter-spacing: 0.5px;
        text-transform: uppercase;

        color: #222;
        border-radius: 100px;
      }
    }
  }
`;

