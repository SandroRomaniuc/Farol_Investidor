import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountUp, FaEllipsisV } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
  ContainerTable,
} from './styles';

export default function Setting() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>Créditos</h3>
          <div>
            <span>
              <FaSortAmountUp
                size={12}
                color="#ddd"
                style={{ marginRight: 10 }}
              />
              Sort
            </span>
            <span>
              <FaFilter
                size={10}
                color='#ddd'
                style={{ marginRight: 10 }}
              />
              Filter
            </span>
          </div>
        </ContentHeader>

        <ContainerTable>
          <table>
            <thead>
              <th align="left">Origin link</th>
              <th align="left">name</th>
              <th align="left">Date</th>
              <th align="center">&nbsp;</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="http://clipart-library.com/clipart/8i6oBAbXT.htm" target="_blank">
                    clipart-library.com/clipart/8i6oBAbXT.htm
                  </a>
                </td>
                <td>
                  <label>Lighthouse</label>
                </td>
                <td>
                  <label>14.03.2020</label>
                  <span>13:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </ContainerTable>
      </Content>
    </Container>
  );
}
