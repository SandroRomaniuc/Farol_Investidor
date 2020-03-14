import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountUp, FaEllipsisV } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
  ContainerTable,
} from './styles';

export default function Tickets() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>All tickets</h3>
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
              <th align="left" colSpan="2">Ticket details</th>
              <th align="left">Customer name</th>
              <th align="left">Date</th>
              <th align="left">Priority</th>
              <th align="center">&nbsp;</th>
            </thead>
            <tbody>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s810/3_Beautiful-girl-with-a-gentle-smile.jpg" alt="beatiful woman" />
                  </picture>
                </td>
                <td>
                  <label>Contact Email not Linked</label>
                  <span>Updated 1 day ago</span>
                </td>
                <td>
                  <label>Linda Forever</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="left">
                  <Link to="/">HIGH</Link>
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
